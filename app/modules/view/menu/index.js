"use strict";



class Menu {
    constructor(elem) {
        this._elem = elem;

        elem.addEventListener("click", this._manager.bind(this));

        this.setOffsetMargin();
    }

    setOffsetMargin() {
        this._elem.querySelector(".menu__city-viewer").style.marginRight = -this._getScrollWidth() + "px";
    }

    removeOffsetMargin() {
        this._elem.querySelector(".menu__city-viewer").style.marginRight = "";
    }

    _manager(event) {
        if (event.target.closest(".menu__close")) {
            this.hide();
        }

        if (event.target.closest(".menu__overflow")) {
            this.hide();
        }
    }

    show() {
        this._elem.classList.add("open");
    }

    hide() {
        this._elem.classList.remove("open");
    }

    enable() {
        document.body.classList.add("menuSwipe");
    }

    disable() {
        document.body.classList.remove("menuSwipe");
    }

    _getScrollWidth() {
        const div = document.createElement("div");
        div.style.overflow = "scroll";
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);

        return scrollWidth;
    }
}

export default Menu;