/*
FONCTIONS - PRÉPA 1 : Le carré d'un nombre
1. a) Déclarez la fonction carre1() avec la syntaxe normale
      pour qu'elle calcule et renvoie le carré du nombre passé en paramètre
   b) Utilisez ensuite cette fonction pour afficher dans la console
	  - le carré de 0
	  - le carré de 2
	  - le carré de 5
2. a) Déclarez la fonction carre2() avec la syntaxe d'une arrow fonction (ES6)
      pour qu'elle calcule et renvoie le carré du nombre passé en paramètre
   b) Utilisez ensuite cette fonction pour afficher dans la console
	  - le carré de 0
	  - le carré de 2
	  - le carré de 5
*/

// Déclarer carre1 pour qu'elle retourne le carré de x
console.log("fonction normal calcule le carré d'un nombre");
function carre1(x) {

    return `le carré de ${x} = ${x*x}`
}

// Calculer le carré de 0, 2 et 5 en utilisant carre1
console.log(carre1(0));
console.log(carre1(2));
console.log(carre1(5));


// Déclarer carre2 (en utilisant une fonction fléchée) pour qu'elle retourne le carré de x
console.log("arrows fonction calcule le carré d'un nombre");

const carre2 = (x) => {
   return `le carré de ${x} = ${x*x}`
}


// Calculer le carré de 0, 2 et 5 en utilisant carre2
console.log(carre2(0));
console.log(carre2(2));
console.log(carre2(5));

console.log("arrows fonction sur une seul ligne  calcule le carré d'un nombre");
const carre3 = x => `le carré de ${x} = ${x*x}`;

console.log(carre3(0));
console.log(carre3(2));
console.log(carre3(5));