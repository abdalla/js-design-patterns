let VierModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Mussum');
    this.imgSrc = ko.observable('http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1 );
    };
};

ko.applyBindings(new VierModel());