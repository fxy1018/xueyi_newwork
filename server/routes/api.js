const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


// Connect
var connection = function(closure) {
    return MongoClient.connect('mongodb://localhost:27017/e-menu', (err, db) => {
            if (err) return console.log(err);
            closure(db);
          });
};

//middleware to use for all requests
router.use(function(req, res, next) {
  //do logging
  console.log('Begin to Use API');
  next();
});


router.get('', function(req, res) {
  res.json({message:"hello, welcome to api"});
});


module.exports = router;
