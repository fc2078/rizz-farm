// Counter setup
let counter = 0
let rizz = document.getElementById("rizz")
rizz.innerText = "Your Rizz: 0"

// Clicker function
function addRizz() {
    counter = counter + 1 + (1.5 * rizzBoostCounter)
    rizz.innerText = "Your Rizz: " + counter
}
// 
// Statistics setup
let autoRizz = 0
let autoRizzRate = document.getElementById("autoRizzRate")

// Clock for how long the user has played
document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    let startTime = Date.now();

    function updateClock() {
        let elapsedTime = Date.now() - startTime;
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

        clockElement.textContent =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display 00:00:00 immediately
});
// 
// Upgrades setup
let rizzBoostCounter = 0
let rizzBoost = document.getElementById("rizzBoostOwned")
let rizzBoostCost = document.getElementById("rizzBoostCost")
rizzBoost.innerText = "Amount Owned: 0"

let autorizzerCounter = 0;
let autorizzer = document.getElementById('autorizzerOwned')
let autorizzerCost = document.getElementById("autorizzerCost")
autorizzer.innerText = "Amount Owned: 0";

let watermelonCatCounter = 0;
let watermelonCat = document.getElementById('watermelonCatOwned')
let watermelonCatCost = document.getElementById("watermelonCatCost")
watermelonCat.innerText = "Amount Owned: 0";

let enhancedInstagramCounter = 0;
let enhancedInstagram = document.getElementById('enhancedInstagramOwned')
let enhancedInstagramCost = document.getElementById("enhancedInstagramCost")
enhancedInstagram.innerText = "Amount Owned: 0";

let saulGoodmanCounter = 0;
let saulGoodman = document.getElementById('saulGoodmanOwned')
let saulGoodmanCost = document.getElementById("saulGoodmanCost")
saulGoodman.innerText = "Amount Owned: 0";

let babyGronkCounter = 0;
let babyGronk = document.getElementById('babyGronkOwned')
let babyGronkCost = document.getElementById("babyGronkCost")
babyGronk.innerText = "Amount Owned: 0";

let bugattiChironCounter = 0;
let bugattiChiron = document.getElementById('bugattiChironOwned')
let bugattiChironCost = document.getElementById("bugattiChironCost")
bugattiChiron.innerText = "Amount Owned: 0";

let airbusA380Counter = 0;
let airbusA380 = document.getElementById('airbusA380Owned')
let airbusA380Cost = document.getElementById("airbusA380Cost")
airbusA380.innerText = "Amount Owned: 0";
// 

// Purchasing upgrades
function buyAirbusA380() {
    let airbusA380Price = 2000 + airbusA380Counter ** 1.5
    airbusA380Cost.innerText = "Cost: " + airbusA380Price.toFixed(0) + " Rizz"
    if (counter >= airbusA380Price.toFixed(0)) {
        counter = counter - airbusA380Price.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter
        airbusA380Counter = airbusA380Counter + 1
        airbusA380.innerText = "Amount Owned: " + airbusA380Counter
        airbusA380Price = 2000 + airbusA380Counter ** 1.5
        airbusA380Cost.innerText = "Cost: " + airbusA380Price.toFixed(0) + " Rizz"
    }
    else {
        let airbusA380Left = airbusA380Price.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + airbusA380Left + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
    }
    updateButtons()
}

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
        let rizzBoostLeft = rizzBoostPrice.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + rizzBoostLeft + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
    }
    updateButtons()
}

function buyAutorizzer() {
    let autorizzerPrice = 50 + autorizzerCounter ** 1.5
    autorizzerCost.innerText = "Cost: " + autorizzerPrice.toFixed(0) + " Rizz"
    if (counter >= autorizzerPrice.toFixed(0)) {
        counter = counter - autorizzerPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter
        autorizzerCounter = autorizzerCounter + 1
        autorizzer.innerText = "Amount Owned: " + autorizzerCounter
        autorizzerPrice = 50 + autorizzerCounter ** 1.5
        autorizzerCost.innerText = "Cost: " + autorizzerPrice.toFixed(0) + " Rizz"
    }
    else {
        let autorizzerLeft = autorizzerPrice.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + autorizzerLeft + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
    }
    updateButtons()
}

function buyWatermelonCat() {
    let watermelonCatPrice = 120 + watermelonCatCounter ** 1.5
    watermelonCatCost.innerText = "Cost: " + watermelonCatPrice.toFixed(0) + " Rizz"
    if (counter >= watermelonCatPrice.toFixed(0)) {
        counter = counter - watermelonCatPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter
        watermelonCatCounter = watermelonCatCounter + 1
        watermelonCat.innerText = "Amount Owned: " + watermelonCatCounter
        watermelonCatPrice = 50 + watermelonCatCounter ** 1.5
        watermelonCatCost.innerText = "Cost: " + watermelonCatPrice.toFixed(0) + " Rizz"
    }
    else {
        let watermelonCatLeft = watermelonCatPrice.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + watermelonCatLeft + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
    }
    updateButtons()
}

