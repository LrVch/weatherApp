"use strict";



class Menu {
    constructor(elem) {
        this._elem = elem;

        elem.addEventListener("click", this._closeMenu.bind(this));
    }

    _closeMenu(event) {
        if (event.target.closest(".menu__close")) {
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