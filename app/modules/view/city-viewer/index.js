"use strict";

import eventMixin from "./../../common/eventMixin";
import templateItemCity from './item-city.pug';
import templateListItems from './list-items-template.pug';

const SELECTORS = {
    closeButton: "[data-city-viewer-item-close]",
    viewerItem: "[data-city-viewer-item]",
    viewerInner: "[data-city-viewer-inner]",
    activeClass: "active"
};

class CityViewer {
    constructor(elem) {
        this._elem = elem;
        this._state = {
            cities: 0
        };

        elem.addEventListener("click", this._manager.bind(this));

        this.on("onAddedListOfCities", () => {
            if (this.isScroll()) {
                this.trigger(this.constructor.EVENTS.isScroll);
            } else {
                this.trigger(this.constructor.EVENTS.noScroll);
            }
        });

        this._checkState();
    }

    getItemHeight() {
        return this._elem.querySelector(SELECTORS.viewerItem).clientHeight;
    }

    getAllItemsHeight() {
        const itemsLingth = this.getItemsLength();
        const itemHeight = this.getItemHeight();
        const itemMarginBottom = this.getItemMarginBottom();
        let result = 0;

        for (let i = 0; i < itemsLingth; i++) {
            result += itemHeight + itemMarginBottom;
        }

        result += itemHeight;

        return result;
    }

    isEmpty() {
        return this.getItemsLength() === 0;
    }

    showPreloader() {

    }

    hidePreloader() {

    }

    showPreloaderOnCity(elem) {
        elem.classList.add("show-preloader");
    }

    hidePreloaderOnCity(elem) {
        elem.classList.remove("show-preloader");
    }

    lockViewer() {
        this._elem.classList.add("blocked");
    }

    unlockViewer() {
        this._elem.classList.remove("blocked");
    }

    getViewerHeight() {
        return this._elem.clientHeight;
    }

    getItemMarginBottom() {
        return parseInt(getComputedStyle(this._elem.querySelector(SELECTORS.viewerItem)).marginBottom);
    }

    getItemsLength() {
        return this._elem.querySelectorAll(SELECTORS.viewerItem).length;
    }

    isScroll() {
        return this.getAllItemsHeight() > this.getViewerHeight();
    }

    addCity(cityData) {
        // console.log(cityData)
        const elem = templateItemCity(cityData);
        const div = document.createElement("div");

        div.innerHTML = elem;

        const newElem = div.firstElementChild;
        const parent = this._elem.querySelector(SELECTORS.viewerInner);

        parent.insertBefore(newElem, parent.firstElementChild);
        this._setActiveClass(newElem);
        this.trigger(this.constructor.EVENTS.onAddCity, this.isScroll());
    }

    addListOfCities(citiesData) {
        const html = templateListItems({cities: citiesData});
        const parent = this._elem.querySelector(SELECTORS.viewerInner);

        parent.insertAdjacentHTML("afterbegin", html);

        this.trigger(this.constructor.EVENTS.onAddedListOfCities);
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
        const tzOffsetMinutes = item.getAttribute("data-tzOffsetMinutes");

        this._setActiveClass(item);
        this.trigger(this.constructor.EVENTS.onSelectedCity, {
            geoId,
            tzOffsetMinutes
        });
    }

    _deleteCity(elemClose) {
        const elem = elemClose.closest(SELECTORS.viewerItem);
        const geoId = elem.getAttribute("data-geoId");

        elem.parentNode.removeChild(elem);

        if (elem.classList.contains(SELECTORS.activeClass)) {
            this._setNewActiveElement();
        }

        this._onDeleteCity(geoId);
    }

    _setNewActiveElement() {
        const newActiveElem = this._elem.querySelector(SELECTORS.viewerItem);

        if (!newActiveElem) {
            this.trigger(this.constructor.EVENTS.onDeletAllCities);
            return;
        }

        this._selectCity(newActiveElem);

        setTimeout(() => {
            this._setScrollTop();
        }, 0);
    }

    _setScrollTop() {
        if (!document.body.classList.contains("isLandscape")) {
            this._elem.querySelector(SELECTORS.viewerInner).scrollTop = 0;
        } else {
            if (document.documentElement.clientWidth >= 1024) {
                this._elem.querySelector(SELECTORS.viewerInner).scrollTop = 0;
            } else {
                window.scrollTo(0, 0);
            }
        }
    }

    _setActiveClass(elem) {
        const cities = this._elem.querySelectorAll(SELECTORS.viewerItem);

        Array.prototype.slice.call(cities).forEach(city => city.classList.remove("active"));
        elem.classList.add("active");
    }

    _onDeleteCity(geoId) {
        this.trigger(this.constructor.EVENTS.onDeleteCity, parseInt(geoId));

        if (this.getItemsLength() > 0) {
            this.trigger(this.constructor.EVENTS.onDeleteCityGetDimention, this.isScroll());
        }

    }

    getState() {
        return this._state;
    }

    _checkState() {
        this.on(this.constructor.EVENTS.onAddCity, () => {
            this._writeState();
        });

        this.on(this.constructor.EVENTS.onAddedListOfCities, () => {
            this._writeState();
        });

        this.on(this.constructor.EVENTS.onDeleteCity, () => {
            this._writeState();
        });

        this.on(this.constructor.EVENTS.onDeletAllCities, () => {
            this._writeState();
        });

        window.addEventListener("resize", () => {
            setTimeout(() => {
                this._writeState();
            }, 0);
        })
    }

    _writeState() {
        this._state.cities = this.getItemsLength();
        if (this.getItemsLength() === 0) {
            this._state.isScroll = false;
        } else {
            this._state.isScroll = this.isScroll();
        }
        this._state.isEmpty = this.isEmpty();
    }

    static get EVENTS() {
        return {
            "onSelectedCity": "onSelectedCity",
            "onDeleteCity": "onDeleteCity",
            "onDeletAllCities": "onDeletAllCities",
            "onDeleteCityGetDimention": "onDeleteCityGetDimention",
            "onAddCity": "onAddCity",
            "isScroll": "isScroll",
            "noScroll": "noScroll",
            "onAddedListOfCities": "onAddedListOfCities"
        }
    }
}

for (var key in eventMixin) {
    CityViewer.prototype[key] = eventMixin[key];
}

export default CityViewer;