'use strict';


const { getPosts, postPosts, updatePosts, deletePosts } = require('../lib/routeControl/posts.js')


const { app } = require('../lib/server.js');
const failTest = 'http://httpstat.us/500';
const request = require('supertest');
const { contentType } = require('express/lib/response');



describe('post testing', () => {
  

  // Add A room
  it('Add a post', async () => {
    let response = await request(app).post('/posts').send({ 
      title: 'if you are reading this, you are cool',
      updated: 'April 1st, 1990',
      content: 'Ryan confessed',
      poster: 'nottestguy',
      email: 'notfakeemail.com',
    })

  
    expect(response.status).toEqual(201);

  })

  // See what rooms router.get('/room', readRooms);
  it('get posts', async () => {

    let response = await request(app).get('/posts')
    // console.log(response.body)

    expect(response.status).toEqual(200);
  })

  // Clean a room router.put('/room/:id', cleanRoom);
  it('update a post', async () => {
    

    let response = await request(app).post('/posts').send({ 
      title: 'if you are reading this, you are cool',
      updated: 'April 1st, 1990',
      content:'Ryan plead the fif',
      poster: 'nottestguy',
      email: 'notfakeemail.com',
    })

    let id = response.body._id;;
    
    let putResponse = await request(app).put('/posts/' + id).send(
      {
        title: 'if you are reading this, you are cool',
        updated: 'April 1st, 1990',
        content:'Ryan plead the 6th',
        poster: 'nottestguy',
        email: 'notfakeemail.com',
      }
    )

    expect(putResponse.status).toEqual(201);
  })


  // Remove a room completely router.delete('/room/:id', removeRoom);
  it('Delete a post completely', async () => {

    let response = await request(app).post('/posts').send({ 
      title: 'if you are reading this, you are cool',
      updated: 'April 1st, 1990',
      content: 'Ryan confessed',
      poster: 'nottestguy',
      email: 'notfakeemail.com',
    })

    // let id = response.body[response.body.length-1]._id;
    console.log(response.body._id);
    let id = response.body._id;
    let deleteResponse = await request(app).delete('/posts/'+ id)
    

    expect(deleteResponse.status).toEqual(201);
  })



})

describe('404 and 500 tests', () => {
  it('404 test', async () => {
    let response = await request(app).get('/non-extant-route-10001')
    expect(response.status).toEqual(404);
  })


  it('500 test', async () => {
    let response = await request(failTest).get('/')
    expect(response.status).toEqual(500);
  })
})


