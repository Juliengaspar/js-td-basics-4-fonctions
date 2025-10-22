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
const userDays = parseInt(prompt("Entrez le jour"));
const userMonth = parseInt(prompt("Entrez le mois"));
const userYear = parseInt(prompt("Entrez une année: "));


// Fonction pour vérifier si une année est bissextile
function isLeap(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) )
}

// Fonction pour vérifier si une date est valide
function isDateValid(day, month, year) {
    let maxDays = 31;
if (year <1 || month < 1 || day < 1) {
    console.log(`L’années , le mois , le jour doivent êtres positif : année ->${userYear} moins ->${userMonth} -> jours ->${userDays}`)
    return false
}
if (month >12 ) {
    console.log('Le mois doit etres plus petit que 12')
    return false
}
if (month ===4 || month ===6 || month ===9 || month ===11) {
    maxDays = 30;
}
if (month === 2) {
    if (isLeap(year)) {
        maxDays = 29;
    } else {
        maxDays = 28;
    }
}
    if (day>maxDays) {
        console.log(`le nombres de jours dans le mois dois etres inferior ou egale à ${maxDays} jours.`);
        return false;
    }
return true;
}

// Demander à l'utilisateur de saisir une date

// Utilisation de la fonction isValid pour vérifier la date
if (isDateValid(userDays,userMonth,userYear )) {
    console.log(`super c‘est une bonne ${userYear}, ${userMonth}, ${userDays} date`)
}else {
    console.log(`date invalid ${userYear}, ${userMonth}, ${userDays}`)

}