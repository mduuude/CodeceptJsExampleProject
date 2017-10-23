'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    url: 'www.facebook.com/login',

    selectors: {
        button_register: '//*/span[@class="signup_box_content"]/a',
    }
};
