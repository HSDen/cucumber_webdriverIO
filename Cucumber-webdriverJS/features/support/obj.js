var browser = function () {
    var driver = require('../../index');
}
var assert = require('assert');
var client = browser();
client.init();

module.exports ={

    homepage: function(url,next) {

        client.url(url).call(next);

    },
    get_page_title: function(callback){
        client.getTitle(function (err, title) {
            var pge_title = 'AngularJS: API: API Reference';
            assert(pge_title === title,'function getTitle() asserts the title obtained from the page');

        }).call(callback);
    },

    get_core_title: function(get_title,callback){
        client.getTitle(function (err, title) {
            assert(get_title === title,'function getTitle() asserts the title obtained from the page');
        }).call(callback);
    },
    core_element_text: function (id_value,callback) {
        client.getText(id_value, function (err, text) {
            var page_text = 'Angular Modules';
            assert(page_text === text);
        }).call(callback);

    },
    get_page_text: function (id_value,callback) {
        client.getText(id_value, function (err, text) {
            var page_text = 'ng (core module)';
            assert(page_text === text);
        }).call(callback);

    },

    click_on_link: function(id,next){
        client.click(id).call(next);
    },
    wait_for: function(id,next){
        client.waitForText(id,1000).call(next);
    },
    end_session: function(next){
        client.end().call(next);
    }


}










