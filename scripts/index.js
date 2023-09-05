let darkmode = false

function enter(id) {
    let card = document.getElementById(id)

    card.style.backgroundColor = "gray"
}

function leaves(id) {
    let card = document.getElementById(id)

    if (!darkmode) {
        card.style.backgroundColor = "white"
    } else {
        card.style.backgroundColor = "black"
    }
}
