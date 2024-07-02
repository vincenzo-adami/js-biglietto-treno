// chiedo all'utente la distanza che deve percorrere
let distance = parseFloat(prompt('Quanti chilometri dovrai percorrere?'));

// chiedo all'utente quanti anni ha
let age = parseInt(prompt('Quanti anni ha il passeggero?'));

// inizializzo il prezzo al kilometro
const priceKM = 0.21;

// calcolo il prezzo finale
let finalPrice = distance * priceKM;

// verifico la possibilità di sconto e nel caso l'applico
if (age < 18) {
  finalPrice = finalPrice * 0.8;
}
else if (age >= 65) {
  finalPrice = finalPrice * 0.6;
}

// calcolo il prezzo con sole 2 cifre decimali
let humanPrice = Math.round(finalPrice * 100) / 100;

console.log("Prezzo finale (con toFixed())" + finalPrice.toFixed(2));

console.log('Prezzo finale biglietto: €' + humanPrice);

document.getElementById('price').setAttribute("class", "");
document.getElementById('price').innerHTML = 'Prezzo finale biglietto: €' + humanPrice;