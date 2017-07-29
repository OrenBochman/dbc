import * as Faker from 'faker';

//datalayer 


export class dataLayer {
    
    constructor(){}
    
    getPosts(n){
        return this._getPostsMock(n);
    }

    _getPostsMock(n){
        let categories=[`Exhibitions`,`Painting`,`Sculptures`,`Events`,`Video art`];
        let posts = [];
        let comments = [];
        let cc;
        let post = {};
        for (let i=0;i<n;i++){
            cc = Faker.random.number(6);
            comments = [];
            for (let j=0;j<cc;j++){
                comments.push({ 
                    comment: Faker.lorem.paragraph(),
                    user   : Faker.name.firstName()
                });
            }
            let more=[];
            for (let j=0;j<cc+1;j++){
                more.push( Faker.lorem.paragraph() );
            }
            post={
            title : `Awesome blog post title ${i+1}`,
             date : Faker.date.recent(30),
        thumbnail : `http://lorempixel.com/850/350/nature/${i%9}/`,
           author : `${Faker.name.firstName()} ${Faker.name.lastName()}` ,
         category : categories[Faker.random.number(categories.length-1)],
              top : Faker.lorem.paragraph(),
             more : more,
     comment_count: cc,
          comments : comments,
          featured: true
        }
        posts.push(post);
    }
        console.log(posts);
        return posts;
    }
}
