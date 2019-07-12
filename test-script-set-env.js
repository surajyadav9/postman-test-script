//Script for setting environment variable :=>


if(pm.response.code === 200 ) {    //If we get the response correctly
    pm.environment.set('authToken' , pm.response.json().token)    // env , in this case , authToken ; the response body contains a object with key 'token'
}
