let rizzCounter = 0;
let buyMultiplier = 1;
let rizzCounterSpan = document.getElementById('rizz-counter');

document.getElementById('clickButton').addEventListener('click', () => {
    rizzCounter++;
    rizzCounterSpan.textContent = rizzCounter;
    // Adding scaling effect
    document.getElementById('clicker').style.transform = 'scale(0.7)';
    setTimeout(() => {
        document.getElementById('clicker').style.transform = 'scale(1)';
    }, 100); // Adjust the time for the scaling animation
});

// Code for upgrades
const upgrades = {
    rizzBoost: { price: 20, count: 0, priceSpan: 'rizzBoost-price', countSpan: 'rizzBoost-count', rate: 5 },
    autorizzer: { price: 100, count: 0, priceSpan: 'autorizzer-price', countSpan: 'autorizzer-count', rate: 1 },
    watermelonCat: { price: 1000, count: 0, priceSpan: 'watermelonCat-price', countSpan: 'watermelonCat-count', rate: 200 },
    enhancedInstagram: { price: 5000, count: 0, priceSpan: 'enhancedInstagram-price', countSpan: 'enhancedInstagram-count', rate: 200 },
    saulGoodman: { price: 15000, count: 0, priceSpan: 'saulGoodman-price', countSpan: 'saulGoodman-count', rate: 8880 },
    babyGronk: { price: 20000, count: 0, priceSpan: 'babyGronk-price', countSpan: 'babyGronk-count', rate: 3291 },
    bugattiChiron: { price: 4000000, count: 0, priceSpan: 'bugattiChiron-price', countSpan: 'bugattiChiron-count', rate: 150000 },
    airbusA380: { price: 7500000, count: 0, priceSpan: 'airbusA380-price', countSpan: 'airbusA380-count', rate: 500000 },
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

function increaseRizz() {
    rizz = rizz + 1
    rizzTracker.innerText = rizz.toFixed(2) + 'Rizz'
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
    rizzCounter += rizzPerSecond;
    rizzCounterSpan.textContent = rizzCounter;
}, 1000);


function buyItem(upgrade) {
    let quantity = buyMultiplier;
    let totalPrice = upgrades[upgrade].price * quantity;
    if (rizzCounter >= totalPrice) {
        rizzCounter -= totalPrice;
        rizzCounterSpan.textContent = rizzCounter;
        upgrades[upgrade].count += quantity;

        document.getElementById(upgrades[upgrade].countSpan).innerText = `Bought: ${upgrades[upgrade].count}`;
        
    } else {
        alert(`Not enough rizz! You are very beta and broke. Achieve ${totalPrice} rizz to buy the ${upgrade} upgrade so KEEP THE RIZZ UP AND STRIVE TO BECOME A SIGMA`);
    }
}

// Initialize the default multiplier button as active and update prices
updateMultiplierButtons();
updatePrices();