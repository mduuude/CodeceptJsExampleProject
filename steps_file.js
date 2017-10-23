'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function () {
    return actor({
        /**
         * Check multiple elements are on the page, up to second level of nesting
         *
         * @param {object} selectors - given object of CSS|XPath|text locators
         */
        seeManyElements(selectors) {
            Object.keys(selectors).forEach((selectorKey) => {
                let selector = selectors[selectorKey];

                if (selector.hasOwnProperty('self')) {
                    Object.keys(selectors[selectorKey]).forEach((nestedKey) => {
                        if (Object.getPrototypeOf(selector[nestedKey]) !== Object.prototype) {
                            this.seeElement(selector[nestedKey]);
                        }
                    });
                } else if (Object.getPrototypeOf(selector) !== Object.prototype) {
                    this.seeElement(selector);
                }
            });
        },

        /**
         * Check multiple elements are NOT on the page, up to second level of nesting
         *
         * @param {object} selectors - given object of CSS|XPath|text locators
         */
        dontSeeManyElements(selectors) {
            Object.keys(selectors).forEach((selectorKey) => {
                let selector = selectors[selectorKey];

                if (selector.hasOwnProperty('self')) {
                    Object.keys(selector).forEach((nestedKey) => {
                        if (Object.getPrototypeOf(selector) !== Object.prototype)
                            this.dontSeeElement(selector[nestedKey]);
                    });
                } else if (Object.getPrototypeOf(selector) !== Object.prototype) {
                    this.dontSeeElement(selector);
                }
            });
        },

        /**
         * Check multiple texts are NOT on the page, up to second level of nesting
         *
         * @param {object} texts - given texts
         */
        dontSeeMany(texts) {
            Object.keys(texts).forEach((textKey) => {
                let text = texts[textKey];

                if (text.hasOwnProperty('self')) {
                    if (Object.getPrototypeOf(text) !== Object.prototype)
                        Object.keys(text).forEach((nestedKey) => {
                            this.dontSee(text[nestedKey]);
                        });
                } else if (Object.getPrototypeOf(text) !== Object.prototype) {
                    this.dontSee(text);
                }
            });
        },

        /**
         * Check multiple texts are on the page
         * @param {object} dataObject - given object of needle texts
         */
        seeManyInSource(dataObject) {
            Object.keys(dataObject).forEach((objectKey) => {
                let data = dataObject[objectKey];

                if (data.hasOwnProperty('self')) {
                    Object.keys(data).forEach((nestedKey) => {
                        if (Object.getPrototypeOf(data[nestedKey]) !== Object.prototype) {
                            this.seeInSource(data[nestedKey]);
                        }
                    });
                } else if (Object.getPrototypeOf(data) !== Object.prototype) {
                    this.seeInSource(data);
                }
            });
        },

        /**
         * Fill multiple columns with data
         * @param {object} fieldElements - given object of CSS|XPath|text locators
         * @param {object} dataObject - given object of faker data
         */
        fillManyFields(fieldElements, dataObject) {
            Object.keys(fieldElements).forEach((fieldElementKey) => {

                Object.keys(dataObject).forEach((fieldDataObject) => {
                    let fieldElement = fieldElements[fieldElementKey];
                    let data = dataObject[fieldDataObject];

                    if (fieldElementKey.toLowerCase().indexOf(fieldDataObject.toLowerCase()) !== -1)
                        this.fillField(fieldElement, data)
                });
            });
        },

        /**
         * See given text in multiple columns
         * @param {object} fieldElements - given object of CSS|XPath|text locators
         * @param {object} dataObject - given object of searching data
         */
        seeInManyFields(fieldElements, dataObject) {
            Object.keys(fieldElements).forEach((fieldElementKey) => {

                Object.keys(dataObject).forEach((fieldDataObject) => {
                    let fieldElement = fieldElements[fieldElementKey];
                    let data = dataObject[fieldDataObject];

                    if (fieldElementKey.toLowerCase().indexOf(fieldDataObject.toLowerCase()) !== -1)
                        this.seeInField(fieldElement, data)
                });
            });
        },

        /**
         *  Deactivate dropdown elements or so. Soon be deprecated. Reconsider another way of deactivation.
         */
        deactivate(){
            this.pressKey('Escape');
        }
    });
}
