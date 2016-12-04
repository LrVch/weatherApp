"use strict";

import eventMixin from "./../../common/eventMixin";
import templateItemCity from './item-city.pug';

const SELECTORS = {
    closeButton: "[data-city-viewer-item-close]",
    viewerItem: "[data-city-viewer-item]",
    viewerInner: "[data-city-viewer-inner]",
    activeClass: "active"
};

class CityViewer {
    constructor (elem) {
        this._elem = elem;

        elem.addEventListener("click", this._manager.bind(this));
    }

    addCity(cityData) {
        const elem = templateItemCity(cityData);
        const div = document.createElement("div");

        div.innerHTML = elem;

        const newElem = div.firstElementChild;
        const parent = this._elem.querySelector(SELECTORS.viewerInner);

        parent.insertBefore(newElem, parent.firstElementChild);
        this._setActiveClass(newElem);
    }

    _manager(event) {
        const target = event.target;

        if (target.closest(SELECTORS.closeButton)) {
            event.preventDefault();

            const close = target.closest(SELECTORS.closeButton);

            this._deleteCity(close);
            return;
        }

        if (target.closest(SELECTORS.viewerItem)) {
            const item = target.closest(SELECTORS.viewerItem);

            this._selectCity(item);
            return;
        }
    }

    _selectCity(item) {
        const geoId = item.getAttribute("data-geoId");

        this._setActiveClass(item);
        this.trigger(this.constructor.EVENTS.onSelectedCity, parseInt(geoId));
    }

    _deleteCity(elemClose) {
        const elem = elemClose.closest(SELECTORS.viewerItem);
        const geoId = elem.getAttribute("data-geoId");

        elem.parentNode.removeChild(elem);

        if (elem.classList.contains(SELECTORS.activeClass)){
            this._setNewActiveElement();
        }

        this._onDeleteCity(geoId);
    }

    _setNewActiveElement() {
        const newActiveElem = this._elem.querySelector(SELECTORS.viewerItem);

        this._selectCity(newActiveElem);

        // TODO
        // поправить прокрутку в верх при удалени элемента на размере экрана от айпад в горизонте
        setTimeout(() => {
            if (!document.body.classList.contains("isLandscape")) {
                this._elem.querySelector(SELECTORS.viewerInner).scrollTop = 0;
            } else {
                window.scrollTo(0, 0);
            }
        }, 0);
    }

    _setActiveClass(elem) {
        const cities = this._elem.querySelectorAll(SELECTORS.viewerItem);

        Array.prototype.slice.call(cities).forEach(city => city.classList.remove("active"));
        elem.classList.add("active");
    }

    _onDeleteCity(geoId) {
        this.trigger(this.constructor.EVENTS.onDeleteCity, parseInt(geoId));
    }

    static get EVENTS () {
        return {
            onSelectedCity: "onSelectedCity",
            onDeleteCity: "onDeleteCity"
        }
    }
}

for (var key in eventMixin) {
    CityViewer.prototype[key] = eventMixin[key];
}

export default CityViewer;