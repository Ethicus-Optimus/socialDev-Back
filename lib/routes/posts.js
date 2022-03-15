'use strict'

const express = require('express');
const router = express.Router();
const {getPosts, postPosts} = require('../routeControl/posts.js')



router.get('/', getPosts);
router.post('/', postPosts);

module.exports = router; 
