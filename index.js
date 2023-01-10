let isClicked = false

document.addEventListener("click", function (e) {
    if (e.target.dataset.arrow) {
        if (!isClicked) {
            displayAnswer(e)
        }
        else if(isClicked) {
            hideAnswer(e)
        }
    }
})

function displayAnswer(e) {
    document.getElementById(`arrow${e.target.dataset.arrow}`).style.transform = "rotate(180deg)"
    document.getElementById(`answer${e.target.dataset.arrow}`).style.display = "block"
    document.getElementById(`question${e.target.dataset.arrow}`).style.color = "hsl(238, 29%, 16%)"
    isClicked = true
}
function hideAnswer(e) {
    document.getElementById(`arrow${e.target.dataset.arrow}`).style.transform = "rotate(360deg)"
    document.getElementById(`answer${e.target.dataset.arrow}`).style.display = "none"
    document.getElementById(`question${e.target.dataset.arrow}`).style.color = "hsl(240, 6%, 50%)"
    isClicked = false
}

