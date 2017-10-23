'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    selectors: {
        self: '//*/div[@class="loggedout_menubar_container"]',

        logo: '//*/h1/a[@href="https://www.facebook.com/"]/i',
    }
}
