"use strict";



class Menu {
    constructor(elem) {
        this._elem = elem;

        elem.addEventListener("click", this._manager.bind(this));
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
}

export default Menu;