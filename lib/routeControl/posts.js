const BlogPost = require('../models/blogPostSchema.js')


 
const getPosts = async (req, res) => {

  let post = {};

  try {

    const postMessage = await BlogPost.find(post);
    res.status(200).json(postMessage);    

  } catch (e) {
   
    console.log(e)
    res.status(500).send('failed to get')
  }

}

const postPosts = async (req, res) => {

  try{
    const newPost = await BlogPost.create(req.body);

    res.status(201).send(newPost);

  }catch(e){

    console.log(e)
    res.status(500).send('failed to post')
  }
}


module.exports = {
  getPosts,
  postPosts,
};
