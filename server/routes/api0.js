const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var mongoose = require('mongoose');

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/e-menu', (err, db) => {
            if (err) return console.log(err);

    closure(db);
});
};

//middleware to use for all requests
router.use(function(req, res, next) {
  //do logging
  console.log('Something is happening.');
  next();
});


router.get('', function(req, res) {
  res.json({message:"hello, welcome to api"});
});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    let username = req.query.username;
    let password = req.query.password;

    connection((db) => {
    db.collection('users')
        .find({email:username, password: password})
        .toArray()
        .then((users) => {
        response.data = users;
        res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
            });
    });
});

router.post('/users', (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    connection((db)=>{
      db.collection('users')
      .find({email:username})
      .then((user) => {
        var tmp = user;
      })
    })

    if (tmp == null){
      connection((db)=>{
        db.collection('users')
        .insert({email:username, password:password})
        .then((user) => {
          res.sendStatus(201)
        })
        .catch((err)=>{
          sendError(err, res);
        });
      });
    } else {
      res.sendStatus(400)
    }
  }
//Get restaurants





module.exports = router;
