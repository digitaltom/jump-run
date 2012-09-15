function hideMenus() {
    hideStartMenu()
    hideGameOver()
}

// Main menu

document.getElementById("button-play").addEventListener('click', function (event) {
    startGame();
}, false);

var start_menu = document.getElementById("game-menu");

function showStartMenu() {
    start_menu.style.visibility = "visible";
}

function hideStartMenu() {
    start_menu.style.visibility = "hidden";
}


// Gameover menu

document.getElementById("button-restart").addEventListener('click', function (event) {
    restartGame();
}, false);

var gameover_menu = document.getElementById("game-over");

function showGameOver() {
    gameover_menu.style.visibility = "visible";
}

function hideGameOver() {
    gameover_menu.style.visibility = "hidden";
}