const express = require('express'),
      router = express.Router(),
      path = require('path')

module.exports = (() => {
  router.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'))
  });

  return router
})()
