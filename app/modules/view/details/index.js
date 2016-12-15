"use strict";

import template from './template.pug';

export default class Details {
    constructor() {
        this._elem = document.createElement("div");
        this._elem.className = "details";
    }

    getFontSize() {
        return getComputedStyle(this._elem).fontSize;
    }

    setFontSize(value) {
        this._elem.style.fontSize = value;
    }

    getElem() {
        return this._elem;
    }

    clearFontSize() {
        this._elem.style.fontSize = "";
    }

    hide() {
        this._elem.classList.add("hidden");
    }

    show() {
        this._elem.classList.remove("hidden");
    }

    showMore() {
        this._elem.classList.add("open");
    }

    hideMore() {
        this._elem.classList.remove("open");
    }
    
    render(data, freeSpace) {
        const itemHeight = this._getItemInListHeight();
        let col = parseInt(freeSpace / itemHeight) >= 2 ? parseInt(freeSpace / itemHeight) : 1;
        col = (col > 4) ? 4 : col;
        // const html = template({items: data, freeSpace: ()});
        this._elem.innerHTML = template({items: data, freeSpace: col});


        // console.log(col);
        // console.log(freeSpace);
        // console.log(freeSpace / itemHeight);
    }
    
    rebuild(freeSpace) {
        const elems = this._elem.querySelectorAll(".details__item ");
        const itemHeight = this._getItemInListHeight();
        let col = parseInt(freeSpace / itemHeight) >= 2 ? parseInt(freeSpace / itemHeight) : 1;
        col = (col > 4) ? 4 : col;

        for(let elem of elems) {
            elem.classList.remove("datails--more");
        }

        for(let i = 0; i < elems.length; i++) {
            if (i >= col) {
                elems[i].classList.add("datails--more");
            }
        }
    }

    _getItemInListHeight() {
        const fackeInstance = document.createElement("div");
        fackeInstance.style.position = "absolute";
        fackeInstance.style.left = "-99999px";
        const div = document.createElement("div");
        div.className = "details__item";
        div.innerHTML = "fake";
        fackeInstance.appendChild(div);
        document.body.appendChild(fackeInstance);
        const itemHeight = fackeInstance.children[0].clientHeight;
        document.body.removeChild(fackeInstance);

        return itemHeight;
    }

    get elem() {
        return this._elem;
    }
}