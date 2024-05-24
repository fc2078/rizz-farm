let rizzCounter = 0;
let buyMultiplier = 1;
const rizzCounterSpan = document.getElementById('rizz-counter');

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
    rizzBoost: { price: 20, count: 0, priceSpan: 'rizzBoost-price', countSpan: 'rizzBoost-count' },
    autorizzer: { price: 100, count: 0, priceSpan: 'autorizzer-price', countSpan: 'autorizzer-count' },
    watermelonCat: { price: 1000, count: 0, priceSpan: 'watermelonCat-price', countSpan: 'watermelonCat-count' },
    saulGoodman: { price: 15000, count: 0, priceSpan: 'saulGoodman-price', countSpan: 'saulGoodman-count' },
    babyGronk: { price: 20000, count: 0, priceSpan: 'babyGronk-price', countSpan: 'babyGronk-count'},
    bugattiChiron: { price: 4000000, count: 0, priceSpan: 'bugattiChiron-price', countSpan: 'bugattiChiron-count' },
    airbusA380: { price: 7500000, count: 0, priceSpan: 'airbusA380-price', countSpan: 'airbusA380-count' }
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

function buyItem(upgrade) {
    let quantity = buyMultiplier;
    let totalPrice = upgrades[upgrade].price * quantity;
    if (rizzCounter >= totalPrice) {
        rizzCounter -= totalPrice;
        rizzCounterSpan.textContent = rizzCounter;
        upgrades[upgrade].count += quantity;

        document.getElementById(upgrades[upgrade].countSpan).innerText = `Bought: ${upgrades[upgrade].count}`;
    } else {
        alert(`Not enough rizz! You are very beta and broke. Achieve ${totalPrice} rizz to buy ${quantity} of ${upgrade}.`);
    }
}

// Initialize the default multiplier button as active and update prices
updateMultiplierButtons();
updatePrices();