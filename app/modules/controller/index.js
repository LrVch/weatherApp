'use strict';

// import {log} from './../stuff/logger';
// import Model from './../model';
import View from './../view';


const dataDays = [
    {
        img: "img/m03d.svg",
        data: "12 Nov",
        main: "Cloudly",
        temp: {
            day: 28,
            night: 5
        }
    },
    {
        img: "img/m04d.svg",
        data: "12 Nov",
        main: "Cloudly",
        temp: {
            day: 18,
            night: 5
        }
    },
    {
        img: "img/m09d.svg",
        data: "12 Nov",
        main: "Cloudly",
        temp: {
            day: 18,
            night: 15
        }
    },
    {
        img: "img/m10d.svg",
        data: "12 Nov",
        main: "Cloudly",
        temp: {
            day: 18,
            night: 5
        }
    },
    {
        img: "img/m13d.svg",
        data: "12 Nov",
        main: "Cloudly",
        temp: {
            day: 18,
            night: 5
        }
    }
];
const dataDetails = [
    ["Pressure", 92, "unit"],
    ["Humidity", 55, "unit"],
    ["Wind", 6, "unit"],
    ["Clouds", "Cloudiness"],
    ["Rain", "none"]
];
const dataHourly = [
    {time: "11:00", temp: 22},
    {time: "12:00", temp: 22},
    {time: "13:00", temp: 22},
    {time: "14:00", temp: 22},
    {time: "15:00", temp: 22},
    {time: "16:00", temp: 22}
];
const dataMain = {
    name: "Boston, USA",
    weather: "Sunny",
    temp: 18,
    data: "5 December",
    img: "/img/m01d.svg"
};

export default class Controller {
    constructor() {
        // this._model = new Model();
        this._view = new View();

        this._view.nexDays.render(dataDays);
        this._view.currentCity.details.render(dataDetails, this._view.currentCity.getFreeSpaceFroDetails());
        // this._view.currentCity.render(dataMain);

        this._view.on(View.EVENTS.resizeWindow, () => {
            if (document.documentElement.clientWidth < 768) {
                this._view.currentCity.details.render(dataDetails, this._view.currentCity.getFreeSpaceFroDetails());
            }
        });

        this._view.currentCity.on(View.EVENTS.CurrentCity.onShowMoreDetails, value => {
            this._view.currentCity.hourly.render(this._getDataForHourlyView());
        });

        this._view.currentCity.on(View.EVENTS.CurrentCity.onHideMoreDetails, value => {
            this._view.currentCity.hourly.destroy();
        });

        this._view.search.on(View.EVENTS.Search.onGetCity, function (cityData) {
            console.log(cityData);
            alert(`${cityData.name}`);
        });

        this._view.cityViewer.on(View.EVENTS.CityViewer.onSelectedCity, function (geoId) {
            console.log(geoId);
            // alert("select " + geoId);
        });

        this._view.cityViewer.on(View.EVENTS.CityViewer.onDeleteCity, function (geoId) {
            console.log(geoId);
            // alert("delete " + geoId);
        });

        this._view.cityViewer.on(View.EVENTS.CityViewer.onDeletAllCities, function () {
            console.log("очистить всю температуру");
            // alert("delete " + geoId);
        });

        this._view.cityViewer.addCity({
            name: "Omsk, Russia",
            geoId: 12345
        });

    }

    _getDataForHourlyView() {
        return dataHourly;
    }
}