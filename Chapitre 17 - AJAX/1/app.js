
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

    /*
    /// -- Premier test 
  var links = document.querySelectorAll('.navbar a')
  for (let i = 0; i < links.length; i++) 
  {
      var link = links[i]
      link.addEventListener('click', function(e)
      {
        var result =   document.querySelector(".result")
        result.innerHTML = "Chargement ..... "
         e.preventDefault()
        
          var httpRequest =  getHttpRequest()
          httpRequest.open("GET", this.getAttribute('href')  ,true)
          httpRequest.onreadystatechange = function () 
          {
               if (httpRequest.readyState === 4) 
               {
                   result.innerHTML =  httpRequest.responseText 
                }
            }
            httpRequest.send()
        }) 
  }
  */

  /*
  /// -- Premier test 
  var links = document.querySelectorAll('.navbar a')
  for (let i = 0; i < links.length; i++) 
  {
      var link = links[i]
      link.addEventListener('click', function(e)
      {
        var result =   document.querySelector(".result")
        result.innerHTML = "Chargement ..... "
          e.preventDefault()
        
          var httpRequest =  getHttpRequest()
          httpRequest.open("GET", "https://jsonplaceholder.typicode.com/users"  ,true)
          httpRequest.onreadystatechange = function () 
          {
               if (httpRequest.readyState === 4  ) 
               {
                   if (httpRequest.status === 200) 
                   {
                       text_result =JSON.parse(httpRequest. responseText )
                       // on crée une list avec text_result
                       result.innerHTML =''
                       var ul = document.createElement('ul')
                       result.appendChild(ul)
           
                       for (let j = 0; j < text_result.length; j++) 
                       {
                           var li = document.createElement('ul')
                           li.innerHTML = text_result[j].name
                           ul.appendChild(li)
            
                        }
                    }
                    else
                    {
                        alert('echec de connexion ')
                    }
                }
            }
             httpRequest.send()
         
        })
    
  }

  */

  
    /// --3-- Requete en Post

    var links = document.querySelectorAll('.navbar a')
    for (let i = 0; i < links.length; i++) 
    {
        var link = links[i]
        link.addEventListener('click', function(e)
        {
          var result =   document.querySelector(".result")
          result.innerHTML = "Chargement ..... "
           e.preventDefault()
          
            var httpRequest =  getHttpRequest()
            httpRequest.open("POST", 'meteo.php'  ,true)
            httpRequest.onreadystatechange = function () 
            {
                 if (httpRequest.readyState === 4) 
                 {
                     result.innerHTML =  httpRequest.responseText 
                  }
              }
              
              var data = new FormData()
              data.append('ville',"Djborland")
              data.append('nom','momo')
              httpRequest.send(data)

          }) 
    }


