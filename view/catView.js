define(function (require) {
    const catEdit = require('./catEdit.js');

    let octopus = {};
    const catView = {
        init: function (octo) {
            octopus = octo;
            this.catElem = document.getElementById('cat');
            this.catNameElem = document.getElementById('cat-name');
            this.catImageElem = document.getElementById('cat-img');
            this.countElem = document.getElementById('cat-count');
            this.adminButton = document.getElementById('btnAdmin');

            this.catImageElem.addEventListener('click', function () {
                octopus.incrementCounter();
                catView.render();
                catEdit.hideAdmin();
            });

             this.adminButton.addEventListener('click', function (e) {
                e.preventDefault();
                catEdit.render();
            });

            this.render();

            catEdit.init(octo);
        },

        render: function () {
            const currentCat = octopus.getCurrentCat();

            this.countElem.textContent = 'Likes: ' + currentCat.clicks;
            this.catNameElem.textContent = currentCat.name;
            this.catImageElem.src = currentCat.img;

            //this.adminButton.visible = false;
       }
    }

    return catView;
});