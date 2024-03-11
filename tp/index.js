import { add, table, voyellesDelet, alpha, number, decroissant, voyellesNumber, voyellesUppercase, tableInConsole, addFruts, moyenneNotes, paysAlphabetiques, mois, minAndMax } from "./src/utils/main.js";


console.log("Addition : " + add(2, 2));

console.log("Plus grand nombre du tableau : " + table([1, 5, 9, 3]));

console.log("Supprimer les voyelles : " + voyellesDelet("Bonjour !"));

console.log("Tableau par ordre alphabetique : " + alpha(["julien", "Emillie", "Adrien"]));

console.log("Nombre ecris : " + number(6));

console.log("Trier tableau decroissant : " + decroissant([2, 5, 8, 3, 5, 6, 50]));

console.log("Nombre de voyelles dans la phrase : " + voyellesNumber("Bonjour, Comment allez vous ajourd'hui ?"));

console.log("Voyeles en majuscule : " + voyellesUppercase('bonjour, Comment allez vous ?'));



tableInConsole([2, 4, 6, 9, 3, 5]);

console.log(addFruts(["Orange", "Poire", "Mandarine"], "Pomme"));

console.log("Moyenne général : " + moyenneNotes());

console.log("Pays dans l'ordre alphabetique : " + paysAlphabetiques());

console.log(mois(3));

minAndMax()