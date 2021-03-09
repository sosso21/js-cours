/*
  // ------  dovument ------//




// pour selectioner body

document.body


// avec id
document.getElementById('demo')

// avec class
document.getElementsByClassName('myclass')

//avec tag
document.getElementsByTagName('p')

on peut aussi selectioner comme si ct un tableau
document.getElementsByTagName('p')['0]


// maniere plus moderne
// document.querySelector('une definition css')
document.querySelector('.myclass')


//changer la couleur

document.querySelector('.myclass').className
document.querySelector('.myclass').className = 'myclass red'

// classlist

var p = document.querySelector('.myclass')
p.classlist


//function de queryselector

var p = document.querySelector('.myclass')
p.classList.add('red')


p.classList.add('class a ajouter')
            .contains('chercher si ca exite')
            .contains('truc a supprimer')
            .toggle('si il est la le retirer , si nn le mettre)



//modifier style css

var p = document.querySelector('.myclass')
p.style.fontSize='550'
p.style.color = '#FFFFFF'
p.style.backgroundColor = '#000000'



// modifier le contenu html
 
var p = document.querySelector('.myclass')
p.innerHTML = '<strong> hello </strong>'


// modifier le contenu text
 
var p = document.querySelector('.myclass')
p.innerText = ' hello '

// Ou aussi ( ca depend  des navig )
p.textContent = 'hello '


// Pour etre sycro avec tt les navigateur

var demo = document.getElementsByClassName('myclass')
if (p.textContent ) {
    p.textContent = 'daaaamn les gens '
}else{
    p.innerText = ' hello '
}


//mettre un espece de clignotant

var demo = document.querySelector('.myclass')
setInterval(() => {
    demo.classList.toggle('red')
}, 3000);



//mettre un espece de clignotant pour tt les p

var demo = document.querySelectorAll('p')

for (let i = 0; i < demo.length; i++) {

    setInterval(() => {
        demo[i].classList.toggle('red')
    }, 3000);
}

//  manipuler les balises enfant et parent
var demo = document.querySelector('ul')

//------------>

demo.children //---> revois tt les <li> .... </li>
demo.hasChildNodes //---> pareil mais inclus meme les vides les nonnaliser
demo.childElementCount //---> calcule le nobre de childf
demo.firstChild //---> le premier demo.hasChildNodes
demo.firstElementChild //--> le premier demo.hasChild
demo.lastChild //---> dernier demo.hasChildNodes
demo.lastElementChild //---> derbnier demo.hasChild
demo.childElementCount[5] ///---->  le 6 eme element


// pour les parent
demo.parentElement //---> recupere le parent
demo.parentNode ///---> recupere le neut parent 


/// selectionner un element / neut precedent

demo.previousElementSibling //--> l'elemnt avant
demo.nextElementSibling //---> le prochane elemnt
demo.previousSibling // ----> le neut apres
demo.nextSibling ///---> le neut apres



// pour supprimer un element 

var demo = document.querySelectorAll('li')[0]
var ul = demo.parentElement
ul.removeChild(demo)


// pour deplacer un element

var demo = document.querySelectorAll('li')[0]
document.body.appendChild(demo) //---> le li est deplacer vers body

// pour faire un clone

var demo = document.querySelectorAll('li')[0]
demo2 = demo.cloneNode()
document.body.appendChild(demo2) //---> le li est cloner vers body
// mais ca ne copie pas les enfant de li

// mais là c regler
var demo = document.querySelectorAll('li')[0]
demo2 = demo.cloneNode(true)
document.body.appendChild(demo2)



// cée un element 
var paragraph = document.createElement('p')
paragraph
paragraph.textContent ='Bonjour adaaales amis.'
var body =  document.body
body.appendChild(paragraph)


// remplacer un elemnt ( en ecrasant le second)

var li2 = document.querySelectorAll('li')[1]
var li1 = document.querySelectorAll('li')[0]
var ul = li1.parentElement
ul.replaceChild( li2,li1)


//mettre un elemet avant
var li2 = document.querySelectorAll('li')[1]
var li1 = document.querySelectorAll('li')[0]
var ul = li1.parentElement
ul.insertBefore(li2 , li1)



// Focus
 var cp = document.querySelector('#cp')
cp.focus()

// Pour déFocus
cp.blur()


*/


