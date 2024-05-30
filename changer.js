
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