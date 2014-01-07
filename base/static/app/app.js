define(['marionette'], function(Marionette){

    App = new Marionette.Application()
    App.addInitializer(function(options){
        console.log('App init')
    })

    App.addRegions({
        firstRegion: '.first-region',
        secondRegion: '.second-region',
    })

    return App

})
