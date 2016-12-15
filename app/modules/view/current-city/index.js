"use strict";

import Details from "./../details";
import Hourly from "./../hourly";
import eventMixin from "./../../common/eventMixin";
import "./../../../vendors/hammer";

export default class CurrentCity {
    constructor(elem) {
        this._elem = elem;

        this._isSmallClass = false;
        this._isMoreDetailsShown = false;
        
        
        this.details = new Details();
        this.hourly = new Hourly();

        
        this._elem.querySelector("[data-details]").appendChild(this.details.elem);
        this._elem.querySelector("[data-hourly]").appendChild(this.hourly.elem);

        this._cityInitHeight = getComputedStyle(this._elem).height;
        this._elem.addEventListener("click", this._manager.bind(this));
        this._elem.addEventListener("transitionend", this._onAnimationEnd.bind(this));

        this.setPanDirection();

        window.addEventListener("resize", event => {
            this.setPanDirection();
            this._cityInitHeight = getComputedStyle(this._elem).height;
        });

        this._hammertime.on("panup", this._handlePanUp.bind(this));

        this._hammertime.on("pandown", this._handlePanDown.bind(this));

        this.addPanClass();
    }

    setPanDirection() {
        if (this._isLandscape()) {
            this._hammertime = new Hammer(this._elem, {domEvents: true});
        } else {
            if (!this._hammertime) {
                this._hammertime = new Hammer(this._elem, {domEvents: true});
            }
            this._hammertime.get('pan').set({direction: Hammer.DIRECTION_ALL});
        }
    }

    getFreeSpaceFroDetails() {
        const details = this._elem.querySelector("[data-details]");
        const more = this._elem.querySelector("[data-more-details]");
        return more.getBoundingClientRect().top - details.getBoundingClientRect().top;
    }

    _handlePanUp(event) {
        if (!event.target.closest(".vertical")) {
            return;
        }

        let cityHeight = getComputedStyle(this._elem).height;

        if (parseInt(cityHeight) <= 150) {
            return;
        }

        if (parseInt(cityHeight) < parseInt(this._cityInitHeight) - 10) {
            this._elem.classList.add("small");
            this.details.hide();
            this._isSmallClass = true;
            this._elem.style.height = "150px";
            this._hideReloadButton();

            return;
        }

        this._elem.style.height = parseInt(cityHeight) - event.distance + "px";
        this.trigger(this.constructor.EVENTS.onChangeHeightByPan, event.distance);
    }

    _handlePanDown(event) {
        let cityHeight = getComputedStyle(this._elem).height;

        if (parseInt(cityHeight) > 155) {
            this._elem.classList.remove("small");
            this._isSmallClass = false;
            this._elem.style.height = "";
            return;
        }

        this._elem.style.height = parseInt(cityHeight) + event.distance + "px";
    }

    init() {
        this._elem.classList.remove("init");
    }

    destroy() {
        this._elem.classList.add("init");
    }

    render(data) {
        return new Promise((resolve, reject) => {
            this._elem.querySelector("[data-city-img]").src = data.img;
            this._elem.querySelector("[data-city-data]").innerHTML = data.data;
            this._elem.querySelector("[data-city-name]").innerHTML = data.name;
            this._elem.querySelector("[data-city-weather]").innerHTML = data.weather;
            this._elem.querySelector("[data-city-temp]").innerHTML = data.temp;

            this._elem.querySelector("[data-city-img]").onload = () => {
                resolve();
            };
        });
    }

    isSmallSize() {
        return this._elem.classList.contains("small");
    }

    getHeight() {
        return getComputedStyle(this._elem).height;
    }

    _manager(event) {
        const target = event.target;

        if (target.closest("[data-more-details]")) {
            event.preventDefault();
            this._toggleMoreView(target);
        }

        if (target.closest("[data-current-city-overlay]")) {
            this._toggleMoreView(this._elem.querySelector("[data-more-details]"));
        }

        if (target.closest("[data-reload-data]")) {
            event.preventDefault();
            this.trigger(this.constructor.EVENTS.onReloadDataRequest, "");
        }
    }

    _hideReloadButton() {
        this._elem.querySelector("[data-reload-data]").style.display = "none";
    }

    _showReloadButton() {
        this._elem.querySelector("[data-reload-data]").style.display = "";
    }

    _toggleMoreView(elem) {
        const self = this;

        if (!this._elem.classList.contains("show-more-details")) {
            this._elem.classList.add("show-more-details");

            if (this._elem.classList.contains("small")) {
                this.details.show();
                this.details.showMore();
            } else {
                this.details.showMore();
            }

            elem.innerHTML = "less details";

            this.trigger(this.constructor.EVENTS.onShowMoreDetails, "");

            setTimeout(() => {
                this._elem.classList.add("shown");
                this._isMoreDetailsShown = true;
            }, 0);

        } else {
            this._elem.classList.remove("shown");
            this.trigger(this.constructor.EVENTS.onHideMoreDetails, "");

            if (this._elem.classList.contains("small")) {
                this.details.hide();
            }
            this._elem.addEventListener("transitionend", function me(event) {
                self._elem.classList.remove("show-more-details");
                self._elem.removeEventListener("transitionend", me);
                self.details.hideMore();
                self.trigger(self.constructor.EVENTS.onHiddenMoreDetails, "");
                elem.innerHTML = "more details";
                self.details.rebuild(self.getFreeSpaceFroDetails());
                self._isMoreDetailsShown = false;
            });
        }
    }

    _isLandscape() {
        return document.documentElement.clientHeight < document.documentElement.clientWidth;
    }

    addPanClass() {
        if (this._isLandscape()) {
            this._elem.classList.remove("vertical");
        } else {
            if (document.documentElement.clientWidth >= 768) {
                return;
            }

            this._elem.classList.add("vertical");
        }
    }

    removeSmallClass() {
        if (this._isLandscape()) {
            this.details.show();
            this._elem.classList.remove("small");
        } else {
            if (this._isSmallClass) {
                this._elem.style.height = "50%";
                if (!this._isMoreDetailsShown) {
                    this.details.hide();
                }
                setTimeout(() => {
                    this._elem.style.height = "";
                    this._elem.classList.add("small");
                }, 0);
            }
        }
    }

    _onAnimationEnd() {
        this._elem.style.height = "";
        this.trigger(this.constructor.EVENTS.onAnimationEnd, "");

        if (this._isLandscape()) {
            this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimation, "");
        } else {
            if (this._elem.classList.contains("small")) {
                this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimationPanUp, document.documentElement.clientHeight - parseInt(getComputedStyle(this._elem).height));
            } else {
                this._showReloadButton();
                this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimationPanDown);
                this.details.rebuild(this.getFreeSpaceFroDetails());
                this.details.show();
            }
        }
    }

    static get EVENTS() {
        return {
            "onChangeHeightByPan": "onChangeHeightByPan",
            "onChangeHeightAfterAnimationPanUp": "onChangeHeightAfterAnimationPanUp",
            "onChangeHeightAfterAnimationPanDown": "onChangeHeightAfterAnimationPanDown",
            "onAnimationEnd": "onAnimationEnd",
            "onShowMoreDetails": "onShowMoreDetails",
            "onHideMoreDetails": "onHideMoreDetails",
            "onHiddenMoreDetails": "onHiddenMoreDetails",
            "onReloadDataRequest": "onReloadDataRequest",
            Hourly: Hourly.EVENTS
        }
    }
}

for (var key in eventMixin) {
    CurrentCity.prototype[key] = eventMixin[key];
}
