"use strict";

import TeleportAutocomplete from "./../../../vendors/autocomplete/dist/teleport-autocomplete.min.js";
import  "./../../../vendors/autocomplete/dist/teleport-autocomplete.min.css";
import eventMixin from "./../../common/eventMixin"

class Search {
    constructor(elem) {
        this._elem = elem;
        const input = elem.querySelector(`.${elem.className}__input`);

        TeleportAutocomplete.init(input).on('change', cityData => {
            this._sendCityData(cityData);
        });
    }

    _sendCityData(cityData) {
        this.trigger(this.constructor.EVENTS.onGetCity, cityData);
    }

    static get EVENTS () {
        return {
            "onGetCity": "onGetCity"
        }
    }
}

for (var key in eventMixin) {
    Search.prototype[key] = eventMixin[key];
}

export default Search;