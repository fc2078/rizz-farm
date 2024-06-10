// Counter setup
let counter = 0
let rizz = document.getElementById("rizz")
rizz.innerText = "Your Rizz: 0"

// Clicker function
function addRizz() {
    counter = counter + 1 + (1.4 * rizzBoostCounter)
    rizz.innerText = "Your Rizz: " + counter.toFixed(0)
    rizzSound.play()
    updateButtons()
}
//

// Audios
// Background music
let backgroundMusic = new Howl({
    src: ['auds/sigma.mp3'],
    autoplay: true,
    volume: .30,
    loop: true,
})
// Pause the music
function pauseMusic() {
    backgroundMusic.pause()
    oofSound.play()
}
// Resume the music
function resumeMusic() {
    backgroundMusic.play()
    fooSound.play()
}

// Sound effects
let rizzSound = new Howl({
    src: ['auds/rizz.mp3'],
    volume: 2, // Volume set higher due to the original file being too quiet
})

let rizzUpgrade = new Howl({
    src: ['auds/rizzUpgrade.mp3'],
    volume: .7,
})

let whatTheSigma = new Howl({
    src: ['auds/whatTheSigma.mp3'],
    volume: .7,
})

let oofSound = new Howl({
    src: ['auds/oof.mp3'],
    volume: .7,
})

let fooSound = new Howl({
    src: ['auds/foo.mp3'],
    volume: .7,
})

let victorySound = new Howl({
    src: ['auds/VICTORY.mp3'],
    volume: .6,
})
// 

// Statistics setup
// Rizz rates
let autoRizz = 0
let autoRizzRate = document.getElementById("autoRizzRate")
let rizzRate = document.getElementById("rizzRate")

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

    setInterval(updateClock, 1000); // Update time every 1 sec
    updateClock(); // Initial call to display 00:00:00 immediately
});

// Sigma status (Easter egg!)
let sigmaStatus = document.getElementById('sigmaStatus');
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

let gymCounter = 0;
let gym = document.getElementById("gymOwned")
let gymCost = document.getElementById("gymCost")
gym.innerText = "Amount Owned: 0";

let babyGronkCounter = 0;
let babyGronk = document.getElementById('babyGronkOwned')
let babyGronkCost = document.getElementById("babyGronkCost")
babyGronk.innerText = "Amount Owned: 0";

let bugattiChironCounter = 0;
let bugattiChiron = document.getElementById('bugattiChironOwned')
let bugattiChironCost = document.getElementById("bugattiChironCost")
bugattiChiron.innerText = "Amount Owned: 0";

let boeing747Counter = 0;
let boeing747 = document.getElementById('boeing747Owned')
let boeing747Cost = document.getElementById("boeing747Cost")
boeing747.innerText = "Amount Owned: 0";

let airbusA380Counter = 0;
let airbusA380 = document.getElementById('airbusA380Owned')
let airbusA380Cost = document.getElementById("airbusA380Cost")
airbusA380.innerText = "Amount Owned: 0";
// Increase prices, add gym soon
//

// Purchasing upgrades
function buyRizzBoost() {
    let rizzBoostPrice = 25 + rizzBoostCounter ** 1.8
    rizzBoostCost.innerText = "Cost: " + rizzBoostPrice.toFixed(0) + " Rizz"
    if (counter >= rizzBoostPrice.toFixed(0)) {
        counter = counter - rizzBoostPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        rizzBoostCounter = rizzBoostCounter + 1
        rizzBoost.innerText = "Amount Owned: " + rizzBoostCounter
        rizzBoostPrice = 25 + rizzBoostCounter ** 1.8
        rizzBoostCost.innerText = "Cost: " + rizzBoostPrice.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    updateButtons()
}
}

function buyAutorizzer() {
    let autorizzerPrice = 100 + autorizzerCounter ** 1.8
    autorizzerCost.innerText = "Cost: " + autorizzerPrice.toFixed(0) + " Rizz"
    if (counter >= autorizzerPrice.toFixed(0)) {
        counter = counter - autorizzerPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        autorizzerCounter = autorizzerCounter + 1
        autorizzer.innerText = "Amount Owned: " + autorizzerCounter
        autorizzerPrice = 100 + autorizzerCounter ** 1.8
        autorizzerCost.innerText = "Cost: " + autorizzerPrice.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    }
    updateButtons()
}

