'use strict';

/*
styles
 */
import './_index.scss';

/*
 images
 */
import './../img/index';

/*
 markup
 */
if (NODE_ENV === 'development') {
    require('./index.pug');
}

/*
 logic
*/

// const cities = {
//     1489425: {name: "tomsk", id: 14894252},
//     6167865: {name: "toronto", id: 6167865}
// };

import Controller from "./../modules/controller";

export const controller = new Controller();

// controller._model.getData(cities["1489425"]);

