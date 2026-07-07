let messageEl = document.querySelector("#msg-el")
let hands = ["rock", "paper", "scissors"]

messageEl.textContent = hands[Math.floor(Math.random()*3)]