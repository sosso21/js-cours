/*
var text = '  0anngolongolo    '

// text simple
console.log( text)

// text sans espace au debut et fin
console.log(_.trim(text) )


//text sans les 0
var text2 = '00000angolongolo000'
console.log(_.trim(text2 , '0'))

//*pad * --- rajouter des element

// rajouter des espace en debut et en fin
//la cjaine doit faire 12 carracter
var texdt3 = 'gologolo'
console.log(_.pad(texdt3,12 ))

//ajouer des etoiles pour que ca fasse 12 caracter
console.log(_.pad(texdt3 , 12,'*'))

// completer avec des * au debut
console.log(_.padStart(texdt3 , 12,'*' ))



// * Majuscule

// ajouer des maj au debut
var text4 = 'helloo'
console.log(_.capitalize(text4) )


//* transformer en URL  

// convertir les espace en _
var text5 = 'bonjour ada les amis'
console.log(_.snakeCase(text5 ))

// convertir les espace en -
console.log(_.kebabCase(text5 ))

// Mettre en majuscul
console.log(_.upperCase(text5))

// Mettre en miniscul
console.log(_.lowerCase(text5) )


//* ---Tableux

//--- fusionner deux Tableau (la func prennd une infinité de valeur)
var tab1 = ['eleve1',"eleve2"]
var tab2 = ['eleve3','eleve4']
console.log(_.concat( tab1, tab2))


// oubien 
console.log(_.concat( tab1, ['eleve5']))
console.log(_.concat( tab1, ['eleve5'] , 6 ,7,8 ))


//supprimer des element d'un tableau
var tab5 = ['k1','k2', 'k3','k4','k5','k6' ]
console.log(_.without(tab5, 'k1' ))


// filter sous une condition
var tab6 = [1,2,3,4,5,6,7,8,9 ]

console.log(_.filter(tab6 , function(v)
{
    return v >5 // v : est une valeur de Tab6
}
))
*/
// tableau plus poussée
var users = 
[ 
    {'name':'sofiane','age':21,  'actif':true  },
    { 'name':'paul','age':22, 'actif' :true  },
    { 'name':'Mohmost', 'age':23, 'actif' :false  }
]
/*
console.log(_.filter(users, function(name)
{
    return name.actif // if actif == true
}))


// encore plus simple
console.log(_.filter(users, { actif : false } ))

// chercher dans un tableu
console.log(_.find(users, { actif : false } ))

// réordonner le tab
console.log(_.orderBy(users  , 'name' , 'asc' ))

// ou
console.log(_.orderBy(users  , 'name' , 'desK' ))

// imagine ils ont le mm name
console.log(_.orderBy(users  , ['name','actif' ] ,[ 'asc ', 'desk'] ))

// parcourir un tab
console.log(_.map(users  , function(name)
{
    return name.age+1
}  ))

//foreach *-* ! attention le value vien avant key
_.forEach(users , function(name , key)
{
    console.log( key ,  '=>' , name.age )
} )


// demander un user aléatoire au Hasard comme par hasard
console.log(_.sample(users))



// demander 2 ou + user aléatoire au Hasard comme par hasard
console.log(_.sampleSize(users, 2))

// Grouper par ..
console.log(_.groupBy(users, function(name)
{
    return name.name.substr(0,1)
} ))

// taille
console.log(_.size(users))

 // cloner
 var user = users[1]
 var cloneuser = _.clone(user)
 cloneuser.age = 69
// console.log(cloneuser)

 

 // assigner une valeur
 
 _.assign(cloneuser ,  { 'actif': false , 'age':24  }  )
 //console.log(cloneuser)

// unset
_.unset(cloneuser, 'age' )
//console.log(cloneuser)

//set definir des propriete
_.set(cloneuser, 'firstname', 'alois')
//console.log(cloneuser)

// verifier if isset
// console.log(_.has(cloneuser , 'firstname' ))

// if isset else value = default
_.get(cloneuser , cloneuser.puceau , false)  
console.log(cloneuser)


//* tt les 200ms tt qu'il y a du scroll

// attendre 2 sec apres avoir FINI de scroller
window.addEventListener('scroll', _.throttle(function () {
    console.log('je scroll')
    
},200 ))

*/
// attendre 2 sec apres avoir FINI de scroller
window.addEventListener('scroll', _.debounce(function () {
    console.log('je scroll')
    
},200 ))




