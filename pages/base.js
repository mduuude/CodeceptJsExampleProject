'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    url: 'www.facebook.com',

    selectors: {
        input_email: '//*/input[@id="email"]',
        input_password: '//*/input[@id="pass"]',

        button_log_in: '//*/label[@id="loginbutton"]',

        img_connection: '//*/div[@id="content"]/div/div/div/div/div[1]/div/img[@class="img"]',

        form_register: {
            self: '//*/div[@id="registration_container"]',

            input_name: '//*/input[@name="firstname"]',
            input_second_name: '//*/input[@name="lastname"]',
            input_email: '//*/input[@name="reg_email__"]',
            input_email_confirm: '//*/input[@name="reg_email_confirmation__"]',
            input_new_pass: '//*/input[@name="reg_passwd__"]',

            select_b_day: '//*/select[@name="birthday_day"]',
            select_b_month: '//*/select[@name="birthday_month"]',
            select_b_year: '//*/select[@name="birthday_year"]',

            radio_select_gender: {
                self: '//*/span[@data-name="gender_wrapper"]',

                radio_gender_women: '//*/span[@data-name="gender_wrapper"]/span[1]/input',
                radio_gender_man: '//*/span[@data-name="gender_wrapper"]/span[2]/input',
            },

            button_submit: '//*/button[@name="websubmit"]'
        },

        link_create_page: '//*[@id="reg_pages_msg"]/a',
    },

    authWithCredentials(email, password){
        I.fillField(this.selectors.input_email, email);
        I.fillField(this.selectors.input_password, password);
        I.click(this.selectors.button_log_in);
        I.dontSeeElement(this.selectors.img_connection)
    },

    selectBdDate(dateValue){
        I.click(this.selectors.form_register.select_b_day);

        within(this.selectors.form_register.select_b_day, function () {
            I.click('//*/option[contains(@value,"' + dateValue + '")]')
        });
    },

    selectBdMonth(monthValue){
        I.click(this.selectors.form_register.select_b_month);

        within(this.selectors.form_register.select_b_month, function () {
            I.click('//*/option[contains(@value,"' + monthValue + '")]')
        });
    },

    selectBdYear(yearValue){
        I.click(this.selectors.form_register.select_b_year);

        within(this.selectors.form_register.select_b_year, function () {
            I.click('//*/option[contains(@value,"' + yearValue + '")]')
        });
    },
};
