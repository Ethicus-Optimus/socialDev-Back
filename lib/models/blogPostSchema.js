'use strict';

const uuid = require('uuid')

const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogPostSchema = new Schema ({
    title: String,
    updated: String,
    content: String,
    poster: String,

  });

const BlogPost = mongoose.model('blogPost', blogPostSchema);

module.exports = BlogPost;
