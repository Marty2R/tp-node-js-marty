// TP 1 :

// Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme :
export const add = (a, b) => {return a + b};

// Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau :
export const table = (array) => {return Math.max(...array)};

// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées :
export const voyellesDelet = (text) => {

    const voyelles = ["a", "e", "i", "o", "u", "y"];

    for (let i = 0; i < text.length; i++) {
        
        for (let e = 0; e < voyelles.length; e++) {
            
            if (text[i] === voyelles[e]) {

                return text.replace(text[i], ' ');

            }
            
        }
        
    }

    return text;
}

// Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique :
export const alpha = (array) => {return array.sort()}

// Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux" :
export const number = (nb) => {

    const text_nb = ["un", "deux", "troix", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];

    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < number.length; i++) {

        if (nb === number[i]) {

            return text_nb[i]

        }

    }

}

// Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet :


// Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant : 
export const decroissant = (array) => {return array.sort((e, a) => e-a).reverse()}

// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules : 
export const voyellesUppercase = (text) => {

    const voyelles = ["a", "e", "i", "o", "u", "y"];

    for (let i = 0; i < text.length; i++) {
        
        for (let e = 0; e < voyelles.length; e++) {
            
            if (text[i] === voyelles[e]) {

                return text.replace(text[i], text[i].toUpperCase());

            }
            
        }
        
    }

    return text;
}

// Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne :
export const voyellesNumber = (text) => {

    const voyelles = ["a", "e", "i", "o", "u", "y"];

    let count = 0

    for (let i = 0; i < text.length; i++) {
        
        for (let e = 0; e < voyelles.length; e++) {
            
            if (text[i] === voyelles[e]) {

                count = count + 1
                
            }
            
        }
        
    }

    return count;
}

// Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules : 


// TP 2 TABLEAUX :

// Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console :
export const tableInConsole = (array) => {

    for (let i = 0; i < array.length; i++) {
        
        console.log(array[i]);
        
    }

}

// Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console :

// Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console :
export const addFruts = (array, new_element) => {array.push(new_element); return array};

// Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console : 
export const moyenneNotes = () => {
    const notes = [12, 19, 14, 17, 20, 3, 18, 20];
    let moyenne = 0;
    for (let i = 0; i < notes.length; i++) {
        
        moyenne += notes[i];
        
    }
    let moyenneGeneral = moyenne / notes.length;
    return moyenneGeneral;
}

// Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console : 
export const paysAlphabetiques = () => {
    const pays = ["France", "Espagne", "Italie", "Suisse"];
    return pays.sort();
}

// Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau.
export const mois = (nb) => {
    const mois = ["", "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    return mois[nb]
}

// Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console : 
export const minAndMax = () => {
    const table = [-7, 4, 8, 6, 9, 1, 0, 7, 99];
    console.log(Math.min(...table)); 
    console.log(Math.max(...table));
}