function buyWatermelonCat() {
    let watermelonCatPrice = 250 + watermelonCatCounter ** 1.8
    watermelonCatCost.innerText = "Cost: " + watermelonCatPrice.toFixed(0) + " Rizz"
    if (counter >= watermelonCatPrice.toFixed(0)) {
        counter = counter - watermelonCatPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        watermelonCatCounter = watermelonCatCounter + 1
        watermelonCat.innerText = "Amount Owned: " + watermelonCatCounter
        watermelonCatPrice = 250 + watermelonCatCounter ** 1.8
        watermelonCatCost.innerText = "Cost: " + watermelonCatPrice.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
         whatTheSigma.play();
    }
    updateButtons()
}

function buyEnhancedInstagram() {
    let enhancedInstagramPrice = 680 + enhancedInstagramCounter ** 1.8
    enhancedInstagramCost.innerText = "Cost: " + enhancedInstagramPrice.toFixed(0) + " Rizz"
    if (counter >= enhancedInstagramPrice.toFixed(0)) {
        counter = counter - enhancedInstagramPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        enhancedInstagramCounter = enhancedInstagramCounter + 1
        enhancedInstagram.innerText = "Amount Owned: " + enhancedInstagramCounter
        enhancedInstagramPrice = 680 + enhancedInstagramCounter ** 1.8
        enhancedInstagramCost.innerText = "Cost: " + enhancedInstagramPrice.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    }
    updateButtons()
}

function buySaulGoodman() {
    let saulGoodmanPrice = 1000 + saulGoodmanCounter ** 1.8
    saulGoodmanCost.innerText = "Cost: " + saulGoodmanPrice.toFixed(0) + " Rizz"
    if (counter >= saulGoodmanPrice.toFixed(0)) {
        counter = counter - saulGoodmanPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        saulGoodmanCounter = saulGoodmanCounter + 1
        saulGoodman.innerText = "Amount Owned: " + saulGoodmanCounter
        saulGoodmanPrice = 1000 + saulGoodmanCounter ** 1.8
        saulGoodmanCost.innerText = "Cost: " + saulGoodmanPrice.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    }
    updateButtons()
}

function buyBabyGronk() {
    let babyGronkPrice = 1865 + babyGronkCounter ** 1.8
    babyGronkCost.innerText = "Cost: " + babyGronkPrice.toFixed(0) + " Rizz"
    if (counter >= babyGronkPrice.toFixed(0)) {
        counter = counter - babyGronkPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        babyGronkCounter = babyGronkCounter + 1
        babyGronk.innerText = "Amount Owned: " + babyGronkCounter
        babyGronkPrice = 1865 + babyGronkCounter ** 1.8
        babyGronkCost.innerText = "Cost: " + babyGronkPrice.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    }
    updateButtons()
}

function buyGym() {
    let gymPrice = 2975 + gymCounter ** 1.8
    gymCost.innerText = "Cost: " + gymPrice.toFixed(0) + " Rizz"
    if (counter >= gymPrice.toFixed(0)) {
        counter = counter - gymPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        gymCounter = gymCounter + 1
        gym.innerText = "Amount Owned: " + gymCounter
        gymPrice = 2975 + gymCounter ** 1.8
        gymCost.innerText = "Cost: " + gymPrice.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    }
    updateButtons()
}

function buyBugattiChiron() {
    let bugattiChironPrice = 4500 + bugattiChironCounter ** 1.8
    bugattiChironCost.innerText = "Cost: " + bugattiChironPrice.toFixed(0) + " Rizz"
    if (counter >= bugattiChironPrice.toFixed(0)) {
        counter = counter - bugattiChironPrice.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        bugattiChironCounter = bugattiChironCounter + 1
        bugattiChiron.innerText = "Amount Owned: " + bugattiChironCounter
        bugattiChironPrice = 4500 + bugattiChironCounter ** 1.8
        bugattiChironCost.innerText = "Cost: " + bugattiChironPrice.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    }
    updateButtons()
}

