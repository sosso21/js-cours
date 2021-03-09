var k = 91
for( var i = 2 ; i  < k  ; i++  )
{
    var v = k/i
    if(v  == Math.round(v)  ) {
        console.log(v)
    }
}

//é

var eleve = [{
        nom : 'paul' ,
        note : 16 
    },{
        nom : 'moh' ,
        note : 12 
    },{
        nom : 'lisa' ,
        note: 4 
    }]


for(i=0 ; i < eleve.length ; i++ )
{

    if(eleve[i].note >= 10 )
    {
        console.log( eleve[i].nom + ' vous avez la moyenne')
    }
    else{
        console.log( eleve[i].nom + ' vous n\'avez pas la moyenne')
    }
}



