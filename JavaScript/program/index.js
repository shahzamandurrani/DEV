function welcome() {
    let name = "Shahzaman"
    greetings = "Salam, "
    myGreeting = document.getElementById("welcome-el")
    myGreeting.innerText = greetings+name
    myGreeting.innerText += "😊"
}

welcome()