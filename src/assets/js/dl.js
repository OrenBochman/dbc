import * as Faker from 'faker';

//datalayer 


export class dataLayer {

    constructor() { }

    getGallery() {
        return []
    }


    getAllProducts() {

        return {
            NewProducts: getNewProducts(4),
            UpSaleProducts: getUCrossSaleProducts(12),
            CrossSaleProducts: getCrossSaleProducts(6)
        };
    }

    getNewProducts(count) {
        return _getProductsMock(count)
    }

    getUpSaleProducts(count) {
        return _getProductsMock(count)
    }

    getCrossSaleProducts(count) {
        return _getProductsMock(count)
    }

    getTopProducts(count) {
        return _getProductsMock(count)
    }

    _getProductsMock(n) {

        let products = [];
        for (var index = 0; index < n; index++) {
            product = {
                price : Faker.product.price.between(10,300),
                name:   Faker.product.name(),
                sku:    `${Faker.random.number.between(10,99)}-${Faker.random.number.between(1000,9999)}-${Faker.random.number.between(10,99)}`
            };

            products.push(product)

        }
        return products;
    }
    getAuthors() {
        return this._getAuthorsMock();
    }

    _getAuthorsMock() {
        return [`Oren Bochman`, `Roni Bochman Ronnen`, `Dvora Bochman`, `Zvi Bochman`, `Abigail Ronnen`];
    }

    getCategories() {
        return this._getCategoriesMock();
    }

    _getCategoriesMock() {
        return [`Exhibitions`, `Painting`, `Sculptures`, `Events`, `Video art`];
    }
    getPosts() {
        this.getPosts(new Date(2015, 3, 21), new Date(2017, 6, 25), 10, null);
    }

    getPosts(start, end, n, filter) {
        return this._getPostsMock(start, end, n, filter);
    }

    _getPostsMock(start, end, n, filter) {

        let categories = this.getCategories();
        let authors = this.getAuthors();
        let posts = [];
        let comments = [];
        let cc;
        let post = {};
        let postDate;
        for (let i = 0; i < n; i++) {
            postDate = Faker.date.between(start, end);
            cc = Faker.random.number(6);
            comments = [];
            for (let j = 0; j < cc; j++) {
                comments.push({
                    comment: Faker.lorem.paragraph(),
                    user: Faker.name.firstName(),
                    date: Faker.date.between(postDate, end)
                });
            }
            let more = [];
            for (let j = 0; j < cc + 1; j++) {
                more.push(Faker.lorem.paragraph());
            }
            post = {
                title: `Awesome blog post title ${i + 1}`,
                date: postDate,
                thumbnail: `http://lorempixel.com/850/350/nature/${i % 9}/`,
                author: categories[Faker.random.number(categories.length - 1)],
                category: authors[Faker.random.number(authors.length - 1)],
                top: Faker.lorem.paragraph(),
                more: more,
                comment_count: cc,
                comments: comments,
                featured: true
            }
            posts.push(post);
        }
        return posts;
    }


}
