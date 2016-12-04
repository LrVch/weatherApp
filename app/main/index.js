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
import Search from "./../modules/view/search";
import CityViewer from "./../modules/view/city-viewer";
import './../vendors/hammer';

const mainElem = new Hammer(document.body);
const menu = new Menu(document.querySelector("[data-menu]"));
const search = new Search(document.querySelector("[data-search]"));
const cityViewer = new CityViewer(document.querySelector("[data-city-viewer]"));


mainElem.on("swipeleft", function(ev) {
    menu.hide();
});

mainElem.on("swiperight", function(ev) {
    menu.show();
});




search.on(Search.EVENTS.onGetCity, function(cityData) {
    console.log(cityData);
    alert(`${cityData.name}`);
});




cityViewer.on(CityViewer.EVENTS.onSelectedCity, function(geoId) {
    console.log(geoId);
    // alert("select " + geoId);
});

cityViewer.on(CityViewer.EVENTS.onDeleteCity, function(geoId) {
    console.log(geoId);
    // alert("delete " + geoId);
});

cityViewer.on(CityViewer.EVENTS.onDeletAllCities, function() {
    console.log("очистить всю температуру");
    // alert("delete " + geoId);
});

cityViewer.addCity({
    name: "Omsk, Russia",
    geoId: 12345
});

