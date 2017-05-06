'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var Blog = new Schema({
  title: String,
  text: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', Blog);
