/* Dati in input */
let km = prompt('Quanti km');
let age = prompt('Quanti anni');

/* Inizializzazione dello sconto e del prezzo standard per km */
let discount;
const priceKm = 0.21;

/* Seleziona lo sconto basandosi sull'età */
if(age < 18){
    discount = 20;
}else if(age > 65){
    discount = 40;
}else{
    discount = 0
}

/* Calcolo del prezzo finale */
let discountCalc = ((km * priceKm) * discount) / 100;
let totalDiscount =  (km * priceKm) - discountCalc;

/* Output */
console.log(totalDiscount.toFixed(2));