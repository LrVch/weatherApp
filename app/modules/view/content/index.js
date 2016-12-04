"use strict";


// for content
function isLandscape(elem) {
    if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
        elem.classList.remove("isLandscape");
    } else {
        elem.classList.add("isLandscape");
    }
};

window.addEventListener("resize", isLandscape.bind(window, document.body));
isLandscape(document.body);