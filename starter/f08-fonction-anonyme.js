/*****************************
* 020 - Fonctions - Préalable
*/

// 6. FONCTION ANONYME

// 1°) Déclaration de fonction sous la forme d'une expression de fonction

// a) sans paramètre ni return


/* EXERCICE :
- Déclarez sous la forme d'une expression de fonction
  la fonction direBonjour qui affiche "Bonjour !" dans la console
- Exécutez la fonction
*/

// Expression de fonction sans paramètre ni return

console.log("function anonyme")
const direBonjour = function () {
    const message = `Bonjour, julien !`;

    console.log(message);

};
// Appel de la fonction
direBonjour();

// b) sans paramètre mais avec return
const bonjour = function() {
        const message = `Bonjour, julien !`;
        return message;
    }
console.log(bonjour());
/* EXERCICE 2 :
- Déclarez sous la forme d'une expression de fonction
  la fonction disBonjour qui retourne la chaîne "Bonjour !"
- Utilisez-la pour afficher "Bonjour !" dans la console
*/

// Expression de fonction sans paramètre mais avec return
console.log("function ex2")
const direBonjour2 = function () {
    return "Bonjour anonyme";
};
console.log(direBonjour2());
// Utilisation de la fonction pour afficher "Bonjour !" dans la console

// c) avec paramètre et return

/* EXERCICE 3 :
- Déclarez sous la forme d'une expression de fonction la fonction salue qui
   - prend le paramètre prenom
   - stocke dans une variable message "Bonjour !"
   - retourne ce message
- Utilisez-la pour saluer Thomas dans la console
*/
// Expression de fonction avec paramètre et return

// Utilisation de la fonction pour saluer Thomas dans la console


console.log("function anonyme ex3 avec parametres");
const direBonjour4 = function(prenom) {
        const message = `Bonjour, ${prenom} !`;
        return message;
    }
console.log(direBonjour4("Thomas")); // "Bonjour, Thomas !"
