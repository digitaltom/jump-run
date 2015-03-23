function hideMenus() {
    hideStartMenu()
    hideGameOver()
}

// Main menu

var button;
if (button = document.getElementById("button-play1")) {
    button.addEventListener('click', function (event) {
        current_level = levels[2];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[2];
        load_level()
    }, false);
}

if (button = document.getElementById("button-play2")) {
    button.addEventListener('click', function (event) {
        current_level = levels[0];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[0];
        load_level()
    }, false);
}

if (button = document.getElementById("button-play3")) {
    button.addEventListener('click', function (event) {
        current_level = levels[1];
        startGame();
    }, false);

    button.addEventListener('mouseover', function (event) {
        current_level = levels[1];
        load_level()
    }, false);
}


var start_menu = document.getElementById("game-menu");

function showStartMenu() {
    hideControls()
    start_menu.style.visibility = "visible";
}

function hideStartMenu() {
    start_menu.style.visibility = "hidden";
}


// Gameover menu

document.getElementById("button-restart").addEventListener('click', function (event) {
    restartGame();
}, false);

document.getElementById("button-menu").addEventListener('click', function (event) {
    initGame()
    showStartMenu()
}, false);

var gameover_menu = document.getElementById("game-over");

function showGameOver() {
    hideControls()
    gameover_menu.style.visibility = "visible";
}

function hideGameOver() {
    gameover_menu.style.visibility = "hidden";
}
