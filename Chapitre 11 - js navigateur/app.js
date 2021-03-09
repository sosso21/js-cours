// on etudie  les objet window
/*
  -Window.prompt(')
  -window.alert(')
  -window.confirm(')
  -setInterval() => {
    
}, Interval (ms) );---> boucle

  -setTimeout(() => {
    
}, timeout (ms)); ---> une seul fois 

*/

/*
var a = 'demo'
console.log(window)

//affiche une alert
window.alert('salut les gens')

// affiche un input
var demo = window.prompt('wesh ! ')
console.log(demo)

// une confirmation
var verf = window.confirm("voulez vous vraiment nous faire une fellation ?")
console.log(verf)

//------- exo ---------

var deviner =  Math.round(Math.random())
alert('Jouans tous ensemble è un petit jeu ! ')
var input =  parseInt( window.prompt('devinez ule nombre'),10 )


while( input != deviner )
{
   
   var  essai = 3
    if ( input > deviner && essai > 0 )
     {
         essai--
        alert('le nombre est inferieur')  
    }
     if ( input < deviner  )
    {
        alert('le nombre est superieur' + essai +'/3')  
   }
   input = parseInt(window.prompt('Résayez')+essai + '/3' )
  
}

 if(deviner == input ){
alert('bien ouéj la famille !  ')
}else {
    alert('vtfe')
}

*/

// ----exo setinterval

// afficher un spam chaque 5 sec
/*
window.setInterval(() => {
    window.confirm('message spamant')
}, 5000 );


// compter jusqu'a 10

var i=0
var timer = window.setInterval(() => {
    i++
    window.confirm('message spamant ' + i)
    if (i==10) {
        window.clearInterval(1)
    }
}, 2000 );

console.log(timer) //  ---> recuper l'id du timer --1


// afficher un message au bout de 1 sec 

setTimeout(() => {
    window.confirm('message spamant')
}, 1000 );

// il existe aussi un 
//window.clearTimeout()


*/





