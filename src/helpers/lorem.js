import * as Faker from 'faker';

module.exports = function(n=2){    
    return Faker.lorem.sentences(n);    
}