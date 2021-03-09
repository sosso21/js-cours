try {
    console.log( hello.crier())
} catch (error) {
    console.log('il y a eu une errreur ')
    
}

//-----

try{
var a = {}
 var demo = function(nombre) 
 {
     if (nombre > 5) 
     {
         throw new Error('Le nombre est plus grand que 5')    
     }
     return nombre*2
 }
demo(6)
}catch(error){
    console.log("le nombre est inferieur a 5")
}finally
{
    console.log('le message de finally')
}







