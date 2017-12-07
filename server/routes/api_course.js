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

//Get courses by restaurant Id
router.get('/restaurant/:rid/courses', asyncMiddleware(async (req, res, next)=>{
  let restaurantId = +req.params.rid
  connection(asyncMiddleware(async (db) => {
    var courses = await db.collection('courses')
                    .find({rid:restaurantId})
                    .toArray()
    if (user.length==0){
      res.sendStatus(404)
    }else{
      res.json(courses)
    }
    db.close();
  }));
}));

//Get course by course Id
router.get('/restaurant/:rid/courses/:cid', asyncMiddleware(async (req, res, next)=>{
  let restaurantId = +req.params.rid
  let courseId = +req.params.cid
  connection(asyncMiddleware(async (db) => {
    var course = await db.collection('courses')
                    .find({rid:restaurantId,
                           cid:courseId })
                    .toArray()
    if (user.length==0){
      res.sendStatus(404)
    }else{
      res.json(course[0])
    }
    db.close();
  }));
}));

//Create a new course
router.post('/restaurant/:rid/courses/', asyncMiddleware(async(req, res, next) => {
    let restaurantId = +req.params.rid

    connection(asyncMiddleware(async (db) => {
      var user = await db.collection('courses')
                      .find({name:req.body.name})
                      .toArray()
      if (user.length!=0){
        res.sendStatus(400)
      }else{
        course = req.body;
        course.rid = restaurantId;
        await db.collection('courses')
                .save(course)
        //var newUser = await db.collection('users').save(req.body)
        res.sendStatus(200)
        //once done saving, redirect user which cause browser to reload
        //res.redirect('/')
      }
      db.close();
    }));
  }));

  //Update course by id
  router.put('/restaurant/:rid/courses/:cid', asyncMiddleware(async(req, res, next) => {
      let restaurantId = +req.params.rid
      let courseId = +req.params.cid

      connection(asyncMiddleware(async (db) => {
        await db.collection('courses')
                        .findOneAndUpdate({cid:courseId,
                                          rid: restaurantId},
                                          $set: {
                                            category:req.body.category,
                                            name: req.body.name,
                                            price: req.body.price,
                                            price: req.body.price,
                                            image: req.body.image,
                                            ingredient: req.body.ingredient,
                                            option: req.body.option,
                                            vegetarian: req.body.vegetarian,
                                            rating: req.body.rating,
                                            waiting_time: req.body.waiting_time,
                                            new: req.body.new,
                                            //to be continue
                                          },
                                          {sort: {_id: -1},
                                          upsert: true},
                                          (result)=>{res.json(result)})
      };
      db.close();
      }));
    }))

//Delete course by id
router.delete('/restaurant/:rid/courses/:cid', asyncMiddleware(async(req, res, next) => {
    let restaurantId = +req.params.rid
    let courseId = +req.params.cid

    connection(asyncMiddleware(async (db) => {
      await db.collection('courses')
                      .findOneAndDelete({cid:courseId,
                                        rid: restaurantId},
                                        $set: {
                                          category:req.body.category,
                                          name: req.body.name,
                                          price: req.body.price,
                                          price: req.body.price,
                                          image: req.body.image,
                                          ingredient: req.body.ingredient,
                                          option: req.body.option,
                                          vegetarian: req.body.vegetarian,
                                          rating: req.body.rating,
                                          waiting_time: req.body.waiting_time,
                                          new: req.body.new,
                                          //to be continue
                                        },
                                        (result)=>{res.sendStatus(200)})
    };
    db.close();
    }));
  }))


module.exports = router;
