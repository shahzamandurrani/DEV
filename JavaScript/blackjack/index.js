let player = {
    name: "Durrani",
    chips: 100
}
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": " + player.chips

function getRandomNumber() {
    num = Math.floor(Math.random() * 13) + 1
    if (num === 1){
        return 1
    } else if(num > 10){
        return 10
    } else{
        return num
    }
}

function startGame() {
    isAlive = true
    cards = [getRandomNumber(), getRandomNumber()]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let index = 0; index < cards.length; index += 1) {
        cardsEl.textContent += cards[index] + " "
    }
    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You got blackjack!"
        hasBlackJack = true
    } else{
        message = "Busted"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if ((isAlive) && (!hasBlackJack)){
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()   
    }
}