define(function (require) {
    //const octopus = require('../octopus/cat.js');
    const catView = require('./catView.js');
    let octopus = {};
    const catListView = {
        init: function (octo) {
            octopus = octo;

            this.catListElem = document.getElementById('cat-list');

            this.render();

            //catView.init();
        },

        render: function () {
            let cat, elem, i;

            const cats = octopus.getCats();

            this.catListElem.innerHTML = '';

            cats.forEach(cat => {
                elem = document.createElement('li');
                elem.textContent = cat.name;

                elem.addEventListener('click', (function (catCopy) {
                    return function () {
                        octopus.setCurrentCat(catCopy);
                        catView.render();
                    };
                })(cat));

                this.catListElem.appendChild(elem);
            });
        }
    };

    //catListView.init();

    return catListView
});