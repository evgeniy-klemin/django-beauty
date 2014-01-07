define(['app', './views', './models'], function(App) {
    App.module("MainModule", function(MainModule, App, Backbone, Marionette, $, _) {

        MainModule.TestController = Marionette.Controller.extend({

            initialize: function(options) {
                this.stuff = options.stuff;
                console.log('MainModule controller init')
            },

            doStuff: function() {
                this.trigger("stuff:done", this.stuff);
            },

            show_data: function() {
                var collection = new MainModule.TestCollection([
                    new MainModule.TestModel(),
                    new MainModule.TestModel({
                        field1: 'user value'
                    })
                ])
                App.firstRegion.show(new MainModule.TestCollectionView({
                    collection: collection
                }))
            }

        })

    })
})
