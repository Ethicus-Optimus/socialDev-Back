'use strict'

const express = require('express');
const router = express.Router();
const getPosts = require('../routeControl/posts.js')


router.get('/', getPosts);


module.exports = router; 
