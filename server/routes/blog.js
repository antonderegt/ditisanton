const express = require('express'),
      Blog = require('../models/blog'),
      router = express.Router(),
      blogProjection = {
        __v: false,
        _id: false
      },
      init = new Blog({
        title: `No blogs yet`,
        text: `Empty...`
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

    router.post('/newblog', (req, res) => {
      let post = new Blog(req.body)

      post.save(err => {
        if(err) throw err
        console.log('Post saved')
        res.json({ post })
      })
    })

    router.post('/newcomment', (req, res) => {
      let { blogTitle, name, text} = req.body
      let comment = {
        name,
        text
      }

      Blog.findOneAndUpdate(
        { title: blogTitle },
        { $push: { comments: comment } },
        { safe: true, upsert: true, new: true }, (err, post) => {
        if(err) throw err
        console.log('Comment saved', post)
        res.json({ post })
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

    return router;
})();
