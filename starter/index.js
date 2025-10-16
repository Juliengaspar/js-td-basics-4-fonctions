//declarere une fonction

function direBonjour() {
    //bloc {}
    //let toto = "" exciste uniquement a l'intérieur
    console.log('dire bonjour');
}
//utiliser la fonction c'est en l'appelant avec l'operateur de function avec son operante ()
direBonjour();

//version + academique  literal declarer une fonction a travers une var ou const
//function (){
//
// } expresion de adresse memoires d'ordinateur de ou il y a la fonctoin

const direBonjour2 = function (){

};
//arow function // de celuis de fonction anonymes aux niveaux du banding
const direBonjour3 =  ()=>{

};

let prenom ;
function direBoujour4() {
    console.log('Boujour' + prenom);
}
prenom = 'Julien';
direBoujour4();
//function avec parametres
function direBoujour5(prenom) {
    console.log('Boujour' + prenom);
}
direBoujour5("julien")

