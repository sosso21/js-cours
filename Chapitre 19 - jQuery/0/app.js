/*
  //jQuery
         // Video 19
  */

/*
//pour pas poluer le Name space jQuery

jQuery(function($)
{
  //notre code
} )

// c l'equivalent en natif de
( function()
{
  /// notre code
} )()



      // si on veux changer les color des li a .. 
     //  pas besoin de boucle de mes deux ... queryselector(lalalalal)
  
  //jQuery("li a").css('color', '#00000')

  //ou plus simple
  //   $("li a").css('color', '#ffffff')
  
  // modifier unisquement le first a 
 // $("li a:first").css('color', '#ffffff')
  
  // modifier unisquement le last a 
 // $("li a:last").css('color', '#ffffff')
  
// récuperer l'attribu ex: href
// console.log($("li a:last").attr('href') ) ///--> #Aceuille


// changer l'attribu ex: href
// $("li a:last").attr('href', '#about' )  ///--> #Aceuille

// Ajouter une class
// $("li ").addClass('btn btn-primary')

// retirer la cclass
// $("li ").removeClass('btn btn-primary')

// selectioner parent
// console.log(  $("li:first ").parent()  )

//exemple pour parent
// $("li:first").parent().css('background-image', 'inear-gradient( 15deg , #000000 ,#ffffff )')

// element en meme niveau
///console.log(  $("li:first ").siblings()  )

// Ajouter des element dans des autres
var ul = $('ul:first')
var li = $('<li > </li> ')
var a = $('<a href="#logout "  > Déconnexion </a>')
 li.append(a)
//ul.append(li) //--> mettre a la fin
// ul.prepend(li) //---> mettre au début
var second_li = $('li')[2]
//second_li.after(li) //---> mettre en 3 em position

// modifier du text  (si on spécifie rien ca nous renvoit le text)
var aFirst = $('a:first')
//aFirst.text('saluut')
// aFirst.html('<a>heloo</a>')


// AddEventListener en mieux
$('li a').on('click',function(e){
  console.log(this)
})

// AddEventListener en mieux mieux ( en jQuery )
$('li a').click( function(e){
  console.log(this)
})



*/
// Exercice ///---> refaire le système d'onglet


$('li a ').click(function (e) 
{  
  e.preventDefault()
  if ($(this).parent().hasClass('actif') )
   {
     return false   
  }
  var $href = $(this).attr('href')
  $('.navbar .actif').removeClass('actif')
 $(this).parent().addClass('actif')  

 // traditionel
//$('.afficher').removeClass('afficher')
  //$($href).addClass('afficher')

  //* maniere somple
  // $($href).show()
  // $($href).siblings().hide()

  // * maniere transition 500ms
  //  $($href).show(500)
   // $($href).siblings().hide(4000)

    // * maniere slide
    //$($href).slideDown(300)
    //$($href).siblings().slideUp(300)

     // * maniere opacité
     $($href).siblings(':visible').fadeOut(200, function()
     {
       $($href).fadeIn(200)
      })



})

var hash = window.location.hash
 if( hash != "" && !$( ' [href="'+hash+'" ]' ).hasClass('actif') )
 { 
  
   var $elemnt = $('[href="'+hash+'"]')
  var $href = $( $elemnt).attr('href')
  $('.navbar .actif').removeClass('actif')
 $( $elemnt).parent().addClass('actif')  

 console.log( 'mon hash : '+ hash)
$('.afficher').siblings().hide()
  $($href).show()
  
 }



