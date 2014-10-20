var myStepDefinitionsWrapper = function () {
    var browser = require('../support/obj.js');
    this.Given(/^I navigate to angular documents page$/, function (callback) {
     browser.homepage('https://docs.angularjs.org/api',callback);

    });

    this.Then(/^I check for the presence of doc element on that page$/, function (callback) {

        browser.core_element_text('#angular-modules',callback);
        browser.end_session();
    });

    this.Then(/^I check for the title of the documents page$/, function (callback) {
        browser.wait_for('angularjs-api-docs',callback);
        browser.get_page_title(callback);
    });

    this.Then(/^I click on angular link on the page$/, function (callback) {
        browser.click_on_link('h2#-link-ng-ng-core-module-.ng-scope a',callback);
    });


    this.Then(/^I check the core page title "([^"]*)"$/, function (title, callback) {
        browser.get_core_title(title,callback);
    });


    this.Then(/^I check the presence on the landing page$/, function (callback) {
        browser.wait_for('#ng-core-module-.ng-scope',callback);
        browser.get_page_text('#ng-core-module-.ng-scope',callback);
        browser.end_session(callback);
    });
};
module.exports = myStepDefinitionsWrapper;