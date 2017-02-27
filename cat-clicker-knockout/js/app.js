let Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Mussum');
    this.imgSrc = ko.observable('http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg');
    this.nicknames = ko.observableArray(['Gordo', 'Zigodi', 'Obeso', 'Mussumzera', 'Negoncio'])
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
    this.cat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        this.cat().clickCount(this.cat().clickCount() + 1);
    };
};

ko.applyBindings(new VierModel());