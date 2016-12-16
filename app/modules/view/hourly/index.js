"use strict";

import "./../../../vendors/hammer";
import template from './template.pug';
import templateNA from './templateNA.pug';
import eventMixin from "./../../common/eventMixin";

export default class Hourly {
    constructor(elem) {
        this._elem = document.createElement("div");
        this._elem.className = "hourly";
        this.isRendered = false;


        this._swipeElem = new Hammer(this._elem, {domEvents: true});

        this._swipeElem.on("swipeleft", (ev) => {

            if (this._getLengthOfItems() < 5) {
                return;
            }
            
            this._slider.classList.add("slide");
            this.trigger(this.constructor.EVENTS.onSwipeLeft, "");
        });

        this._swipeElem.on("swiperight", (ev) => {
            if (this._getLengthOfItems() < 5) {
                return;
            }

            this._slider.classList.remove("slide");
            this.trigger(this.constructor.EVENTS.onSwipeRight, "");
        });

        this._swipeElem.on("swipe", (ev) => {
            this.trigger(this.constructor.EVENTS.onSwipe, "");
        });
    }

    _getLengthOfItems() {
        return this._elem.querySelectorAll(".hourly__slide").length;
    }

    render(data) {
        this._elem.innerHTML = template({slides: data});
        this._slider = this._elem.querySelector("[data-hourly-slider]");
        this._inner = this._elem.querySelector("[data-hourly-inner]");
        this.trigger(this.constructor.EVENTS.onRender, "");

        setTimeout(() => {
            this._elem.classList.add("shown");
            setTimeout(() => {
                this._elem.classList.add("shown-slider");
                this.isRendered = true;
            }, 50);
        }, 0);
    }

    refresh(data) {
        if (!this.isRendered) {
            return;
            
        }
        
        const slides = this._elem.querySelectorAll(".hourly__slide");

        for (let i = 0; i < data.length; i++) {
            slides[i].querySelector(".hourly__slide-time").innerHTML = data[i].time;
            slides[i].querySelector(".hourly__slide-temp").innerHTML = data[i].temp;
        }
    }

    renderNA() {
        this._elem.innerHTML = templateNA();
        this.trigger(this.constructor.EVENTS.onRender, "");

        setTimeout(() => {
            this._elem.classList.add("shown");
            setTimeout(() => {
                this._elem.classList.add("shown-slider");
            }, 50);
        }, 0);
    }

    destroy() {
        this.elem.innerHTML = "";
        this._elem.classList.remove("shown");
        this._elem.classList.remove("shown-slider");
        this.trigger(this.constructor.EVENTS.onDestroy, "");
        this.isRendered = false;
    }

    get elem() {
        return this._elem;
    }

    static get EVENTS() {
        return {
            "onRender": "onRender",
            "onDestroy": "onDestroy",
            "onSwipe": "onSwipe",
            "onSwipeLeft": "onSwipeLeft",
            "onSwipeRight": "onSwipeRight",
            "onTransitionEnd": "onTransitionEnd",
            "onDestroyTransitionEnd": "onDestroyTransitionEnd"
        }
    }
}

for (var key in eventMixin) {
    Hourly.prototype[key] = eventMixin[key];
}