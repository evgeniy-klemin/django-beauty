define([
    'app',
    'tpl!modules/main/templates/test_item.html',
], function(App, tpl_test_item) {

    App.module("MainModule", function(MainModule, App, Backbone, Marionette, $, _) {

        MainModule.TestItemView = Marionette.ItemView.extend({
            tagName: 'li',
            template: tpl_test_item
        })

        MainModule.TestCollectionView = Marionette.CollectionView.extend({
            tagName: 'ul',
            itemView: MainModule.TestItemView
        })

    });

});
