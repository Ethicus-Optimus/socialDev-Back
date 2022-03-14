'use strict'

const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
  try {
    res.status(200).send('post route hit')
    
  } catch (e) {
   
    console.log(e)
    res.status(500).send('server side error')
  }
});


module.exports = router; 
