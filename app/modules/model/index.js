"use strict";

import db from  "./db";
import FetchData from  "./fetchData";
// import {log} from  "./../stuff/logger";
import eventMixin from "./../common/eventMixin";


export default class Model {
    constructor() {
        this._db = db;
        this._fetchdata = new FetchData();

        this._fetchdata.on(FetchData.EVENTS.onDataFetched, this.dataHandler.bind(this));
        this._fetchdata.on(FetchData.EVENTS.onDataFetchError, this.hadnleError.bind(this));

        console.log(this._transformId(125));
    }

    _getUrls(city, api) {
        return [
            api.url + api.weather + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid,
            api.url + api.forecast + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid
        ]
    }

    getData(cityId) {
        this._fetchdata.getData(this._getUrls(cityId, this._db.api));
    }

    getDataForNewCity(city) {
        this.getData(city);
    }

    dataHandler(data) {
        console.log(data);

        this._writeDataForMain(data);
        this._writeDataForDetails(data);


        if (!this._cityIsExist(data[0].id)) {
            this._addCityToDb({name: data[0].name, id: data[0].id});
            this._setActiveCity(data[0].id);
            this.trigger(Model.EVENTS.onAddCity, {
                name: data[0].name,
                id: data[0].id
            });
            this.trigger(Model.EVENTS.onDataReady, this._db.activeCity);
        } else {
            this._setActiveCity(data[0].id);
            this.trigger(Model.EVENTS.onSetActiveCity, {id: data[0].id});
            this.trigger(Model.EVENTS.onDataReady, this._db.activeCity);
        }

        this._saveDataToLocalStorage();
        console.log(this._db);
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
        this._db.cities[data.id] = {
            name: data.name,
            id: data.id,
            active: true
        }
    }

     _transformId(id) {
        const mask = "__"
        return `${mask}${id}`;
    }

    _writeDataForMain(data) {
        const activeCity = this._db.activeCity;
        const main = data[0];

        activeCity.id = main.id;
        activeCity.main.name = main.name;
        activeCity.main.weather = main.weather[0].main;
        activeCity.main.temp = Math.round(main.main.temp);
        activeCity.main.data = new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "short"
        });
        activeCity.main.img = `/img/${this._db.transformIcons(main.weather[0].icon)}.svg`;
    }

    _writeDataForDetails(data) {
        const details = [];
        const main = data[0];
        const getDetailsUnits = this._db.getDetailsUnits.bind(this._db);

        details.push([getDetailsUnits("pressure").str, Math.round(main.main.pressure), getDetailsUnits("pressure").unit]);
        details.push([getDetailsUnits("humidity").str, Math.round(main.main.humidity), getDetailsUnits("humidity").unit]);
        details.push([getDetailsUnits("wind").str, Math.round(main.wind.speed), getDetailsUnits("wind").unit]);
        details.push(["Sunrise", new Date(+(main.sys.sunrise + "000")).toLocaleString("en-US", {
            timezone: 'UTC',
            hour: "numeric",
            minute: "numeric"
        })]);
        details.push(["Sunset", new Date(+(main.sys.sunset + "000")).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric"
        })]);

        this._db.activeCity.details = details;
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
            console.log(this._db);
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

        this.trigger(Model.EVENTS.onAddListOfCities, dataAsArray);

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
            FetchData: FetchData.EVENTS
        }
    }
}

for (var key in eventMixin) {
    Model.prototype[key] = eventMixin[key];
}