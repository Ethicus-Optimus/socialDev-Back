'use strict';

let date = new Date(year, month, day, hours);

const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogPostSchema = new Schema ({
    title: String,
    date: date,
    content: String,    


;

const Posts = mongoose.model('blogPost')})
