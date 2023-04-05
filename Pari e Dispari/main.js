/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// ----------------------- PARI E DISPARI ----------------------------

let userChoise = prompt("Scegli pari o dispari?");
let userNumberString = prompt("Adesso scegli un numero da 1 a 5:");
let userNumber = parseInt(userNumberString);
let computerNumber = random();
let sum = userNumber + computerNumber;

console.log("Hai scelto: " + userChoise);
console.log("Il tuo numero è: " + userNumber);
console.log("Numero computer: " + computerNumber);
console.log("La somma: " + sum);

let sumResult = oddEvenSum(sum);
console.log("La somma è: " + sumResult);


switch (sumResult) {

    case "pari":
        if (userChoise == "pari") {
            console.log("HAI VINTO!");

        } else {
            console.log("Hai perso...");
        }
        break;
    
    case "dispari":
        if (userChoise == "pari") {
            console.log("Hai perso...");

        } else {
            console.log("HAI VINTO!");

        }
    
}



// -------------- FUNZIONI ----------------------

function random (){

    let randomNumber = Math.floor((Math.random() * 5) + 1);
    return randomNumber

}

function oddEvenSum (somma) {

    if (somma % 2 != 0){

        return "dispari";
   
   } else {
   
       return "pari";
   
   };   

}