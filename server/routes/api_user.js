const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// var mongoose = require('mongoose');

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

// Get users by email and password
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
      res.json(user[0].cid)
    }
    db.close();
  }));
}));

//Get use info by user ID
router.get('/users/:cid', asyncMiddleware(async(req, res, next) => {
  let customerId = req.params.cid;

  connection(asyncMiddleware(async (db) => {
    var user = await db.collection('users')
                    .find({cid:customerId})
                    .toArray()
    if (user.length==0){
      res.sendStatus(404)
    }else{
      res.json(user[0].cid)
    }
    db.close();
  }));
}));

//Create a new user
router.post('/users', asyncMiddleware(async(req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    connection(asyncMiddleware(async (db) => {
      var user = await db.collection('users')
                      .find({email:username})
                      .toArray()
      if (user.length!=0){
        res.sendStatus(400)
      }else{
        await db.collection('users')
                .insertOne({email: username, password: password})
        //var newUser = await db.collection('users').save(req.body)
        res.sendStatus(200)
        //once done saving, redirect user which cause browser to reload
        //res.redirect('/')
      }
      db.close();
    }));
  }));

//Update user by id
router.put('/users/:cid', asyncMiddleware(async(req, res, next) => {
    let customerId = req.params.cid;

    connection(asyncMiddleware(async (db) => {
      await db.collection('users')
                      .findOneAndUpdate({cid:customerId},
                                        $set: {
                                          passwod:req.body.password,
                                          firstname: req.body.firstname,
                                          secondname: req.body.secondname,
                                          //to be continue
                                        },
                                        {},
                                        (result)=>{res.json(result)})
    };
    db.close();
    }));
  }))



module.exports = router;
