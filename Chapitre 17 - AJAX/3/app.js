
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

  
  
///----6 --- formulaire poussée


var form = document.querySelector('#myform')

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
      if (httpRequest.state != 200 ) 
      {
        
        result.innerHTML = ''
        var errors = JSON.parse(httpRequest.responseText )
        var errorkeys = Object.keys(errors)

        for (let o = 0; o < errorkeys.length; o++) 
        {
          var key = errorkeys[o] 
         var  error = errors[key]
        
          Element = document.querySelector('[name='+key+']'  )
          console.log('#'+ key )
          var span = document.createElement('span')
          span.className =  "my-1 error alert-danger "
          span.innerHTML= error
          Element.parentElement.appendChild(span)
         


          
        }

      }
      else{
        
      result.innerHTML =  httpRequest.responseText
     }
    }
  }
  

  

  httpRequest.open("POST", form.getAttribute('action')  ,true)
  httpRequest.setRequestHeader('X-Requested-With', 'xmlhttprequest')
  var data = new FormData(form)
  httpRequest.send(data)

}) 


/*
app.js:52 Uncaught TypeError: Cannot set property 'innerHTML' of null
    at XMLHttpRequest.httpRequest.onreadystatechange (app.js:52)

    */