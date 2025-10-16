/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min() n'existe pas,
   déclarez la fonction calcMin pour qu'elle retourne
   le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
   - le minimum entre 4.5 et 5
   - le minimum entre 19 et 9
   - le minimum entre 1 et 1
N.B. Faites deux versions :
   - en utilisant la syntaxe classique
   - en utilisant une arrow function
*/
console.log("Syntaxe classique");

// Syntaxe classique
function calcMin(nbr1 , nbr2) {
    if (nbr1>nbr2){
        console.log(`${nbr1} est plus grand que ${nbr2}`);
        return nbr1
    }else if (nbr1<nbr2){
        console.log(`${nbr1} est plus petits que ${nbr2}`);
        return nbr2
    }else {
        console.log(`${nbr1} a la meme valeur que ${nbr2}`);
        return nbr1

    }
}

console.log(calcMin(4.5, 5));
console.log(calcMin(19, 9));
console.log(calcMin(1, 1));

// Utilisation de la fonction calcMin pour calculer le minimum

console.log("Version avec une arrow function");
// Version avec une arrow function
const calcMinArrow =  (x, y) => {
    if (x>y){
        console.log(`${x} est plus grand que ${y}`);
        return x
    }else if (x<y){
        console.log(`${x} est plus petits que ${y}`);
        return y
    }else {
        console.log(`${x} a la meme valeur que ${y}`);
        return x;

    }
}
// Utilisation de la fonction calcMinArrow pour calculer le minimum
console.log(calcMinArrow(4.5, 5));
console.log(calcMinArrow(19, 9));
console.log(calcMinArrow(1, 1));

// Version encore plus concise avec une arrow function
console.log("Version encore plus concise avec une arrow function");

const calcMinConcise = (x, y) => (x < y) ? x : y;

// Utilisation de la fonction calcMinConcise pour calculer le minimum
console.log(calcMinConcise(4.5, 5));
console.log(calcMinConcise(19, 9));
console.log(calcMinConcise(1, 1));
