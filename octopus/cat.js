//
define(function (require) {
    const model = require('../model/cat.js');
    const catListView = require('../view/catListView.js');
    const catView = require('../view/catView.js');

    const octopus = {
        init: function () {
            model.currentCat = model.cats[0];
            catListView.init(this);
            catView.init(this);
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

        editCat: function (cat) {
            model.cats.find(function ( c, index ) {
                if(c.id === cat.id) {
                    model.cats[index].name = cat.name;
                    model.cats[index].img = cat.img;
                    model.cats[index].clicks = cat.clicks;
                    return c;
                }
            });

           catListView.render();
           catView.render();
        },

        incrementCounter: function () {
            model.currentCat.clicks++;
        }
    };

    octopus.init();
    return octopus;
});