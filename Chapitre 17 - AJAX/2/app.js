
var getHttpRequest = function () {
    var httpRequest = false;
  
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
      httpRequest = new XMLHttpRequest();
      if (httpRequest.overrideMimeType) {
        httpRequest.overrideMimeType('text/xml');
      }
    }
    else if (window.ActiveXObject) { // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {}
      }
    }
    if (!httpRequest) {
      alert('Abandon :( Impossible de créer une instance XMLHTTP');
      return false;
    }
  
    return httpRequest
  }

  /*

//--- 4 ---- formulaire
console.log('hello 1111')

var form = document.querySelector('form')

form.addEventListener('submit', function(e)
{
  console.log('hellooo22')
  var result =   document.querySelector(".result")
  result.innerHTML = "Chargement ..... "
  e.preventDefault()

  
  var httpRequest =  getHttpRequest()
  httpRequest.onreadystatechange = function () 
  {
    if (httpRequest.readyState === 4) 
    {
      result.innerHTML =  httpRequest.responseText 
    }
  }
  
  httpRequest.open("POST", 'meteo.php'  ,true)
  var data = new FormData(form)
  // var input = document.querySelector("#q")
 //  data.append( input.name , input.value )
  httpRequest.send(data)

}) 


//-----5----- sycrone (sans le true)


var form = document.querySelector('form')

form.addEventListener('submit', function(e)
{
  console.log('hellooo22')
  var result =   document.querySelector(".result")
  result.innerHTML = "Chargement ..... "
  e.preventDefault()

  
  var httpRequest =  getHttpRequest()
  
  httpRequest.open("POST", 'meteo.php'  ,false)
  var data = new FormData(form)

 httpRequest.send(data)
result.innerHTML =  httpRequest.responseText 

})

*/

///----6 --- formulaire poussée

console.log('hello 1111')

var form = document.querySelector('form')

form.addEventListener('submit', function(e)
{
  console.log('hellooo22')
  var result =   document.querySelector(".result")
  result.innerHTML = "Chargement ..... "
  e.preventDefault()

  
  var httpRequest =  getHttpRequest()
  httpRequest.onreadystatechange = function () 
  {
    if (httpRequest.readyState === 4) 
    {
      result.innerHTML =  httpRequest.responseText 
    }
  }
  
  httpRequest.open("POST", 'meteo.php'  ,true)
  var data = new FormData(form)
  // var input = document.querySelector("#q")
 //  data.append( input.name , input.value )
  httpRequest.send(data)

}) 


