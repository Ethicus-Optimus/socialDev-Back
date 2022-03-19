import { find, create, findByIdAndUpdate, findByIdAndDelete } from '../models/blogPostSchema.js';

const getPosts = async (req, res) => {

  let emailFromClient = {};
  if(req.query.email) {
    emailFromClient.email = req.query.email;
  }

  let posts = {};
  try {
    const postsFromDB = await find(emailFromClient);
    console.log(postsFromDB)
    if (postsFromDB.length > 0){
      res.status(200).send(postsFromDB);
    } else {
      res.status(404).json("no posts found");    
    }
  } catch (e) {
    console.log(e)
    res.status(500).send('failed to get')
  }
}

const postPosts = async (req, res) => {
  try{
    const newPost = await create(req.body);
    res.status(201).send(newPost);
  }catch(e){
    console.log(e)
    res.status(500).send('failed to post')
  }
}

const updatePosts = async (req, res) => {
  console.log("UPDATE POSTS HIT");
  console.log(req.params);
  const { id } = req.params;
  try{
    const updatedPost = await findByIdAndUpdate(id, req.body, {new: true, overwrite: true});
    console.log('post updated')
    console.log(id);
    res.status(201).send(updatedPost);
  }catch(e){
    console.log(e)
    res.status(500).send('failed to update post')
  }
}

const deletePosts = async (req, res) => {
  try{
    const { id } = req.params;
    await findByIdAndDelete(id);
    res.status(201).send('post deleted');
  }catch(e){
    console.log(e)
    res.status(500).send('failed to delete post')
  }
}

export default {
  getPosts,
  postPosts,
  updatePosts, 
  deletePosts,
};
