var menu = document.getElementById("game-menu");

document.getElementById("button-play").addEventListener('click', function (event) {
    startGame();
}, false);


function showMenu() {
    menu.style.visibility = "visible";
}

function hideMenu() {
    menu.style.visibility = "hidden";
}