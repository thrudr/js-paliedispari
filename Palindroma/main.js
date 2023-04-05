/*Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.
*/

// -------------------PALINDROMA ---------------------------

let userWord = prompt("Inserisca una parola:");

userWord = userWord.toLowerCase();

let risultato = palindromeWord(userWord);

if (risultato){
    console.log(userWord + " - La parola scelta è palindroma");
} else {
    console.log(userWord + " - La parola scelta non è palindroma");
}





// -------------- FUNZIONI ----------------------

function palindromeWord(word){

    for (let i = 0; i<word.length; i++){

        if (word[i] != word[word.length - 1 -i]){
            
            return false;
        }
    }

    return true;

}