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

import Controller from "./../modules/controller";

export const controller = new Controller();

