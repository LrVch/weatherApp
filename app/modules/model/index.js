"use strict";

import db from  "./db";
import FetchData from  "./fetchData";
import eventMixin from "./../common/eventMixin";


export default class Model {
    constructor() {
        this._db = db;
        this._fetchdata = new FetchData();

        this._fetchdata.on(FetchData.EVENTS.onDataFetched, this.dataHandler.bind(this));
        this._fetchdata.on(FetchData.EVENTS.onDataFetchError, this.hadnleError.bind(this));

        this.tzOffsetMinutes = 0;
    }

    _getUrls(city, api) {
        return [
            // api.url + api.weather + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid,
            api.cross + api.url + api.weather + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid,
             // api.url + api.forecast + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid
            api.cross + api.url + api.forecast + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid
        ]
    }

    getData(cityId) {
        this._fetchdata.getData(this._getUrls(cityId, this._db.api));
    }

    getDataForNewCity(city) {
        this.getData(city);
        this.tzOffsetMinutes = city.tzOffsetMinutes;
    }

    dataHandler(data) {
        // console.log("fetched data", data);

        this._writeDataForMain(data);
        this._writeDataForDetails(data);
        this._transformData(data);


        if (!this._cityIsExist(data[0].id)) {
            this._addCityToDb(
                {
                    name: data[0].name,
                    id: data[0].id,
                    active: true,
                    weight: this._setWeight(),
                    tzOffsetMinutes: this.tzOffsetMinutes
                }
            );
            this._setActiveCity(data[0].id);
            this.trigger(Model.EVENTS.onAddCity, {
                name: data[0].name,
                id: data[0].id,
                tzOffsetMinutes: this.tzOffsetMinutes
            });
            this.trigger(Model.EVENTS.onDataReady, this._db.activeCity);
        } else {
            this._setActiveCity(data[0].id);
            this.trigger(Model.EVENTS.onSetActiveCity, {id: data[0].id});
            this.trigger(Model.EVENTS.onDataReady, this._db.activeCity);
        }

        this._saveDataToLocalStorage();
        // console.log(this._db);
    }

    removeCityFromDb(id) {
        delete this._db.cities[id];
        this._saveDataToLocalStorage();
    }

    _cityIsExist(id) {
        return !!this._db.cities[id];
    }

    _setActiveCity(cityId) {
        for (let id in this._db.cities) {
            if (this._db.cities.hasOwnProperty(id)) {
                this._db.cities[id].active = false;
            }
        }

        this._db.cities[cityId].active = true;
    }

    _addCityToDb(data) {
        // this._db.cities[data.id] = {
        //     name: data.name,
        //     id: data.id,
        //     active: true,
        //     weight: data.weight,
        //     tzOffsetMinutes: this.tzOffsetMinutes
        // }
        this._db.cities[data.id] = data;
    }

    _setWeight() {
        const citiesKeys = Object.keys(this._db.cities);
        const cities = this._db.cities;

        if (citiesKeys.length === 0) {
            return 0;
        }

        const weights = [];

        for (let i = 0; i < citiesKeys.length; i++) {
            weights.push(cities[citiesKeys[i]].weight);
        }

        return Math.min(...weights) - 1;
    }