function buyEnhancedInstagram() {
    let enhancedInstagramPrice = 250 + enhancedInstagramCounter ** 1.5
    enhancedInstagramCost.innerText = "Cost: " + enhancedInstagramPrice.toFixed(0) + " Rizz"
    if (counter >= enhancedInstagramPrice.toFixed(0)) {
        counter = counter - enhancedInstagramPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter
        enhancedInstagramCounter = enhancedInstagramCounter + 1
        enhancedInstagram.innerText = "Amount Owned: " + enhancedInstagramCounter
        enhancedInstagramPrice = 250 + enhancedInstagramCounter ** 1.5
        enhancedInstagramCost.innerText = "Cost: " + enhancedInstagramPrice.toFixed(0) + " Rizz"
    }
    else {
        let enhancedInstagramLeft = enhancedInstagramPrice.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + enhancedInstagramLeft + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
    }
    updateButtons()
}

function buySaulGoodman() {
    let saulGoodmanPrice = 400 + saulGoodmanCounter ** 1.5
    saulGoodmanCost.innerText = "Cost: " + saulGoodmanPrice.toFixed(0) + " Rizz"
    if (counter >= saulGoodmanPrice.toFixed(0)) {
        counter = counter - saulGoodmanPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter
        saulGoodmanCounter = saulGoodmanCounter + 1
        saulGoodman.innerText = "Amount Owned: " + saulGoodmanCounter
        saulGoodmanPrice = 400 + saulGoodmanCounter ** 1.5
        saulGoodmanCost.innerText = "Cost: " + saulGoodmanPrice.toFixed(0) + " Rizz"
    }
    else {
        let saulGoodmanLeft = saulGoodmanPrice.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + saulGoodmanLeft + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
    }
    updateButtons()
}

function buyBabyGronk() {
    let babyGronkPrice = 650 + babyGronkCounter ** 1.5
    babyGronkCost.innerText = "Cost: " + babyGronkPrice.toFixed(0) + " Rizz"
    if (counter >= babyGronkPrice.toFixed(0)) {
        counter = counter - babyGronkPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter
        babyGronkCounter = babyGronkCounter + 1
        babyGronk.innerText = "Amount Owned: " + babyGronkCounter
        babyGronkPrice = 650 + babyGronkCounter ** 1.5
        babyGronkCost.innerText = "Cost: " + babyGronkPrice.toFixed(0) + " Rizz"
    }
    else {
        let babyGronkLeft = babyGronkPrice.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + babyGronkLeft + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
    }
    updateButtons()
}

function buyBugattiChiron() {
    let bugattiChironPrice = 1000 + bugattiChironCounter ** 1.5
    bugattiChironCost.innerText = "Cost: " + bugattiChironPrice.toFixed(0) + " Rizz"
    if (counter >= bugattiChironPrice.toFixed(0)) {
        counter = counter - bugattiChironPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter
        bugattiChironCounter = bugattiChironCounter + 1
        bugattiChiron.innerText = "Amount Owned: " + bugattiChironCounter
        bugattiChironPrice = 1000 + bugattiChironCounter ** 1.5
        bugattiChironCost.innerText = "Cost: " + bugattiChironPrice.toFixed(0) + " Rizz"
    }
    else {
        let bugattiChironLeft = bugattiChironPrice.toFixed(0) - counter
        alert("Not enough rizz! You are very beta and broke. You need " + bugattiChironLeft + " more rizz to buy this upgrade SO STRIVE TO BECOME A SIGMA AND KEEP RIZZIN'!")
    }
    updateButtons()
}


// 

// Update buttons based on prices
function updateButtons() {
    document.getElementById("rizzBoost").disabled = points < rizzboostPrice
    document.getElementById("autorizzer").disabled = points < autorizzerPrice
    document.getElementById("watermelonCat").disabled = points < watermelonCatPrice
    document.getElementById("enhancedInstagram").disabled = points < enhancedInstagramPrice
    document.getElementById("saulGoodman").disabled = points < saulGoodmanPrice
    document.getElementById("babyGronk").disabled = points < babyGronkPrice
    document.getElementById("bugattiChiron").disabled = points < bugattiChironPrice
    document.getElementById("airbusA380").disabled = points < airbusA380Price
}

// Loop the game and apply the upgrades
function gameLoop() {
    counter = counter + (5 * rizzBoostCounter) + (10 * autorizzerCounter) + (20 * watermelonCatCounter) + (35 * enhancedInstagramCounter) + (50 * saulGoodmanCounter) + (100 * babyGronkCounter) + (200 * bugattiChironCounter) + (500 * airbusA380Counter)
    rizz.innerText = "Your Rizz: " + counter
    autoRizz = (10 * autorizzerCounter)
    autoRizzRate.innerText = autoRizz
}
// 