function buyBoeing747() {
    let boeing747Price = 8000 + boeing747Counter ** 1.8
    boeing747Cost.innerText = "Cost: " + boeing747Price.toFixed(0) + " Rizz"
    if (counter >= boeing747Price.toFixed(0)) {
        counter = counter - boeing747Price.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        boeing747Counter = boeing747Counter + 1
        boeing747.innerText = "Amount Owned: " + boeing747Counter
        boeing747Price = 8000 + boeing747Counter ** 1.8
        boeing747Cost.innerText = "Cost: " + boeing747Price.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    }
    updateButtons()
}

function buyAirbusA380() {
    let airbusA380Price = 15000 + airbusA380Counter ** 1.8
    airbusA380Cost.innerText = "Cost: " + airbusA380Price.toFixed(0) + " Rizz"
    if (counter >= airbusA380Price.toFixed(0)) {
        counter = counter - airbusA380Price.toFixed(0)
        rizz.innerText = "Your Rizz: " + counter.toFixed(0)
        airbusA380Counter = airbusA380Counter + 1
        airbusA380.innerText = "Amount Owned: " + airbusA380Counter
        airbusA380Price = 15000 + airbusA380Counter ** 1.8
        airbusA380Cost.innerText = "Cost: " + airbusA380Price.toFixed(0) + " Rizz"
        rizzUpgrade.play()
    }
    else {
        whatTheSigma.play();
    }
    updateButtons()
}
// 

// Update and disable buttons based on prices
function updateButtons() {
    document.getElementById("rizzBoost").disabled = counter < rizzboostPrice
    document.getElementById("autorizzer").disabled = counter < autorizzerPrice
    document.getElementById("watermelonCat").disabled = counter < watermelonCatPrice
    document.getElementById("enhancedInstagram").disabled = counter < enhancedInstagramPrice
    document.getElementById("saulGoodman").disabled = counter < saulGoodmanPrice
    document.getElementById("babyGronk").disabled = counter < babyGronkPrice
    document.getElementById("gym").disabled = counter < gymPrice
    document.getElementById("bugattiChiron").disabled = counter < bugattiChironPrice
    document.getElementById("boeing747").disabled = counter < boeing747Price
    document.getElementById("airbusA380").disabled = counter < airbusA380Price
}
// 

// Loop the game and apply the auto rizzers + sigma status
function gameLoop() {
    counter += (2 * autorizzerCounter) + (10 * watermelonCatCounter) + (25 * enhancedInstagramCounter) + (30 * gymCounter) + (40 * saulGoodmanCounter) + (50 * babyGronkCounter) + (100 * bugattiChironCounter) + (175 * boeing747Counter) + (250 * airbusA380Counter)
    rizz.innerText = "Your Rizz: " + counter.toFixed(0)
    autoRizz = (2 * autorizzerCounter) + (10 * watermelonCatCounter) + (25 * enhancedInstagramCounter) + (30 * gymCounter) + (40 * saulGoodmanCounter) + (50 * babyGronkCounter) + (100 * bugattiChironCounter) + (175 * boeing747Counter) + (250 * airbusA380Counter)
    autoRizzRate.innerText = autoRizz.toFixed(0)
    rizzRate.innerText = (1 + (1.8 * rizzBoostCounter)).toFixed(0)
    if (counter == 696969696969) {
        sigmaStatus.innerText = "Yes!" + " Copy and paste this link for what to do next: https://drive.google.com/file/d/1-FlrOHVEU8gv3yVgmocVuCobxBiRzH_v/view?usp=sharing"
        victorySound.play()
        alert('Congratulations! You have officially become a sigma! Come collect your prize at the link in your statistcs!')
    }
}
// 
// Update the game every 1 second to run the auto rizzers and update buttons
setInterval(gameLoop, 1000)
updateButtons()
// 
// ENSURE ALL COUNTERS AND RIZZ RATES HAVE THE .toFixed(0) METHOD TO ROUND ALL VALUES TO THE NEAREST WHOLE.