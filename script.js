// Rizz counter startup
let counter = 0;
let rizz = document.getElementById("rizz")
rizz.innerText = "Your Rizz: 0"

// The actual clicker
function increaseRizz() {
    counter = counter + 1
    rizz.innerText = "Your Rizz: " + rizz
}

function gameLoop() {
    //Wire Counter is used to increase click power.//
    counter = counter + (20 * ramCounter) + (10 * gpuCounter) + (600 * hdCounter)
    rizz.innerText = "Money: $" + counter
}

// Upgrades setup
let rizzBoostAmount = 0;
let rizzBoost = document.getElementById('rizzBoostAmt')
let rizzBoostCost = document.getElementById("rizzBoostCost")
rizzBoost.innerText = "Amount Owned: 0";

let autoRizzerAmount = 0;
let autoRizzer = document.getElementById('autoRizzerAmt')
let autoRizzerCost = document.getElementById("autoRizzerCost")
autoRizzer.innerText = "Amount Owned: 0";

let watermelonCatAmount = 0;
let watermelonCat = document.getElementById('watermelonCatAmt')
let watermelonCatCost = document.getElementById("watermelonCatCost")
watermelonCat.innerText = "Amount Owned: 0";

let enhancedInstagramAmount = 0;
let enhancedInstagram = document.getElementById('enhancedInstagramAmt')
let enhancedInstagramCost = document.getElementById("enhancedInstagramCost")
enhancedInstagram.innerText = "Amount Owned: 0";

let saulGoodmanAmount = 0;
let saulGoodman = document.getElementById('saulGoodmanAmt')
let saulGoodmanCost = document.getElementById("saulGoodmanCost")
saulGoodman.innerText = "Amount Owned: 0";

let babyGronkAmount = 0;
let babyGronk = document.getElementById('babyGronkAmt')
let babyGronkCost = document.getElementById("babyGronkCost")
babyGronk.innerText = "Amount Owned: 0";

let bugattiChironAmount = 0;
let bugattiChiron = document.getElementById('bugattiChironAmt')
let bugattiChironCost = document.getElementById("bugattiChironCost")
bugattiChiron.innerText = "Amount Owned: 0";

let airbusA380Amount = 0;
let airbusA380 = document.getElementById('airbusA380Amt')
let airbusA380Cost = document.getElementById("airbusA380Cost")
airbusA380.innerText = "Amount Owned: 0";


setInterval(gameLoop, 1000)
setInterval(checkPrice, 10);

// Purchasing upgrades
function buyRAM() {
    let ramPrice = 700 + ramCounter ** 3
    ramCost.innerText = "Cost: $" + ramPrice.toFixed(0)
    if (counter >= ramPrice.toFixed(0)) {
        counter = counter - ramPrice.toFixed(0)
        rizzCounter.innerText = "Money: $" + counter
        ramCounter = ramCounter + 1
        ram.innerText = "Amount Owned: " + ramCounter
        ramPrice = 700 + ramCounter ** 3
        ramCost.innerText = "Cost: $" + ramPrice.toFixed(0)
    }
    else {
        let moneyRAMLeft = ramPrice.toFixed(0) - counter
        alert(`Not enough rizz! You are very beta and broke. Achieve ${totalPrice} rizz to buy this upgrade so KEEP THE RIZZ UP AND STRIVE TO BECOME A SIGMA`);
    }
}
function buyItem(upgrade) {
    let quantity = buyMultiplier;
    let totalPrice = upgrades[upgrade].price * quantity;
    if (rizzCounter >= totalPrice) {
        rizzCounter -= totalPrice;
        rizzCounterSpan.textContent = rizzCounter;
        upgrades[upgrade].count += quantity;

        document.getElementById(upgrades[upgrade].countSpan).innerText = `Bought: ${upgrades[upgrade].count}`;

    } else {
        alert
    }
}

// Initialize the default multiplier button as active and update prices
updateMultiplierButtons();
updatePrices();