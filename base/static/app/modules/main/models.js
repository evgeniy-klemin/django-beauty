define(['app'], function(App) {
    App.module("MainModule", function(MainModule, App, Backbone, Marionette, $, _) {

        MainModule.TestModel = Backbone.Model.extend({
            defaults: {
                field1: "def value 1"
            }
        })

        MainModule.TestCollection = Backbone.Collection.extend({
            model: MainModule.TestModel
        })

    })
})
