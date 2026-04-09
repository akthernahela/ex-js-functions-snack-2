//Snack 1
//Crea una funzione che somma due numeri.
/*
function somma(number1, number2) {
    return number1 + number2;
}
let risultato = somma(10, 20);
console.log(risultato);
*/
//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
/*
const somma = function (number1, number2) {
    return number1 + number2;
}
console.log(somma(10, 20));
*/
//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile.
/*
let somma = (number1, number2) => number1 + number2;
console.log(somma(10, 20));
*/
//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.


//Snack 2
//Crea una arrow function che calcola il quadrato di un numero.
/*
const quadrato = (number) => number * number;
console.log(quadrato(3));
*/
//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.


//Snack 3
//Crea una funzione eseguiOperazione
/*
const somma = (number1, number2) => number1 + number2;
const sottrazione = (number1, number2) => number1 - number2;
const eseguiOperazione = (number1, number2, operazione) => operazione(number1, number2);
console.log(eseguiOperazione(2, 8, somma));
console.log(eseguiOperazione(10, 8, sottrazione));
*/
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore(callback).La funzione deve eseguire l'operazione fornita sui due numeri.


//Snack 4
//Crea un generatore di funzioni creaTimer
/*
function creaTimer() {
    setTimeout(() => {
        console.log("Tempo scaduto !");
    }, 3000);
}
creaTimer();
*/
//Scrivi una funzione creaTimer che accetta un tempo(in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".


//Snack 5
//Crea una funzione stampaOgniSecondo con setInterval.
/*
function stampaOgniSecondo(messaggio) {
    const print = setInterval(() => {
        console.log(messaggio);
    }, 1000);
    setTimeout(() => {
        clearInterval(print)
    }, 5000);
}
stampaOgniSecondo('Dai che non è la fine del mondo !');
*/
//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.


//Snack 6
//Crea un contatore automatico con setInterval
/*
function creaContatoreAutomatico(intervallo) {
    let contatore = 0;
    return function () {
        setInterval(() => {
            contatore++;
            console.log(contatore);
        }, intervallo);
    };
}
const avvia = creaContatoreAutomatico(1000);
const stop = avvia();
stop();
*/
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


//Snack 7
//Crea una funzione che ferma un timer dopo un certo tempo
//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.