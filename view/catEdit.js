define(function (require) {
    //const octopus = require('../octopus/cat.js');

    let octopus = {};
    const catEdit = {
        showAdmin: function () {
            this.catEditElem.style.visibility = 'visible';
        },

        hideAdmin: function () {
            this.catEditElem.style.visibility = 'hidden';
        },

        init (octo) {
            octopus = octo;

            this.catEditElem = document.getElementById('cat-edit');
            this.catNameElem = this.catEditElem.querySelector('[id=name]');
            this.catImageElem = this.catEditElem.querySelector('#img');
            this.countElem = this.catEditElem.querySelector('#clicks');

            this.btnCancel = this.catEditElem.querySelector('#btnCancel');
            this.btnCancel.addEventListener('click', function (e) {
                e.preventDefault();
                catEdit.hideAdmin();
            });

            this.btnSave = this.catEditElem.querySelector('#btnSave');
            this.btnSave.addEventListener('click', function (e) {
                e.preventDefault();
                const cat = {
                    id: catEdit.catId,
                    name: catEdit.catNameElem.value,
                    img: catEdit.catImageElem.value,
                    clicks: catEdit.countElem.value
                }
                octopus.editCat(cat);
                catEdit.hideAdmin();
            });

            this.hideAdmin();
        },

        render: function () {
            const currentCat = octopus.getCurrentCat();

            this.catId = currentCat.id;

            this.countElem.value = currentCat.clicks;
            this.catNameElem.value = currentCat.name;
            this.catImageElem.value = currentCat.img;

            this.showAdmin();
        }
    };

    return catEdit;
});