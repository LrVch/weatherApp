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

fetch("/backend/test.json")
    .then(response => {
        return response.json();
    })
    .then(result => {
        console.log(result)
        // document.body.innerHTML = result;
    });
