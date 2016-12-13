"use strict";

import eventMixin from "./../../common/eventMixin";
import {DataReadError, FetchDataError} from "./../../common/errors";

export default class FetchData {

    getData(urls) {
        let chain = Promise.resolve();
        const results = [];
        const self = this;

        this.trigger("onStartFetchData");

        urls.forEach(function(url) {
            chain = chain
                .then(() => fetch(url))
                .then((response) => {
                    if (response.status !== 200) {
                        const error = new Error(response.statusText);

                        error.code = response.status;

                        throw error;
                    } else {
                        return response.json();
                    }
                })
                .catch((error) => {
                    if (error.name === "SyntaxError") {
                        throw new DataReadError("Синтаксическая ошибка в данных полученных с сервера", error);
                    } else {
                        throw new FetchDataError(error.message, error);
                    }
                })
                .then((data) => {
                    results.push(data);
                });
        });

        chain.then(() => {
            self.trigger(self.constructor.EVENTS.onDataFetched, results);
        }).catch((error) => {
            self.trigger(self.constructor.EVENTS.onDataFetchError, error);
        });

    }

    static get EVENTS () {
        return {
            "onDataFetched": "onDataFetched",
            "onDataFetchError": "onDataFetchError",
            "onStartFetchData": "onStartFetchData"
        }
    }
}

for (var key in eventMixin) {
    FetchData.prototype[key] = eventMixin[key];
}