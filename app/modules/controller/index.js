'use strict';

// import {log} from './../stuff/logger';
import Model from './../model';
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
        this._model = new Model();
        this._view = new View();

        // this._view.nexDays.render(dataDays);
        // this._view.currentCity.details.render(dataDetails, this._view.currentCity.getFreeSpaceFroDetails());
        // this._view.currentCity.render(dataMain);

        this._model.on(Model.EVENTS.onDataReady, (data) => {
            this._view.currentCity.render(data.main);
            this._view.currentCity.details.render(data.details, this._view.currentCity.getFreeSpaceFroDetails());
            this._view.currentCity.init();
            this._view.nexDays.render(data.days);
        });
        
        this._model.on(Model.EVENTS.onAddCity, (data) => {

            this._view.cityViewer.addCity({name: data.name, geoId: data.id});
            // setTimeout(() => {
            //     this._view.hidePreloader();
            // }, 0);
        });

        this._model.on(Model.EVENTS.onSetActiveCity, (data) => {
            this._view.cityViewer._setActiveClass(document.querySelector("[data-geoid = '" + data.id + "']"));
            // setTimeout(() => {
            //     this._view.menu.hide();
            // }, 500);
        });
        
        this._model.on(Model.EVENTS.onAddListOfCities, (data) => {
            this._view.cityViewer.addListOfCities(data);
        });



        this._view.currentCity.on(View.EVENTS.CurrentCity.onReloadDataRequest, event => {
            this._model.reloadData();
        });



        this._view.on(View.EVENTS.resizeWindow, () => {
            if (document.documentElement.clientWidth < 768) {
                this._view.currentCity.details.render(this._model._db.activeCity.details, this._view.currentCity.getFreeSpaceFroDetails());
            }
        });
        
        

        this._view.currentCity.on(View.EVENTS.CurrentCity.onHiddenMoreDetails, () => {
            // console.log("hidden")
            this._view.currentCity.details.render(this._model._db.activeCity.details, this._view.currentCity.getFreeSpaceFroDetails());
        });
        
        this._view.currentCity.on(View.EVENTS.CurrentCity.onShowMoreDetails, () => {
            this._view.currentCity.hourly.render(this._getDataForHourlyView());
        });

        this._view.currentCity.on(View.EVENTS.CurrentCity.onHideMoreDetails, () => {
            this._view.currentCity.hourly.destroy();
        });



        this._view.search.on(View.EVENTS.Search.onGetCity, (cityData) => {
            const city = {};

            try {
                city.id = cityData.geonameId;
            } catch (e) {
                console.log(e);
                return;
            }

            this._model.getDataForNewCity(city);

            // this._view.showPreloader();
            // setTimeout(() => {

            // }, 0);

        });
        


        this._view.cityViewer.on(View.EVENTS.CityViewer.onSelectedCity, (geoId) => {
            // console.log(geoId);
            this._model.getDataForNewCity({id: geoId});
            
        });

        this._view.cityViewer.on(View.EVENTS.CityViewer.onDeleteCity, (geoId) => {
            this._model.removeCityFromDb(geoId);
        });

        this._view.cityViewer.on(View.EVENTS.CityViewer.onDeletAllCities, () => {
            console.log("очистить всю температуру");
            this._view.currentCity.destroy();
            this._view.nexDays.destroy();
            // this._model.clearLocalStorage();
        });


        this._model.checkLocalStorage();
    }

    _getDataForHourlyView() {
        return dataHourly;
    }
}