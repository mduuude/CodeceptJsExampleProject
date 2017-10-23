'use strict';

let Helper = codecept_helper;

class Wdio extends Helper {

    switchTab(url) {
        let client = this.helpers.WebDriverIO.browser;

        return client.switchTab(url);
    }
}

module.exports = Wdio;
