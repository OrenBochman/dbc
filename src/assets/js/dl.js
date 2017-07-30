import * as Faker from 'faker';

//datalayer 


export class dataLayer {

    constructor() { }

    getGallery() {
        return []
    }


    getAllProducts() {

        return {
            NewProducts: this.getNewProducts(4),
            UpSaleProducts: this.getUpSaleProducts(12),
            CrossSaleProducts: this.getCrossSaleProducts(6)
        }
    }

    getNewProducts(count) {
        return this._getProductsMock(count)
    }

    getUpSaleProducts(count) {
        return this._getProductsMock(count)
    }

    getCrossSaleProducts(count) {
        return this._getProductsMock(count)
    }

    getTopProducts(count) {
        return this._getProductsMock(count)
    }

    _getProductsMock(n) {

        let products = [];
        let prodCategories = ["hardware","software","car","services", "insurance","media","travel","retail"];
        let carriers = ["British Airways", "Delta","KLM","North Western","El Al"];
        let brands = ["Partner", "Intel","Ikea","BMW","El Al","IBM","Gap","Nike"];
        for (var index = 0; index < n; index++) {
            let product = {
                category     : prodCategories[Faker.random.number(prodCategories.length - 1)],
                cost_price   : Faker.random.number({min:10,max:500}),
                cost_plan    : Faker.random.number({min:10,max:500}),
                cost_tax     : Faker.random.number({min:10,max:100}),
                cost_shipping: Faker.random.number({min:10,max:100}),
                name         : Faker.commerce.productName(),
                sku          : `${Faker.random.number({min:100,max:999})}-${Faker.random.number({min:10000,max:99999})}-${Faker.random.number({min:10,max:99})}`,
                thumb_small  : `http://lorempixel.com/100/100/nature/${index % 9}/`,
                thumb_med    : `http://lorempixel.com/300/400/nature/${index % 9}/`,
                thumb_large  : `http://lorempixel.com/300/400/nature/${index % 9}/`,
                brand        : brands[Faker.random.number(brands.length - 1)],
                tra_orig     : Faker.address.city(),
                tra_dest     : Faker.address.city(),
                tra_carrier  : carriers[Faker.random.number(carriers.length - 1)],

            };

            products.push(product)

        }
        return products;
    }

    getPageData(){

        return {
            pages    : this.getPages(),
            services : this.getServices(),
            port     : this.getProtfolio(),
            gallery  : this.getGallery(),
        };
    }

    getPages(){
        let pages = [];
        let page= {
            title       : "the title",
            keywords    : ["art","curation","paintings"],
            description : "genertic page",
            template    : "default.html",
            location    : ["/"],
            data        : {}
        };
        
        for (var i = 0; i<10; i++) {
            pages.push(page)            
        }
        return pages;

    }

    getAllBlog(start, end, n, filter){

        return {
            categories : this.getCategories(),
            authors    : this.getAuthors(),            
            posts      : this.getPosts(start, end, n, filter),
            post_count : n
        };

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
