var ctx;
var actorCtx;
var ticks = 0;
var spriteMap = new Image;
var player;
var background_image;
// position of the player
var scroll_x = 0;
var scroll_y = 0;

function $(id) {
    return document.getElementById(id);
}

function drawGraphics() {

    var offset = scroll_x % 640;

    ctx.drawImage(background_image, -scroll_x, 0);
    scroll_x++;

}


function updateCharacters() {

}

function updateElements() {

}

function updateBackground() {

}


function processKeyboard() {
}


function gameTick() {
    ticks++;
    //processKeyboard();
    //updateCharacters();
    //updateElements();
    //updateBackground();

    drawGraphics();
}


function initGame() {

    var canvas = $("game");
    ctx = canvas.getContext("2d");

    var actorCanvas = $('actor');
    actorCtx = actorCanvas.getContext('2d');

    spriteMap.src = '../images/smb_tiles.png';

    player = {
        pos:{x:0, y:0},
        size:{w:16, h:32}
    };
    player.spriteMap = new Image;
    player.spriteMap.src = 'images/mario_sprites.png';
    var actors = [player];

    background_image = new Image();
    background_image.src = 'images/levels/mario-1-1.gif';

    setInterval(gameTick, 1000 / 30);
}



window.onload = function() {
    initGame();
}