/*
   Promise, Async & Await
*/


/*
///----------------1-------------



var get = function (url , sucssess , error ) 
{
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () 
    { 
      if(xhr.readyState != 200 ) 
      {
      if (xhr.readyState == 4) 
      {
        sucssess(xhr. responseText )
        }
      }else
      {
        error(xhr)
      }
    }
    xhr.open('GET', url, true)
    xhr.send()
  }
  
var doGet = function()
{
  get(" https://jsonplaceholder.typicode.com/users",function(a)
  {
    var users =JSON.parse(a)
    console.log(users[0] )
  } , function(err)[
    console.log(err)
  ] )
}

doGet()

  */
 /*
//-----------------2------------------

let get = function (url  ) 
{
  return new Promise( function ( resolve , reject ){ 
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () 
    { 
      if(xhr.readyState != 200 ) 
      {
      if (xhr.readyState == 4) 
      {
        resolve(xhr. responseText )
        }
      }else
      {
        reject(xhr)
      }
    }
    xhr.open('GET', url, true)
    xhr.send()
  })
 }
  
  
  console.log(get(" https://jsonplaceholder.typicode.com/users").then(  
  function( respence ){
    let users = JSON.parse( respence )
    console.log(users)
  }
  ).catch(function(error){
    console.log(error)
  }) )


*/