    _writeDataForMain(data) {
        const activeCity = this._db.activeCity;
        const main = data[0];

        activeCity.id = main.id;
        activeCity.tzOffsetMinutes = this.tzOffsetMinutes;
        activeCity.main.name = main.name;
        activeCity.main.weather = main.weather[0].main;
        activeCity.main.temp = Math.round(main.main.temp);
        activeCity.main.data = new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            weekday: 'short',
        });
        // activeCity.main.img = `/img/${this._db.transformIcons(main.weather[0].icon)}.svg`;
        activeCity.main.img = `img/${this._db.transformIcons(main.weather[0].icon)}.svg`;
    }

    _writeDataForDetails(data) {
        const details = [];
        const main = data[0];
        const getDetailsUnits = this._db.getDetailsUnits.bind(this._db);

        details.push([getDetailsUnits("pressure").str, Math.round(main.main.pressure), getDetailsUnits("pressure").unit]);
        details.push([getDetailsUnits("humidity").str, Math.round(main.main.humidity), getDetailsUnits("humidity").unit]);
        details.push([getDetailsUnits("wind").str, Math.round(main.wind.speed), getDetailsUnits("wind").unit]);
        details.push(["Sunrise", new Date(+(main.sys.sunrise + "000")).toLocaleString("ru", {
            timezone: 'UTC',
            hour: "numeric",
            minute: "numeric"
        })]);
        details.push(["Sunset", new Date(+(main.sys.sunset + "000")).toLocaleString("ru", {
            hour: "numeric",
            minute: "numeric"
        })]);

        this._db.activeCity.details = details;
    }

    _transformData(data) {
        const dataDays = data[1].list;
        const days = {};

        for(let day of dataDays) {
            let date = new Date(day.dt  * 1000);
            let keyTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

            if (!days[keyTime]) {
                days[keyTime] = [];
            }
            days[keyTime].push(day);
        }

        const today = new Date();
        const todayHourly = days[`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`];
        // console.log(todayHourly)
        // console.log(days)
        this._writeDataForTodayHourly(todayHourly);


        const daysKeys = (todayHourly) ? Object.keys(days).slice(1) : Object.keys(days);
        const nextDays = [];

        for(let day of daysKeys) {
            nextDays.push(days[day]);
        }

        // console.log(nextDays);
        this._writeDataForNextDays(nextDays);

        // console.log(dataDays);
    }

    _writeDataForTodayHourly(data) {
        const hourly = [];
        // console.log("_writeDataForTodayHourly", data);

        if (!data) {
            return;
        }

        for(let hour of data) {
            hourly.push({
                time: new Date(+(hour.dt + "000")).toLocaleString("RU", {
                    hour: 'numeric',
                    minute: 'numeric',
                    timezone: 'UTC'
                }),
                temp: parseInt(hour.main.temp)
            })
        }

        this._db.activeCity.hourly = hourly;
    }

    _writeDataForNextDays(data) {
        const days = [];

        for(let day of data) {
            days.push({
                hourly: {},
                img: `img/${this._db.transformIcons( this._getCurentDataForNextDay("weather.0.icon", day).slice(0, -1) + "d" )}.svg`,
                data: new Date(+(day[0].dt + "000")).toLocaleString("en-US", {
                    day: "numeric",
                    month: "short"
                }),
                main: this._getCurentDataForNextDay("weather.0.main", day),
                temp: {
                    day: Math.round(this._getCurentDataForNextDay("main.temp", day))
                }
            });
        }

        // console.log(data);

        this._db.activeCity.days = days;
    }

    _getCurentDataForNextDay(prop, day) {
        function gotObj(prop, obj) {
            let traceProp = prop.split(".");
            let res = obj[traceProp[0]];

            if (!res) {
                throw new Error("There is no such property");
            }

            if (traceProp.length > 1) {
                return gotObj(traceProp.slice(1).join("."), res);
            } else {
                return res;
            }
        }

        return day[4] ? gotObj(prop, day[4]) : gotObj(prop, day[day.length - 1]);
    }

    hadnleError(error) {
        console.log(error);
    }

    _firstLetterToUpperCase(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    reloadData() {
        this.getData({id: this._db.activeCity.id});
    }

    checkLocalStorage() {

        if (localStorage.getItem('cities')) {
            const cities = JSON.parse(localStorage.getItem("cities"));

            this._db.cities = cities;

            this._restoreData();
            this.trigger(Model.EVENTS.onRestoreDataBegin);
            // console.log(this._db);
        } else {
            this.trigger(Model.EVENTS.onEmptyStorage);
        }
    }

    _getActiveCity() {
        const cities = this._db.cities;
        let active = {};

        for (let city in cities) {
            if (cities.hasOwnProperty(city)) {
                if (cities[city].active) {
                    active = cities[city];
                }
            }
        }

        return active;
    }

    _restoreData() {
        const data = this._db.cities;
        const dataAsArray = this._transformDataFromObjToArray(data);
        const sortByWeightToTop = dataAsArray.slice().sort((a, b) => a.weight > b.weight);

        this.trigger(Model.EVENTS.onAddListOfCities, sortByWeightToTop);
        this.getData(this._getActiveCity());
    }

    _isEmptyObj(obj) {
        for (var key in obj) {
            return false;
        }

        return true;
    }

    _clearLocalStorage() {
        localStorage.removeItem("cities")
    }

    _transformDataFromObjToArray(obj) {
        const array = [];
        const keys = Object.keys(obj);

        for (let key of keys) {
            array.push(obj[key])
        }

        return array;
    }

    _saveDataToLocalStorage() {
        if (this._isEmptyObj(this._db.cities)) {
            this._clearLocalStorage();

            return;
        }

        const cities = JSON.stringify(this._db.cities);

        localStorage.setItem('cities', cities);
    }

    static get EVENTS() {
        return {
            "onDataReady": "onDataReady",
            "onDataReload": "onDataReload",
            "onAddCity": "onAddCity",
            "onSetActiveCity": "onSetActiveCity",
            "onAddListOfCities": "onAddListOfCities",
            "onRestoreDataBegin": "onRestoreDataBegin",
            "onEmptyStorage": "onEmptyStorage",
            FetchData: FetchData.EVENTS
        }
    }
}

for (var key in eventMixin) {
    Model.prototype[key] = eventMixin[key];
}