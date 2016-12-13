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
    }

    _getUrls(city, api) {
        return [
            api.url + api.weather + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid,
            api.url + api.forecast + "?id=" + city.id + "&units=metric" + "&APPID=" + api.appid
        ]
    }

    getData(cityId) {
        this._fetchdata.getData( this._getUrls( cityId, this._db.api ) );
    }

    dataHandler(data) {
        console.log(data);
    }

    hadnleError(error) {
        console.log(error);
    }

    static get EVENTS () {
        return {
            FetchData: FetchData.EVENTS
        }
    }
}

for (var key in eventMixin) {
    Model.prototype[key] = eventMixin[key];
}

//fetchdata.getData(cities['1489425']);
//
//fetchdata.on(FetchData.EVENTS.onDataFetched, function(data) {
//    console.log(data);
//    db.data = data;
//    log(db);
//});
//
//fetchdata.on(FetchData.EVENTS.onDataFetchError, function(error) {
//    console.log(error);
//});