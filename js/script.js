// chiedo all'utente la distanza che deve percorrere
let distance = parseFloat(prompt('Quanti chilometri dovrai percorrere?'));

// chiedo all'utente quanti anni ha
let age = parseInt(prompt('Quanti anni ha il passeggero?'));

// inizializzo il prezzo al kilometro
const prezzoKm = 0.21;

// calcolo il prezzo finale
let prezzoFinale = distance * prezzoKm;

// verifico la possibilità di sconto e nel caso l'applico
if (age < 18) {
  prezzoFinale = prezzoFinale * 0.8;
}
else if (age >= 65) {
  10
  prezzoFinale = prezzoFinale * 0.6;
}

// calcolo il prezzo con sole 2 cifre decimali
let prezzoUmano = Math.round(prezzoFinale * 100) / 100;

console.log('Prezzo finale biglietto: €' + prezzoUmano);

document.getElementById('price').setAttribute("class", "");
document.getElementById('price').innerHTML = 'Prezzo finale biglietto: €' + prezzoUmano;