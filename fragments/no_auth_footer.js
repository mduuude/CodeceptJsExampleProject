'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    selectors: {
        self: '//*/div[@id="pageFooter"]',

        button_languages: '//*/ul/li[*]/a[@role="button"]/i',

        pop_up_languages: {
            link_all_languages: '//*[@id="intl-region-link-container"]/ul/li[1]',

            button_close: '//*/div[@role="dialog"]/div[@class="_t"]/div/div/div[3]/div/a[@role="button"]',
        },
    }
};
