
/*
// TERMINOLOGIE //
-paul et moh Sont des Instences
- Eleve ---> Class---> Objet
-nom , note , moyenne --> propriétés de ELeve
-Notes , moyenne --> des prototype de ELeve


*/


var Eleve = function(nom ){ 
    this.nom=  nom
}
Eleve.prototype.note = []

Eleve.prototype.moyenne = function() 
{
    var somme =  0
    for( var i = 0 ;  i < this.note.length ; i++  )
    {
        somme += this.note[i]
    } 
     return somme/this.note.length   
}



var moh =  new Eleve('moh')
var paul =  new Eleve('PAUL')

paul.note =[12,20,19,17]
console.log(paul.moyenne())

Eleve.prototype.average = 10 // lpassage à partir de 10 
if( paul.moyenne() > paul.average ){ console.log('c regl') }

console.log(paul.nom)
console.log(moh.nom)
 


