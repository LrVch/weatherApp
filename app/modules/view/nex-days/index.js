"use strict";

import template from './template.pug';

export default class NexDays {
    constructor(elem) {
        this._elem = elem;
    }

    getHeight() {
        return getComputedStyle(this._elem).height;
    }

    setHeight(value) {
        this._elem.style.height = value;
    }

    clearHeight() {
        this._elem.style.height = "";
    }

    render(data) {
        this._elem.innerHTML = template({items: data});
    }
}

