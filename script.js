// Counter setup
let counter = 0
let rizz = document.getElementById("rizz")
rizz.innerText = "Your Rizz: 0"

let rizzBoostCounter = 0
let rizzBoost = document.getElementById("rizzBoostOwned")
let rizzBoostCost = document.getElementById("rizzBoostCost")
rizzBoost.innerText = "Amount Owned: 0"

// Clicker function
function addRizz() {
    counter = counter + 1 + rizzBoostCounter
    rizz.innerText = "Your Rizz: " + counter
}

// Upgrades setup
let autorizzerCounter = 0;
let autorizzer = document.getElementById('autorizzerAmt')
let autorizzerCost = document.getElementById("autorizzerCost")
autorizzer.innerText = "Amount Owned: 0";

let watermelonCatCounter = 0;
let watermelonCat = document.getElementById('watermelonCatAmt')
let watermelonCatCost = document.getElementById("watermelonCatCost")
watermelonCat.innerText = "Amount Owned: 0";

let enhancedInstagramCounter = 0;
let enhancedInstagram = document.getElementById('enhancedInstagramAmt')
let enhancedInstagramCost = document.getElementById("enhancedInstagramCost")
enhancedInstagram.innerText = "Amount Owned: 0";

let saulGoodmanCounter = 0;
let saulGoodman = document.getElementById('saulGoodmanAmt')
let saulGoodmanCost = document.getElementById("saulGoodmanCost")
saulGoodman.innerText = "Amount Owned: 0";

let babyGronkCounter = 0;
let babyGronk = document.getElementById('babyGronkAmt')
let babyGronkCost = document.getElementById("babyGronkCost")
babyGronk.innerText = "Amount Owned: 0";

let bugattiChironCounter = 0;
let bugattiChiron = document.getElementById('bugattiChironAmt')
let bugattiChironCost = document.getElementById("bugattiChironCost")
bugattiChiron.innerText = "Amount Owned: 0";

let airbusA380Counter = 0;
let airbusA380 = document.getElementById('airbusA380Amt')
let airbusA380Cost = document.getElementById("airbusA380Cost")
airbusA380.innerText = "Amount Owned: 0";

// Purchasing upgrades
function buyRizzBoost() {
    let rizzBoostPrice = 20 + rizzBoostCounter ** 1.5
    rizzBoostCost.innerText = "Cost: " + rizzBoostPrice.toFixed(0) + " Rizz"
    if (counter >= rizzBoostPrice.toFixed(0)) {
        counter = counter - rizzBoostPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter
        rizzBoostCounter = rizzBoostCounter + 1
        rizzBoost.innerText = "Amount Owned: " + rizzBoostCounter
        rizzBoostPrice = 20 + rizzBoostCounter ** 1.5
        rizzBoostCost.innerText = "Cost: " + rizzBoostPrice.toFixed(0) + " Rizz"
    }
    else {
        document.getElementById("rizzBoost").disabled = true;
        let rizzRizzBoostLeft = rizzBoostPrice.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + rizzRizzBoostLeft + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
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

// Loop the game and apply the upgrades
function gameLoop() {
    counter = counter + (5 * rizzBoostAmount) + (10 * autorizzerAmount) + (20 * watermelonCatAmount) + (35 * enhancedInstagramAmount) + (50 * saulGoodmanAmount) + (100 * babyGronkAmount) + (200 * bugattiChironAmount) + (500 * airbusA380Amount)
    rizz.innerText = "Your Rizz: " + counter
}

// Intervals
setInterval(gameLoop, 1000)
setInterval(checkPrice, 10);