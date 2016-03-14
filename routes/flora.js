var express = require('express');
var Flora = require('../models/flora');

var router = express.Router();

router.use(function(req, res, next){
  console.log("something is happening");
  next();
});

router.route('/')
  .get(function(req, res){
  	Flora.find(function(err, flora){
  	  if(err){
  	  	console.log('i found an error')
  	  	console.log(err)
  	  } else {
  	  	res.json(flora)
  	  }
  	})
   })
  .post(function(req, res){
    console.log('trying to post')
  	var flora = new Flora();
  	flora.name = req.body.name || 'none';
  	flora.category = req.body.category || 'none';
  	flora.season = req.body.season || 'none';
    flora.description = req.body.description || 'none';
  	flora.lat = req.body.lat;
    flora.lng = req.body.lng;
    flora.isPrivate = req.body.isPrivate;
    console.log(flora);
    flora.save(function(err, flora){
  	  if(err){
  		res.send(err);
  	  } else {
        console.log(flora);
  		  res.json(flora);
  	  }
    })
  });

router.route('/:flora_id')
  .get(function(req, res){
  	Flora.findById(req.params.flora_id, function(err, flora){
  	  if(err){
  	  	res.send(err)
 	  } else {
 	  	res.json(flora)
 	  }
  	})
  })
  .put(function(req, res){
  	Flora.findById(req.params.flora_id, function(err, flora){
  	  if(err){
  	  	res.send(err)
  	  } else {

  	  	flora.name = req.body.name || flora.name;
  	    flora.category = req.body.category || flora.category;
  	    flora.season = req.body.season || flora.season;
        flora.lat = '46.8615808';
        flora.lng = '-113.9813174';

  	    flora.save(function(err){
  	      if(err){
  	      	res.send(err)
  	      } else {
  	      	res.json({message: 'flora updated'})
  	      }
  	    })
  	  }
  	})
  })
  .delete(function(req, res){
  	Flora.remove({_id: req.params.flora_id}, function(err){
  	  if(err){
  	  	res.send(err)
  	  } else {
  	  	res.json({message: 'post deleted'})
  	  }
  	})
  })

   

module.exports = router;