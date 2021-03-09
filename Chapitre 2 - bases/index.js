// $myvar = 123 ;
var myvar = 123 ; // le var et  ; est optionel

myvar + 5 // -> 1235 
          //  la concatenation se fait avec un +
var tab = [1,2,3,4]
tab[0] // -> 1
var objet =  {
    nom:'sofiane',
    age: 21 
}
objet.age //--> 21

if(myvar > 1) {

}else if (myvar < 1 )
{

}else{

}
// on peut faire ()?():
while(i < 10 ) {

}
for(var i = 0 ; i < 1 ; i++  ){
    break
}
// parcourir un tableau comme foreach
for(var ii=0 ;  i <=  tab.length ; ii++ ){

}
// on peut faire ca
function name(params) {
    
}

// ou ca 
var myfunc =  function ( a , b) {
    if(b = undefined){
        b = 2 
    }
    c = a + b  
}
myfunc(2)

// y a un truc bizzard pour les function native
// tkt je t'explique ,
// en gros elle n'existe pas xD
// elle sont remplacer par des methode 
// methode comme php
/* 
au lieu de faire ca 
stringtouper('nom');
on ferais plutot ca
nom->stringtoupper()
*/
var myname = 'sofiane'
myname.length
// -> 7 letres 

// il y a des espece de methode static
// ex
var  name= 'sofiane'
name.indexOf('a')
// -> 4eme position (on compte le 0)
// on peut meme faire
var b = 'sofiane'.lastIndexOf("a") 

// les class
var eleve = {
    nom: 'eleve' ,
    moyenne: function () {
        return 10 
    },
    present: function () {
        return this.nom + ' est present'
    }
}
var paul = Object.create(eleve)
paul.nom = 'paul alois'


//********************** */
// on peut meme ajouter des nouvelle methode

paul.parler =  function ( return ' salut' ) 

// ou modifier
paul.present = function ( return ' wsh les gars' ) 

// pour cree des constructeur :
eleve = function (name) {
  this.name =  name  
}
eleve.prototype.moyenne = function () {
    return 10
}

paul = new eleve('paul')











