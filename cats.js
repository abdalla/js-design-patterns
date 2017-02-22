const cat = {
    name: '',
    img: '',
    clicks: 0,
    click: function() {
        this.clicks++;
    }
};

function seedCatList(shouldSort) {
    let listOfCats = [];

    let cat1 = Object.create(cat);
    cat1.name = 'Mussum';
    cat1.img = 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg';
    listOfCats.push(cat1);

    let cat2 =  Object.create(cat);
    cat2.name = 'Cacildis';
    cat2.img = 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg';
    listOfCats.push(cat2);


    let cat3 = Object.create(cat);
    cat3.name = 'Chiloe';
    cat3.img = 'https://www.wired.com/wp-content/uploads/2014/10/cat-ft.jpg';
    listOfCats.push(cat3);

    let cat4 =  Object.create(cat);
    cat4.name = 'Mike';
    cat4.img = 'http://i2.cdn.cnn.com/cnnnext/dam/assets/150324154025-14-internet-cats-restricted-super-169.jpeg';
    listOfCats.push(cat4);

    let cat5 = Object.create(cat);
    cat5.name = 'Madona';
    cat5.img = 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg';
    listOfCats.push(cat5);

    let cat6 =  Object.create(cat);
    cat6.name = 'Morgana';
    cat6.img = 'https://quizizz-destination-bkt.s3-us-west-2.amazonaws.com/new/dfa28ce0-4bac-4f9c-9c06-2f8090cc73c2.jpg';
    listOfCats.push(cat6);

    if (shouldSort) {
        return sortList(listOfCats);
    }

    return listOfCats;
}

function sortList(listOfCats) {
    return listOfCats.sort((x, y) => {
        if (y.name > x.name) {
            return -1;
        }
        return 1;
    });
}