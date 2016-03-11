var mongoose = require('mongoose');
var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

   app.post('/signup', passport.authenticate('local-signup', {
       successRedirect: '/', // redirect to the secure profile section
       failureRedirect: '/signup', // redirect back to the signup page if there is an error
       failureFlash: true // allow flash messages
   }));

   app.post('/login', passport.authenticate('local-login', {
       successRedirect: '/', // redirect to the secure profile section
       failureRedirect: '/login', // redirect back to the signup page if there is an error
       failureFlash: true // allow flash messages
   }));

   app.get('/login', function(req, res) {
      console.log("user at login: ")
  var user = req.user || "no user";
       res.render('login.ejs', {
           message: req.flash('loginMessage'),
           user: user
       });
   });


   app.get('/signup', function(req, res) {
       console.log("user at signup: ")
       var user = req.user || "no user";
       res.render('signup.ejs', {
          message: req.flash('signupMessage'),
          user: user

       });
   });

   app.get('/logout', function(req, res) {
       req.logout();
       res.redirect('/');
   });
   function isLoggedIn(req, res, next) {

   if (req.isAuthenticated())
       return next();

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