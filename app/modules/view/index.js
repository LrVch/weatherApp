"use strict";

import CurrentCity from "./current-city";
import NexDays from "./nex-days";
import Menu from "./menu";
import Search from "./search";
import CityViewer from "./city-viewer";
import './../../vendors/hammer';
import eventMixin from "./../common/eventMixin";


export default class View {
    constructor() {
        this._mainElement = new Hammer(document.body);
        this._mainElement.get('swipe').set({threshold: 0, velocity: 0.1});


        this.currentCity = new CurrentCity(document.querySelector("[data-current-city]"));
        this.nexDays = new NexDays(document.querySelector("[data-addition]"));
        this.menu = new Menu(document.querySelector("[data-menu]"));
        this.search = new Search(document.querySelector("[data-search]"));
        this.cityViewer = new CityViewer(document.querySelector("[data-city-viewer]"));


        this.cityViewer.on(CityViewer.EVENTS.onDeleteCityGetDimention, isScroll => {
            if (isScroll) {
                this.menu.setOffsetMargin();
            } else {
                this.menu.removeOffsetMargin();
            }
        });

        this.cityViewer.on(CityViewer.EVENTS.isScroll, () => {
            this.menu.setOffsetMargin();
        });

        this.cityViewer.on(CityViewer.EVENTS.onAddCity, isScroll => {
            if (isScroll) {
                this.menu.setOffsetMargin();
            } else {
                this.menu.removeOffsetMargin();
            }
        });

        this.currentCity.on(CurrentCity.EVENTS.onShowMoreDetails, event => {
            this.menu.disable();
        });

        this.currentCity.on(CurrentCity.EVENTS.onHideMoreDetails, event => {
            this.menu.enable();
        });

        this.currentCity.on(CurrentCity.EVENTS.onChangeHeightByPan, value => {
            this.nexDays.setHeight(parseInt(this.nexDays.getHeight()) + value + "px");
        });

        this.currentCity.on(CurrentCity.EVENTS.onChangeHeightAfterAnimationPanUp, value => {
            this.nexDays.setHeight(value + "px");
        });

        this.currentCity.on(CurrentCity.EVENTS.onChangeHeightAfterAnimationPanDown, () => {
            this.nexDays.clearHeight();
        });

        window.addEventListener("resize", this._addLandClass.bind(this, document.body));
        window.addEventListener("resize", event => {
            this.trigger(View.EVENTS.resizeWindow);
            this.currentCity.addPanClass();
            this.currentCity.removeSmallClass();
            this._enableDisableMenu();

            if (this.currentCity.isSmallSize() && !this._isLandscape()) {
                this.nexDays.setHeight(document.documentElement.clientHeight - parseInt(this.currentCity.getHeight()) + "px");
            } else {
                this.nexDays.clearHeight();
            }

            if (document.documentElement.clientWidth < 768) {
                this.currentCity.details.rebuild(this.currentCity.getFreeSpaceFroDetails());
            }
        });

        this._mainElement.on("swipeleft", (ev) => {
            // console.log("swipe")
            if (!ev.target.closest(".menuSwipe")) {
                return;
            }

            this.menu.hide();
        });

        this._mainElement.on("swiperight", (ev) => {
            if (!ev.target.closest(".menuSwipe")) {
                return;
            }

            this.menu.show();
        });

        this._addLandClass(document.body);
        this._enableDisableMenu();
    }

    showPreloader() {
        document.querySelector(".preloader").classList.add("show");
    }

    hidePreloader() {
        document.querySelector(".preloader").classList.remove("show");
    }

    showWelcomeScreen() {
        document.querySelector(".welcome-screen").classList.add("show");
    }

    hideWelcomeScreen() {
        document.querySelector(".welcome-screen").classList.remove("show");
    }

    _enableDisableMenu() {
        if (this._getScreenWidth() < 992) {
            this.menu.enable();
        } else {
            this.menu.disable();
        }
    }

    _addLandClass(elem) {
        if (this._isLandscape()) {
            elem.classList.add("isLandscape");
        } else {
            elem.classList.remove("isLandscape");
        }

    }

    _getScreenWidth() {
        return document.documentElement.clientWidth;
    }

    _isLandscape() {
        return document.documentElement.clientHeight < document.documentElement.clientWidth;
    }

    static get EVENTS() {
        return {
            "resizeWindow": "resizeWindow",
            CurrentCity: CurrentCity.EVENTS,
            NexDays: NexDays.EVENTS,
            Menu: Menu.EVENTS,
            Search: Search.EVENTS,
            CityViewer: CityViewer.EVENTS
        }
    }
}

for (var key in eventMixin) {
    View.prototype[key] = eventMixin[key];
}