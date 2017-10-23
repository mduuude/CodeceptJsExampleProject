'use strict';

let base_p = require('../pages/base'),
    login_p = require('../pages/login'),
    no_auth_header_f = require('../fragments/no_auth_header'),
    no_auth_footer_f = require('../fragments/no_auth_footer'),
    mail_res = require('../resources/mail'),
    test_data_res = require('../resources/test_data'),
    rand_obj_prop = require('random-obj-prop');

Feature('Main');

xScenario('Check page content', (I) => {
    I.amOnPage(base_p.url);
    I.seeManyElements(no_auth_header_f.selectors);
    I.seeManyElements(base_p.selectors);
    I.seeManyElements(no_auth_footer_f.selectors);
    I.click(no_auth_footer_f.selectors.button_languages);
    I.seeManyElements(no_auth_footer_f.selectors.pop_up_languages);
});

xScenario('While login as not registered user redirect to login page', (I) => {
    let testPassword = test_data_res.getTestPassword();

    I.amOnPage(base_p.url);
    I.seeElement(base_p.selectors.img_connection);
    mail_res.copyTempMailToClipboard();
    I.click(base_p.selectors.input_email);
    I.pressKey(['Control', 'v']);
    I.fillField(base_p.selectors.input_password, testPassword);
    I.click(base_p.selectors.button_log_in);
    I.waitForElement(login_p.selectors.button_register);
    I.seeInCurrentUrl(login_p.url);
});

Scenario('Success registration', (I) => {
    let testUserParams = test_data_res.getTestAuthUserParams();

    let radioGenderSelectors = base_p.selectors.form_register.radio_select_gender;
    delete radioGenderSelectors.self;
    let randomGender = rand_obj_prop(radioGenderSelectors);

    I.amOnPage(base_p.url);
    I.seeElement(base_p.selectors.img_connection);
    mail_res.copyTempMailToClipboard();
    I.fillManyFields(base_p.selectors.form_register, testUserParams);
    I.wait(3);
    I.click(base_p.selectors.form_register.input_email);
    I.pressKey(['Control', 'v']);
    I.waitForElement(base_p.selectors.form_register.input_email_confirm);
    I.click(base_p.selectors.form_register.input_email_confirm);
    I.pressKey(['Control', 'v']);
    base_p.selectBdDate(test_data_res.getRandomDate());
    base_p.selectBdMonth(test_data_res.getRandomMonth());
    base_p.selectBdYear(test_data_res.getRandomYear());
    I.click(randomGender);
    I.wait(2);
    I.click(base_p.selectors.form_register.button_submit);
    I.wait(20)
    //add confirmation code
});
