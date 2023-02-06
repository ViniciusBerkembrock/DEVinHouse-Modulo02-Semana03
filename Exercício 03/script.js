let divBox = document.getElementById("box")
let inputColor = document.getElementById("selector")

function changeColor() {
    var finalColor = inputColor.value
    divBox.style.backgroundColor = finalColor
}