/*
   video 22 Fetch

   //-----> https://jsonplaceholder.typicode.com/users
*/


/*----------------1------------
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(respense)
{
  return respense.json()
} )
.then(function(data)
{
  console.log(data)
} )

*/

let getUser = async function()
{
try{
 let respence  = await fetch('https://jsonplaceholder.typicode.com/users')
if(respence.ok) 
{ 
 let data = await respence.json()
 console.log(data)
}
else
{
  console.error('une erreur c\'est produite : ' , respence.status  )
}
}
catch(e)
{
  console.log(e)
}

}

getUser()