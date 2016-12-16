'use strict';

// import {log} from './../stuff/logger';
import Model from './../model';
import View from './../view';


// const dataDays = [
//     {
//         img: "img/m03d.svg",
//         data: "12 Nov",
//         main: "Cloudly",
//         temp: {
//             day: 28,
//             night: 5
//         }
//     },
//     {
//         img: "img/m04d.svg",
//         data: "12 Nov",
//         main: "Cloudly",
//         temp: {
//             day: 18,
//             night: 5
//         }
//     },
//     {
//         img: "img/m09d.svg",
//         data: "12 Nov",
//         main: "Cloudly",
//         temp: {
//             day: 18,
//             night: 15
//         }
//     },
//     {
//         img: "img/m10d.svg",
//         data: "12 Nov",
//         main: "Cloudly",
//         temp: {
//             day: 18,
//             night: 5
//         }
//     },
//     {
//         img: "img/m13d.svg",
//         data: "12 Nov",
//         main: "Cloudly",
//         temp: {
//             day: 18,
//             night: 5
//         }
//     }
// ];
//
// const dataDetails = [
//     ["Pressure", 92, "unit"],
//     ["Humidity", 55, "unit"],
//     ["Wind", 6, "unit"],
//     ["Clouds", "Cloudiness"],
//     ["Rain", "none"]
// ];
// const dataHourly = [
//     {time: "11:00", temp: 22},
//     {time: "12:00", temp: 22},
//     // {time: "13:00", temp: 22},
//     // {time: "14:00", temp: 22},
//     // {time: "15:00", temp: 22},
//     // {time: "16:00", temp: 22}
// ];
// const dataMain = {
//     name: "Boston, USA",
//     weather: "Sunny",
//     temp: 18,
//     data: "5 December",
//     img: "/img/m01d.svg"
// };

export default class Controller {
    constructor() {
        this._model = new Model();
        this._view = new View();

        this._model.on(Model.EVENTS.onDataReady, (data) => {
            this._view.currentCity.render(data.main)
                .then(resolve => {
                    this._view.currentCity.details.render(data.details, this._view.currentCity.getFreeSpaceFroDetails());
                })
                .catch(error => {
                    throw new Error(error);
                });
            this._view.nexDays.render(data.days);
            this._view.hidePreloader();
            this._view.hideWelcomeScreen();
            this._view.currentCity.init();
            this._view.cityViewer.hidePreloaderOnCity(document.querySelector("[data-geoid = '" + data.id + "']"));
            this._view.cityViewer.unlockViewer();
            this._view.menu.enable();
            this._view.hideRefreshing();
            this._view.cityViewer.hidePreloaderOnAddCity();
            this._view.currentCity.hourly.refresh(data.hourly);
            this._view.search.enable();
        });

        this._model.on(Model.EVENTS.onFetchDataError, () => {
            this._view.search.enable();
            this._view.cityViewer.hidePreloaderOnAddCity();

            setTimeout(() => {
                this._view.showMessage("Connection error <br> try again or choose another city");
            });


        });


        this._model.on(Model.EVENTS.onRestoreDataBegin, () => {
            this._view.showPreloader();
            this._view.menu.disable();
            this._view.menu.removeStateIsEmpty();
        });

        this._model.on(Model.EVENTS.onEmptyStorage, () => {
            this._view.showWelcomeScreen();
        });
        
        this._model.on(Model.EVENTS.onAddCity, (data) => {
            // console.log(data)
            this._view.cityViewer.addCity({name: data.name, geoId: data.id, tzOffsetMinutes: data.tzOffsetMinutes});
            this._view.menu.removeStateIsEmpty();
        });

        // this._model.on(Model.EVENTS.onSetActiveCity, (data) => {
        //     this._view.cityViewer._setActiveClass(document.querySelector("[data-geoid = '" + data.id + "']"));
        // });
        
        this._model.on(Model.EVENTS.onAddListOfCities, (data) => {
            // console.log(data)
            this._view.cityViewer.addListOfCities(data);
        });



        this._view.currentCity.on(View.EVENTS.CurrentCity.onReloadDataRequest, event => {
            this._model.reloadData();
            this._view.showRefreshing();
            this._view.cityViewer.lockViewer();
        });
        
        

        this._view.currentCity.on(View.EVENTS.CurrentCity.onHiddenMoreDetails, () => {
        });
        
        this._view.currentCity.on(View.EVENTS.CurrentCity.onShowMoreDetails, () => {
            if (!this._getDataForHourlyView().length) {
                this._view.currentCity.hourly.renderNA();

                return;
            }

            this._view.currentCity.hourly.render(this._getDataForHourlyView());
        });

        this._view.currentCity.on(View.EVENTS.CurrentCity.onHideMoreDetails, () => {
            this._view.currentCity.hourly.destroy();
        });



        this._view.search.on(View.EVENTS.Search.onGetCity, (cityData) => {
            const city = {};
            // console.log(cityData)

            try {
                city.id = cityData.geonameId;
                city.tzOffsetMinutes = cityData.tzOffsetMinutes;
            } catch (e) {
                console.log(e);
                return;
            }

            this._view.search.disable();
            this._model.getDataForNewCity(city);
            this._view.cityViewer.lockViewer();
            if (!this._model.isCityInDb(city.id)) {
                this._view.cityViewer.showPreloaderOnAddCity();
            } else {
                this._view.cityViewer._setActiveClass(document.querySelector("[data-geoid = '" + city.id + "']"));
                this._view.cityViewer.showPreloaderOnCity(document.querySelector("[data-geoid = '" + city.id + "']"));
                document.querySelector("[data-geoid = '" + city.id + "']").scrollIntoView();
            }
        });
        


        this._view.cityViewer.on(View.EVENTS.CityViewer.onSelectedCity, (data) => {
            // console.log(data);
            this._model.getDataForNewCity({id: data.geoId, tzOffsetMinutes: data.tzOffsetMinutes});
            this._view.cityViewer.showPreloaderOnCity(document.querySelector("[data-geoid = '" + data.geoId + "']"));
            this._view.cityViewer.lockViewer();
        });

        this._view.cityViewer.on(View.EVENTS.CityViewer.onDeleteCity, (geoId) => {
            this._model.removeCityFromDb(geoId);
        });

        this._view.cityViewer.on(View.EVENTS.CityViewer.onDeletAllCities, () => {
            console.log("очистить всю температуру");
            this._view.currentCity.destroy();
            this._view.nexDays.destroy();
            this._view.showWelcomeScreen();
            this._view.menu.setStateIsEmpty();
        });


        this._model.checkLocalStorage();
    }

    _getDataForHourlyView() {
        return this._model._db.activeCity.hourly;
    }
}