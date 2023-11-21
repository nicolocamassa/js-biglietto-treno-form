let button = document.getElementById('submitBtn');
let buttonBack = document.getElementById('backBtn');

button.addEventListener('click', function () {
    /* Dati in input */
    let age = document.getElementById('age').value;
    let km = document.getElementById('distance').value;


    /* Inizializzazione dello sconto e del prezzo standard per km */
    let discount;
    const priceKm = 0.21;

    /* Seleziona lo sconto basandosi sull'età */
    if (age < 18) {
        discount = 20;
    } else if (age > 65) {
        discount = 40;
    } else {
        discount = 0
    }

    /* Calcolo del prezzo finale */
    let discountCalc = ((km * priceKm) * discount) / 100;
    let totalDiscount = (km * priceKm) - discountCalc;

    /* Output */
    document.getElementById('price').innerHTML = totalDiscount.toFixed(2) + "&euro;";
    document.getElementById('distance_view').innerHTML = km + "km";
    document.getElementById('discount').innerHTML = discount + "&percnt;";
    document.getElementById('age_view').innerHTML = age + " Anni";

    /* Cambio tra le finestre */
    document.getElementById("ticketSectionForm").style.display = 'none';
    document.getElementById("ticketSectionData").style.display = 'flex';
})

/* Pulsante per riprenotare */
buttonBack.addEventListener('click', function () {
    /* Cambio tra le finestre */
    document.getElementById("ticketSectionData").style.display = 'none';
    document.getElementById("ticketSectionForm").style.display = 'flex';
})






