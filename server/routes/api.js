const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var mongoose = require('mongoose');

// Connect
var connection = function(closure) {
    return MongoClient.connect('mongodb://localhost:27017/e-menu', (err, db) => {
            if (err) return console.log(err);
            closure(db);
          });
};

//wrap express routes to handle rejected promises
const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  }

//middleware to use for all requests
router.use(function(req, res, next) {
  //do logging
  console.log('Something is happening.');
  next();
});


router.get('', function(req, res) {
  res.json({message:"hello, welcome to api"});
});

// Get users
router.get('/users', asyncMiddleware(async(req, res, next) => {
  let username = req.query.username;
  let password = req.query.password;

  connection(asyncMiddleware(async (db) => {
    var user = await db.collection('users')
                    .find({email:username, password: password})
                    .toArray()
    if (user.length==0){
      res.sendStatus(404)
    }else{
      res.json(user)
    }
    db.close();
  }));
}));

router.post('/users', (req,res) => {
    let username = req.body.username;
    let password = req.body.password;

    connection(asyncMiddleware(async (db) => {
      var user = await db.collection('users')
                      .find({email:username})
                      .toArray()
      if (user.length!=0){
        res.sendStatus(400)
      }else{
        var newUser = await db.collection('users')
                          .insertOne({email: username, password: password})
        res.json(newUser)
      }
      db.close();
    }));
  });
//Get restaurants





module.exports = router;
