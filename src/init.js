define(function(require) {
    var pageProgress = require('pageProgress')($);
    pageProgress.start();
    window.onload = function() {
        pageProgress.done();
    };
});