'use strict';

let faker = require('faker'),
    rand_prop_object = require('random-obj-prop');

module.exports = {
    getTestPassword(length = 10){
        return faker.internet.password(length, false, /[0-9a-zA-Z]$/);
    },

    getTestAuthUserParams(){
        return {
            name: faker.name.firstName(),
            second_name: faker.name.lastName(),
            new_pass: this.getTestPassword(),
        };
    },

    getRandomDate(){
        let daysInMonth = new Date(new Date().getYear(), new Date().getMonth(), 0).getDate();

        let dates = [];

        for (let i = 1; i <= daysInMonth; i++) {
            dates.push(i);
        }

        return rand_prop_object(dates)
    },

    getRandomMonth(){
        let monthOfYear = [];

        for (let i = 1; i <= 12; i++) {
            monthOfYear.push(i);
        }

        return rand_prop_object(monthOfYear)
    },

    getRandomYear(limitMaxYear = new Date().getFullYear()){
        let firstAvailableYear = new Date().getFullYear() - 102;
        let years = [];

        for (let i = firstAvailableYear; i <= limitMaxYear; i++) {
            years.push(i);
        }

        return rand_prop_object(years)
    },
};
