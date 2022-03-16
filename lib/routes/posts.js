'use strict'

const express = require('express');
const router = express.Router();
const {getPosts, postPosts, updatePosts, deletePosts} = require('../routeControl/posts.js')



router.get('/', getPosts);
router.post('/', postPosts);
router.put('/:id', updatePosts);
router.delete('/:id', deletePosts);

module.exports = router; 
