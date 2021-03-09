/*
  //jQuery
         // Video 19
         // AJAX en JQuery
  */

  // ---> https://jsonplaceholder.typicode.com/users


  /*

  //-- 1 simple

  var $ul = $('#users')
  
  $.get("https://jsonplaceholder.typicode.com/users", {},
    function (data, textStatus, jqXHR) {
      data.forEach( function(user )
      {
          var $li = $(' <li> ').text(user.name)
          $li.appendTo($ul)


      });
    },
    
  );
*/

// avec done et fail et always

$load = $('<p>').text('chargement.....')

  var $ul = $('#users')
  $load.appendTo($ul)
  
  $.get("https://jsonplaceholder.typicode.com/users" , {} ).done( 
    function (data, textStatus, jqXHR) {
      data.forEach( function(user )
      {
          var $li = $(' <li> ').text(user.name)
          $li.appendTo($ul)


      });
    },
    
  ).fail( function ( jqXHR , textStatus , errorThrown  ) { 
    console.log('faile')
   } ).always( function () { 
     $load.remove()
     console.log("alw")
    })




