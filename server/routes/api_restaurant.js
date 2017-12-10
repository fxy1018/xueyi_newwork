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

  //Get restaurants By Name
  router.get('/restaurants', asyncMiddleware(async(req, res, next)=>{
    let restaurantName = req.body.name;
    connection(asyncMiddleware(async (db) => {
      var restaurant = await db.collection('restaurants')
                      .find({name:restaurantName})
                      .toArray()
      if (restaurant.length==0){
        res.sendStatus(404)
      }else{
        res.json(restaurant)
      }
      db.close();
    }));
  }))

  //Get restaurants By Id
  router.get('/restaurants/:rid', asyncMiddleware(async(req,res,next)=>{
    let restaurantId = +req.params.rid;
    connection(asyncMiddleware(async (db)=>{
      var restaurant = await db.collection('restaurants')
                      .find({rid:restaurantId})
                      .toArray()
      if (restaurant.length==0){
        res.sendStatus(404)
      }else{
        res.json(restaurant[0])
      }
      db.close();
    }));
  }))

  //Create restaurant
  router.post('/restaurants', asyncMiddleware(async(req,res,next)=>{
    //need to check whether restaurants exist
    //.......
    connection(asyncMiddleware(async (db)=>{
      await db.collection('restaurants')
              .save(req.body)
      res.sendStatus(200)
      db.close();
    }));
  }))

  //Update restaurant by id
  router.put('/restaurants/:rid', asyncMiddleware(async(req, res, next) => {
      let restaurantId = req.params.rid;

      connection(asyncMiddleware(async (db) => {
        await db.collection('restaurants')
                        .findOneAndUpdate({rid:restaurantId},
                                            {$set: {
                                            name:req.body.name,
                                            street: req.body.street,
                                            unit: req.body.unit,
                                            city: req.body.city,
                                            province: req.body.province,
                                            postal_code: req.body.postal_code
                                            //to be continue
                                          }},
                                          {},
                                          (result)=>{res.json(result)});
        db.close();
      }));
    }))





module.exports = router;
