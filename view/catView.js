define(function (require) {
    const octopus = require('../octopus/cat.js');

    const catView = {
        init: function () {
            this.catElem = document.getElementById('cat');
            this.catNameElem = document.getElementById('cat-name');
            this.catImageElem = document.getElementById('cat-img');
            this.countElem = document.getElementById('cat-count');

            this.catImageElem.addEventListener('click', function () {
                octopus.incrementCounter();
                catView.render();
            });

            this.render();
        },

        render: function () {
            const currentCat = octopus.getCurrentCat();

            this.countElem.textContent = 'Likes: ' + currentCat.clicks;
            this.catNameElem.textContent = currentCat.name;
            this.catImageElem.src = currentCat.img;
        }
    };

    return catView;
});