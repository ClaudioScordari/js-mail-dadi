/*

    Mail

    Chiedi all'utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull'esito del controllo.

    ----------------------------------------------------

    1. Devo chiedere all'utente la sua email, con un un INPUT per esempio
        - Creare un input in html;
        - Selezionarlo in js;
        - Creare anche un button per stampare l'email
        -- al click del bottone devo stampare l'email sulla console

    2. Devo creare un arrey: all'interno devo scrivere una serie di email (stringhe)

    - Prima devo confrontare la mail dell'utente con ogni mail presente nell'arrey...
    -- usando un for?

    3. Devo controllare SE l'email dell'utente può accedere

    4. Stampare l'esito del controllo

*/

// Seleziono l'input dell'utente
const mailUtente = document.getElementById('mail');

// Seleziono il bottone
const myButton = document.querySelector('button');

// Creo un arrey con una serie di email
const listMail = [
    'marco-pio@gmail.com',
    'giovanni-ingrosso@gmail.com',
    'tiziano-rino@gmail.com',
    'laura-crudeli@gmail.com',
    'cinzia-gazza@gmail.com'
]
console.log(listMail);

// Devo creare la funzione del click
myButton.addEventListener('click', function () {

    // Si crea una variabile di default che mi dice che non posso accedere
    let feedback = 'Non puoi accedere';

    // Uso il ciclo for per confrontare se l'email dell'utente coincide con gli index
    for (let index = 0; index < listMail.length; index++) {
        if (mailUtente.value == listMail[index]) {
            feedback = 'Puoi accedere';
        }
    }

    alert(feedback);
});





