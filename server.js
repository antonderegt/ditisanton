const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      session = require('express-session'),
      blog = require('./server/routes/blog'),
      auth = require('./server/routes/auth'),
      mailer = require('./server/routes/mailer'),
      index = require('./server/routes/index')

require('dotenv').load()
require('./passport')(passport)

let app = express()

app.use(express.static(path.join(__dirname, './dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'test-secret',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth)
app.use('/api/mailer', mailer)
app.use('/api/blog', blog)
app.use('/', index)

const port =  process.env.PORT || 3000;
app.listen(port, () => console.log('Running on localhost:', port))
