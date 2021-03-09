var eleve ={ 
    nom: 'Paul Alois',
    present: function(){
        console.log(this.nom +' est present ')
    }
}
eleve.present()


///------------------//

var eleve ={ 
    nom: 'Paul Alois',
    present: function(){
        var self = this
        var demo = {
            demo : function(){
            console.log(self.nom +' est present ') 
        }
        }
        demo.demo()
    }
}
eleve.present()
