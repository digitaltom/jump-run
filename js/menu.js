function hideMenus() {
    hideStartMenu()
    hideGameOver()
}

// Main menu

document.getElementById("button-play1").addEventListener('click', function (event) {
    theme = 'super_mario'
    current_level = levels[2];
    startGame();
}, false);

document.getElementById("button-play1").addEventListener('mouseover', function (event) {
    theme = 'super_mario'
    current_level = levels[2];
    initializeTheme()
    initializeLevel()
    drawLevel()
}, false);


document.getElementById("button-play2").addEventListener('click', function (event) {
    theme = 'snoop'
    current_level = levels[0];
    startGame();
}, false);

document.getElementById("button-play2").addEventListener('mouseover', function (event) {
    theme = 'snoop'
    current_level = levels[0];
    initializeTheme()
    initializeLevel()
    drawLevel()
}, false);

document.getElementById("button-play3").addEventListener('click', function (event) {
    theme = 'suse'
    current_level = levels[1];
    startGame();
}, false);

document.getElementById("button-play3").addEventListener('mouseover', function (event) {
    theme = 'suse'
    current_level = levels[1];
    initializeTheme()
    initializeLevel()
    drawLevel()
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

document.getElementById("button-menu").addEventListener('click', function (event) {
    hideGameOver()
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