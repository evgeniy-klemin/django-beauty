define(['app', './controllers'], function(App) {

    App.module("MainModule", function(MainModule, App, Backbone, Marionette, $, _) {

        // Private Data And Functions
        // --------------------------
        var myData = "this is private data";
        var myFunction = function() {
            console.log(myData);
        }

        // Public Data And Functions
        // -------------------------
        MainModule.someData = "public data";
        MainModule.someFunction = function() {
            console.log(MyModule.someData);
        }

        MainModule.addInitializer(function() {
            // initialize and start the module's running code, here.
            console.log('MainModule init')

            this.test_controller = new MainModule.TestController()
            this.test_controller.show_data()
        })

    })

})
