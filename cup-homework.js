// Function drink water, perameter take ounces
function drinkwater(ounces) {
    var cups = ( ounces*0.125);
    cups + Math.floor(cups);//Math.round()
    console.log(`You drink ${cups} of water in a day`);  
}
var oz = prompt('How many ounces of water do you drink a day?')
drinkwater(oz)

function drinkwater(cups) {
    var ounces = cups / 0.125
    ounces = Math.floor(ounces);
    console.log(`You drink ${ounces} of water in a day`)
}
var cup = prompt(`How many cups of water do you a day`)
drinkwater(cup)