// Eserizio 1

let risposta = true;


while(risposta){
    let bevandaUtente = prompt('Selezionare il numero corrispondente alla bevanda desiderata');

    if(bevandaUtente == 1){
        console.log('E’ stata selezionata l’acqua');
        risposta = false;
    }
    else if(bevandaUtente == 2){
        console.log('È stata selezionata Coca-Cola');
        risposta = false;
    }
    else if(bevandaUtente == 3){
        console.log('È stata selezionata birra');
        risposta = false;
    }
};

// Esercizio 2

let giocatoreUno = 0;
let giocatoreDue = 0;
let n = 10;
let vincitore;


for(let i = 0; i < n; i++ ){
    giocatoreUno += Math.floor(Math.random() * (6 - 1 + 1) + 1);
    giocatoreDue += Math.floor(Math.random() * (6 - 1 + 1) + 1);
}
if(giocatoreUno > giocatoreDue){
    vincitore = 'giocatore uno';

}
 else if(giocatoreDue > giocatoreUno){
    vincitore = 'giocatore due';
}
console.log(`giocatore uno ha fatto: ${giocatoreUno}, mentre giocatore due ha fatto ${giocatoreDue}. Il vincitore è: ${vincitore}` );


// Esercizio 3

function fizzBuzz(n){
    for(let i = 1; i <= n; i++){
        if( i % 15 == 0){
            console.log('fizzBuzz');
        }
        else if( i % 5 == 0){
            console.log('Buzz');
        }
        else if(i % 3 == 0){
            console.log('Fizz');
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz(30);
