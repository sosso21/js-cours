
function isparimary(nombre){
   var t =[]
    for( var i = 2 ; i < nombre ; i++){
        if(nombre%i ==0 )
        {
            t.push(i)
        }
    }
    return t
}
isparimary(91)

//-----------------//

var pikatshu = {
    crier: function(){ 
        console.log ('pika pikaaaaaa!!')
     }

}
pikatshu.crier


//---

var phrase = 'bonjour  à tous les amis pour ceux qui me connaisse pas vos grands meres les asticos qui mange des abricot '
 phrase.split(' ') .length


 ////-------------------//

var eleve1= [5,20,18]
var eleve2= [14,15,15 ]

var moyenne  = function(eleve ) { 

 
    var n = 0
    for(i=0 ; i < eleve.length ; i++ )
    {
        n += eleve[i]
    }
    m= n/eleve.length
    return m
}
 

var tbest =  function ( s1 , s2 )
{
    m1 = moyenne(s1)
    m2 = moyenne(s2)
    if( m1 > m2)
    {
        return s1
    }
    else{
        return s2 
    }
}



