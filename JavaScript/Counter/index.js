let count = 0

function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
}

msg = document.getElementById("save-el")
msg.innerText = "Previous Entries: "

function save() {
    msg.innerText += " " + count + " - "
}