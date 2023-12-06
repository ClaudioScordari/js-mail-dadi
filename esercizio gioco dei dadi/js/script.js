/*

    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

// Seleziono gli elementi html + il bottone
let myNum = document.getElementById('my-num');

let pcNum = document.getElementById('pc-num');

const result = document.querySelector('.result');

const myButton = document.querySelector('button');

// Adesso creo la funzione del bottone per generare i numeri
myButton.addEventListener('click', function () {

    // All'interno degli elementi html inserisco la funzione dei numeri randomici
    myNum.innerHTML = (Math.floor(Math.random() * 6) + 1);

    pcNum.innerHTML = (Math.floor(Math.random() * 6) + 1);

    // Creo la condizione di vittoria

    /*
        Se il mio numero è maggiore rispetto a quello del pc
        - Segna vittoria
        Se il mio numero è minore rispetto a quello del pc
        - Segna sconfitta
        Altrimenti
        - Segna pareggio
    */

    if (myNum.innerHTML > pcNum.innerHTML) {
        result.innerHTML = 'Hai vinto';
        result.classList = '';
        result.classList.add('text-success');
    }
    else if (myNum.innerHTML < pcNum.innerHTML) {
        result.innerHTML = 'Hai perso';
        result.classList = '';
        result.classList.add('text-danger');
    }
    else {
        result.innerHTML = 'Pareggio';
        result.classList = '';
        result.classList.add('text-warning');
    }
});