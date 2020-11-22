const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const PostsData = require('./models/posts');
// import mongoose object id:
const ObjectId = require('mongoose').Types.ObjectId;

// => localhost:3000/posts/
router.get("/", (req,res) => {
    PostsData.find((err, docs) => { //find all record:
        if(!err)
        {res.send(docs);
        }
        else{
            console.log('Error in Retriving Data :' +JSON.stringify(err));
        }
    });
});

//  => localhost:3000/posts/id
router.get("/:id", (req,res) => {
    if(!ObjectId.isValid(req.params.id)) //if id not valid:
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    // if valid id:
    PostsData.findById(req.params.id, (err,doc) => {
        if(!err){
            res.send(doc);
        }   else{
            console.log('Error in Retriving Posts: ' +JSON.stringify(err, undefined, 2));
        }
    });
});


router.post("/", (req,res) => {
    // create PostsData model obj:
    const post = new PostsData({
        productNumber: req.body.productNumber,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
    });
    post.save((err, doc) => { //too insert new records on database:
        if(!err){
            res.send(doc);
        } else{
            console.log('Error in Employee Save:' +JSON.stringify(err, undefined, 2));
        }
    });    
}

);
router.put("/:id", (req, res) => {
    if(!ObjectId.isValid(req.params.id))  //if id not valid:  
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    // create obj for sending JOSN data:
    // its a normal obj:
    const post ={
        productNumber: req.body.productNumber,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
    };
    // method for update data:
    PostsData.findByIdAndUpdate(req.params.id, {$set: post}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc)
        } else{
            console.log('Error in Posts Update:' +JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete("/:id", (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);

    PostsData.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else{
            console.log('Error in Employee Delete :' +JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;