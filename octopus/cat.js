require(['../model/cat.js'], function () {
    const octopus = {
        init: function () {
            model.currentCat = model.cats[0];

            catListView.init();
            catView.init();
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
            catView.render();
        }
    };

    const catListView = {
        init: function () {
            this.catListElem = document.getElementById('cat-list');

            this.render();
        },

        render: function() {
            let cat, elem, i;

            const cats = octopus.getCats();

            this.catListElem.innerHTML = '';

            cats.forEach(cat => {
                elem = document.createElement('li');
                elem.textContent = cat.name;

                elem.addEventListener('click', (function(catCopy) {
                    return function() {
                        octopus.setCurrentCat(catCopy);
                        catView.render();
                    };
                })(cat));

                this.catListElem.appendChild(elem);
            });
        }
    };

    const catView = {
        init: function () {
            this.catElem = document.getElementById('cat');
            this.catNameElem = document.getElementById('cat-name');
            this.catImageElem = document.getElementById('cat-img');
            this.countElem = document.getElementById('cat-count');

            this.catImageElem.addEventListener('click', function(){
                octopus.incrementCounter();
            });

            this.render();
        },

        render: function() {
            const currentCat = octopus.getCurrentCat();

            this.countElem.textContent = 'Likes: ' + currentCat.clicks;
            this.catNameElem.textContent = currentCat.name;
            this.catImageElem.src = currentCat.img;
        }
    };


    octopus.init();
});