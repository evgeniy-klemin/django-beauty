require.config({
    paths: {
        "jquery": "../components/jquery/jquery",
        "underscore": "../components/underscore/underscore",
        "backbone": "../components/backbone/backbone",
        "marionette": "../components/marionette/lib/core/amd/backbone.marionette",
        "backbone.wreqr": "../components/backbone.wreqr/lib/amd/backbone.wreqr",
        "backbone.babysitter": "../components/backbone.babysitter/lib/amd/backbone.babysitter",
        "bootstrap": "../components/bootstrap/dist/js/bootstrap",
        "tpl": "../components/requirejs-tpl/tpl",
    },
    shim: {
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "underscore": {
            exports: "_"
        },
         "bootstrap": {
            deps: ["jquery"]
        },
    }
});
define([
        'require', 
        'jquery', 
        'bootstrap',
        'modules/main/main',
], function(require){
    var App = require('app')
    App.start()
})
