let initialData = [
                {
                    id: 1,
                    clickCount: 0,
                    name: 'Mussum',
                    imgSrc: 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg',
                    nicknames: ['Gordo', 'Zigodi', 'Obeso', 'Mussumzera', 'Negoncio']
                },
                {
                    id: 2,
                    clickCount: 0,
                    name: 'Cacildis',
                    imgSrc: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
                    nicknames: ['Gorda']
                },
                {
                    id: 3,
                    clickCount: 0,
                    name: 'Chiloe',
                    imgSrc: 'https://www.wired.com/wp-content/uploads/2014/10/cat-ft.jpg',
                    nicknames: ['Jurupinga']
                },
                {
                    id: 4,
                    clickCount: 0,
                    name: 'Mike',
                    imgSrc: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/150324154025-14-internet-cats-restricted-super-169.jpeg',
                    nicknames: ['Jurupingis']
                },
                {
                    id: 5,
                    clickCount: 0,
                    name: 'Madona',
                    imgSrc: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
                    nicknames: ['Mais loka que o batman']
                }
];
let Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames)
    this.title = ko.computed(function() {
        if (this.clickCount() <= 10) {
            return 'Newborn';
        } else if (this.clickCount() > 10 && this.clickCount() <= 100 ) {
            return 'Infanty';
        } else {
            return 'Teen';
        }
    }, this);
}

let VierModel = function() {
    const self = this;

    this.cats = ko.observableArray([]);

    initialData.forEach(cat => self.cats.push(new Cat(cat)));

    this.cat = ko.observable( self.cats()[0] );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        //or
        //self.cat().clickCount(self.cat().clickCount() + 1);
    };

    this.setCurrentCat = function(selectedCat) {
        self.cat(selectedCat);
    }
};

ko.applyBindings(new VierModel());