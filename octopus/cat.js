//
define(function (require) {
    const model = require('../model/cat.js');

    const octopus = {
        init: function () {
            model.currentCat = model.cats[0];
        },

        getCurrentCat: function () {
            return model.currentCat;
        },

        getCats: function () {
            return model.cats;
        },

        setCurrentCat: function (cat) {
            model.currentCat = cat;
        },

        incrementCounter: function () {
            model.currentCat.clicks++;
        }
    };

    octopus.init();

    return octopus;
});