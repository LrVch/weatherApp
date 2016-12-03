'use strict';

/*
styles
 */
import './_index.scss';

/*
 markup
 */
if (NODE_ENV === 'development') {
    require('./index.pug');
}

/*
 logic
*/


import "./../modules/view/content";
import Menu from "./../modules/view/menu";
import './../vendors/hammer';

const mainElem = new Hammer(document.body);
const menu = new Menu(document.querySelector(".menu"));


mainElem.on("swipeleft", function(ev) {
    menu.hide();
});
mainElem.on("swiperight", function(ev) {
    menu.show();
});

