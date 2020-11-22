// create Schema and Model of posts:
// for Post or add data into database need Schema and Model:
const mongoose = require('mongoose');

const PostsData = mongoose.model('PostsData', {
    productNumber: {type: String},
    productName: {type: String},
    productPrice: {type: String},
    productDescription: {type: String}
});

module.exports = PostsData;