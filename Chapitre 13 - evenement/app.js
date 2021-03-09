//----------- les evenements-   ----- //
/*

// synyax général

var beRed =  function()
{
    return myclass.classList.toggle('red')
}
var myclass = document.querySelector('.myclass')
myclass.addEventListener('dblclick' ,beRed ) 


// les event : https://www.w3schools.com/jsref/dom_obj_event.asp
//document.querySelector("myclass").addEventListener("event", function)



// on va faire un espece de 'voulez vous vraiment quitter la page ?


var liens = document.querySelectorAll('a')
for (let i = 0; i < liens.length; i++) 
{
    var lien = liens[i]
  lien.addEventListener('click', function(e)
    {
        e.stopPropagation() // le li . ul  ne sont pas conserner
        var verif = window.confirm('Quitter la page ?')
        verif
        if (verif== false ) {
            e.preventDefault()     // annuler
        }
    }
     )
     //le e renvois à mouseenvent

}



 //pour supprimer un Eventlistener
var onclick = function()
{
    return myclass.classList.add('red')
}

 var myclass = document.querySelector('.myclass')
  // myclass.addEventListener('click' , onclick  ) 

 myclass.removeEventListener('dblclick',onclick )

 
// Ecouter les Keys sur input
// change --> detect qd on change de champ

document.querySelector('#a').addEventListener('change',function(e){
    console.log(e)
})



// change --> detect qd on  appuis sur une touche -->si on appuis longmt ca compte pas
//--> Evenemnt non Annulable

document.querySelector('#a').addEventListener('keyup',function(e){
    console.log(e)
})


// change --> detect qd on  relache une touche --> si on appuis logment va compte
//--> Evenemnt non Annulable

document.querySelector('#a').addEventListener('keydown',function(e){
   //  console.log(e)
    var word = String.fromCharCode(e.keyCode )  ///--> ca renvois direct la lettre 
    console.log(word)
    
})


// verifier les Submit
document.querySelector('#form').addEventListener('submit',function(e){
    var cp =  document.querySelector('#cp')
    if (cp.value.length != 5 ) {
        window.alert("le code postal est invalide")
        e.preventDefault // on annule la validation
    }
     
 })
 // on px faire ca pour tt les element Html
// comme :
 // value
 // option
 //checked
 //selected 
 //select

 

// Focus
 var cp = document.querySelector('#cp')
cp.focus()

// Pour déFocus
cp.blur()


//  evenembt Focus
var cp = document.querySelector('#cp')
cp.addEventListener('focus', function()
{
    cp.classList.toggle('red')
} )


// evnemnt defocus
var cp = document.querySelector('#cp')
cp.addEventListener('blur', function()
{
    cp.classList.toggle('red')
} )

*/