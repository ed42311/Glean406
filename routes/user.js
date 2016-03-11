var mongoose = require('mongoose');
var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

   app.post('/signup', passport.authenticate('local-signup', {
       successRedirect: '/', // redirect to the secure profile section
       failureRedirect: '/signup', // redirect back to the signup page if there is an error
       failureFlash: true // allow flash messages
   }));

   app.get('/signup', function(req, res){
       res.render('signup')
   })

   app.post('/login', passport.authenticate('local-login', {
       successRedirect: '/', // redirect to the secure profile section
       failureRedirect: '/login', // redirect back to the signup page if there is an error
       failureFlash: true // allow flash messages
   }));

   app.get('/login', function(req, res) {
       // render the page and pass in any flash data if it exists
       res.render('login.ejs', {
           message: req.flash('loginMessage')
       });
   });


   app.get('/signup', function(req, res) {
       // render the page and pass in any flash data if it exists
       res.render('signup.ejs', {
           message: req.flash('signupMessage')
       });
   });

   app.get('/logout', function(req, res) {
       req.logout();
       res.redirect('/');
   });
  // route middleware to make sure a user is logged in
   function isLoggedIn(req, res, next) {

   // if user is authenticated in the session, carry on 
   if (req.isAuthenticated())
       return next();

   // if they aren't redirect them to the home page
   res.redirect('/');
}


   // app.get('/admin', isAdmin, function(req, res) {
   //     mongoose.model('User').find({}, function(err, users) {
   //         if (err) {
   //             return console.log(err);
   //         } else {
   //             res.render('adminProfile.ejs', {
   //                 users: users,
   //                 user: req.user
   //             });
   //         }
   //     });


   // });
};