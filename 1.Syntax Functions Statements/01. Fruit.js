
function fruit(fr, grams, priceKG) {

    let weight = grams/1000;
    let money = weight * priceKG;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fr}.`);
}

fruit('orange', 2500, 1.80);