'use strict';

function serverError(err, request, response, next){
  response.status(500).send('internal server error');
  console.error(request.method, 'internal server error', request.path );
  console.log(err.message);
}


module.exports = serverError;