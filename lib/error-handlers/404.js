'use strict';

function notFound(request, response, next){
  response.status(404).send('Nothing found');
  console.error(request.method, 'Err no route found on path', request.path );
}


module.exports = notFound;