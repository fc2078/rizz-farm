// Rizz counter setup
let rizz = 0;
let buyMultiplier = 1;
let rizzSpan = document.getElementById('rizz-counter');

function increaseRizz() {
    rizz = rizz + 1
    rizzTracker.innerText = rizz.toFixed(2) + 'Rizz'
}

// Upgrades initialization
let rizzBoostAmount = 0;
let rizzBoost = document.getElementById('rizzBoostAmt')
rizzBoost.innerText = "Amount Owned: 0";
let autoRizzerAmount = 0;
let autoRizzer = document.getElementById('autoRizzerAmt')
autoRizzer.innerText = "Amount Owned: 0";
let watermelonCatAmount = 0;
let watermelonCat = document.getElementById('watermelonCatAmt')
watermelonCat.innerText = "Amount Owned: 0";
let enhancedInstagramAmount = 0;
let enhancedInstagram = document.getElementById('enhancedInstagramAmt')
enhancedInstagram.innerText = "Amount Owned: 0";
let saulGoodmanAmount = 0;
let saulGoodman = document.getElementById('saulGoodmanAmt')
saulGoodman.innerText = "Amount Owned: 0";
let babyGronkAmount = 0;
let babyGronk = document.getElementById('babyGronkAmt')
babyGronk.innerText = "Amount Owned: 0";
let bugattiChironAmount = 0;
let bugattiChiron = document.getElementById('bugattiChironAmt')
bugattiChiron.innerText = "Amount Owned: 0";
let airbusA380Amount = 0;
let airbusA380 = document.getElementById('airbusA380Amt')
airbusA380.innerText = "Amount Owned: 0";

document.getElementById('clickButton').addEventListener('click', () => {
    rizz++;
    rizz.textContent = rizz;
    // Adding scaling effect
    document.getElementById('clicker').style.transform = 'scale(0.7)';
    setTimeout(() => {
        document.getElementById('clicker').style.transform = 'scale(1)';
    }, 100); // Adjust the time for the scaling animation
});

// Code for upgrades
let upgrades = {
    rizzBoost: { price: 20, count: 0, priceSpan: 'rizzBoost-price', countSpan: 'rizzBoost-count', rate: 5 },
    autorizzer: { price: 100, count: 0, priceSpan: 'autorizzer-price', countSpan: 'autorizzer-count', rate: 1 },
    watermelonCat: { price: 1000, count: 0, priceSpan: 'watermelonCat-price', countSpan: 'watermelonCat-count', rate: 200 },
    enhancedInstagram: { price: 5000, count: 0, priceSpan: 'enhancedInstagram-price', countSpan: 'enhancedInstagram-count', rate: 200 },
    saulGoodman: { price: 15000, count: 0, priceSpan: 'saulGoodman-price', countSpan: 'saulGoodman-count', rate: 8880 },
    babyGronk: { price: 20000, count: 0, priceSpan: 'babyGronk-price', countSpan: 'babyGronk-count', rate: 3291 },
    bugattiChiron: { price: 100000, count: 0, priceSpan: 'bugattiChiron-price', countSpan: 'bugattiChiron-count', rate: 150000 },
    airbusA380: { price: 250000, count: 0, priceSpan: 'airbusA380-price', countSpan: 'airbusA380-count', rate: 500000 },
};

function setMultiplier(multiplier) {
    buyMultiplier = multiplier;
    updateMultiplierButtons();
    updatePrices();
}

function updateMultiplierButtons() {
    const buttons = document.querySelectorAll('.buy-multiples button');
    buttons.forEach(button => {
        if (parseInt(button.innerText.replace('x', '')) === buyMultiplier) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function a() {

}

function updatePrices() {
    for (const upgrade in upgrades) {
        const priceSpan = document.getElementById(upgrades[upgrade].priceSpan);
        priceSpan.textContent = `Price: ${upgrades[upgrade].price * buyMultiplier}`;
    }
}

// Rizz gen from upgrades
setInterval(() => {
    let rizzPerSecond = 0;
    for (const upgrade in upgrades) {
        rizzPerSecond += upgrades[upgrade].count * upgrades[upgrade].rate;
    }
    rizz += rizzPerSecond;
    rizzSpan.textContent = rizz;
}, 1000);

// Buying upgrades
function buyItem(upgrade) {
    let quantity = buyMultiplier;
    let cost = upgrades[upgrade].price * quantity;
    if (rizz >= cost) {
        rizz -= cost;
        rizzSpan.textContent = rizz;
        upgrades[upgrade].count += quantity;

        document.getElementById(upgrades[upgrade].countSpan).innerText = `Bought: ${upgrades[upgrade].count}`;
        
    } else {
        alert(`Not enough rizz! You are very beta and broke. Achieve ${cost} rizz to buy the ${upgrade} upgrade so KEEP THE RIZZ UP AND STRIVE TO BECOME A SIGMA`);
    }
}

function buyRizzBoost(){
    let quantity = buyMultiplier;
    if (rizz >= cost) {
        rizz -= cost;
        rizzSpan.textContent = rizz;
        upgrades[upgrade].count += quantity;

        document.getElementById(upgrades[upgrade].countSpan).innerText = `Bought: ${upgrades[upgrade].count}`;
        
    }
    // 
    let cost = 20 + rizzBoost ** 1.5
    if (_rizz => cost) {
        rizz = rizz - cost
        rizzTracker.innerText = rizz.toFixed(2) + 'Rizz'
        rizzBoost = rizzBoost + 1
        rizzBoostAmount.innerText = 20 + rizzBoost ** 1.5
    } else { 
        alert(`Not enough rizz! You are very beta and broke. Achieve ${cost} rizz to buy a Rizz Boost so KEEP THE RIZZ UP AND STRIVE TO BECOME A SIGMA`);
    }
}

function buyAutoRizzer(){

}

function buyWatermelonCat(){

}

function buyEnhancedInstagram(){

}

function buySaulGoodman(){

}

function buyBabyGronk(){

}

function buyBugattiChiron(){

}

function buyAirbusA380(){

}

// Initialize the default multiplier button as active and update prices
updateMultiplierButtons();
updatePrices();