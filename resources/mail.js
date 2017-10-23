'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    url: 'temp-mail.org/en/',

    selectors: {
        button_copy: '//*/a[@id="click-to-copy"]',
        button_refresh: '//*/a[@id="click-to-refresh"]',
        button_change: '//*/a[@id="click-to-change"]',
        button_delete: '//*/a[@id="click-to-delete"]',
    },

    copyTempMailToClipboard(){
        I.openNewTab();
        I.amOnPage(this.url);
        I.waitForElement(this.selectors.button_copy);
        I.click(this.selectors.button_copy);
        I.switchTab();
    }
};
