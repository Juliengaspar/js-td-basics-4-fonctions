/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(year) {
    let isBissextile = false;
    //si elle est divisible par 4
    if (year%4 === 0) {
        if (year % 100 !== 0) {
            isBissextile = true;
            if (year % 400 === 0) {
                isBissextile = false;

            }else{
                isBissextile = true;

            }
        }
        //tester si elle est pas un multiples dec 4
    }else {
        isBissextile = false
    }
    if (isBissextile === true) {
        console.log(`${year} est une années bisextile`);
    }else {
        console.log(`${year} n'est  pas une années bisextile`);

    }
    return isBissextile;


}

// Fonction pour vérifier si une date est valide
function dateValid(day, month, year) {
    isBissextile(year);
    let isValide = true;
    if((day<1)|| (day>31)) {
        isValide = !isValide;
    }
    if((month<1)|| (month>12)) {
        isValide = !isValide;
    }

    if (month%2 === 0) {

        if((day<=1)|| (day=>30)) {
            isValide = false;
        }
    }else {
        if((day<=1)|| (day=>31)) {
            isValide = false;
        }
    }

    if(month===2) {
        if(isBissextile === true) {
            if(day<=29) {
                isValide = true;
            }else {
                isValide = false;
            }
        }else {
            if(day<=28) {
                isValide = true;
            }else {
                isValide = false;
            }
        }
    }


    if(isValide === false){
        console.log("date invalide")
    }else {
        console.log(`date valide ${day} : ${month} : ${year}`)
    }
    return isValide;
}

// Demander à l'utilisateur de saisir une date
const userDays = parseInt(prompt("entrey un le numero d'un jour entre [1-31]"));
const userMonth = parseInt(prompt("entrey un le numero d'un mois entre [1-12]"));
const userYear = parseInt(prompt("entrey un le numero d'une year entre "));

// Utilisation de la fonction isValid pour vérifier la date
console.log(dateValid(userDays,userMonth,userYear));
dateValid(userDays,userMonth,userYear);

