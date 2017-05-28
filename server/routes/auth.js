const express = require('express'),
      router = express.Router(),
      passport = require('passport')

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/newblog', // redirect to the secure profile section
  failureRedirect : '/signup', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}))

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/newblog', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}))

router.get('/isauth', (req, res, next) => {
  res.send(req.user)
})

router.get('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/');
})

module.exports = router
