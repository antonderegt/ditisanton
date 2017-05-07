const express = require('express'),
      Blog = require('../models/blog'),
      router = express.Router(),
      blogProjection = {
        __v: false,
        _id: false
      },
      init = new Blog({
        title: `First post`,
        text: `First blog text`
      })

module.exports = (() => {
    'use strict';

    router.get('/', (req, res) => {
      Blog.find({}, blogProjection, (err, blogs) => {
        if(err) throw err
        if(!blogs.length) {
          init.save(err => {
            if(err) throw err
            console.log('Init saved')
            res.json({blogs: init})
          })
        } else {
          console.log('Blog found: ', blogs)
          res.json({ blogs })
        }
      })
    })

    router.post('/:title', (req, res) => {
      let title = req.params.title.split('-').join(' ')
      Blog.findOne({title}, blogProjection, (err, post) => {
        if(err) throw err
        if(!post) {
          console.log('post not found');
          init.save(err => {
            if(err) throw err
            console.log('Init saved')
            res.json({post: init})
          })
        } else {
          console.log('Post found: ', post)
          res.json({ post })
        }
      })
    })

    // router.post('/', (req, res) => {
    //   const { blog } = req.body
    //   const newScore = blog
    //
    //   Blog.findOneAndUpdate({}, { blog: newScore }, { projection: blogProjection }, (err, score) => {
    //     if(err) throw err
    //     res.json({ blog: newScore })
    //   })
    // })

    return router;
})();
