var DIR_LEFT = 1;
var DIR_RIGHT = 2;
var DIR_UP = 4;
var DIR_DOWN = 8;

var ctx;
var scroll_x = 0;
var luigi_frame = 0;
var ticks = 0;
var direction = 0;
var mirror = 0;
var luigi_pos = {
    x:50,
    y:50
};

var frames = [
    [  0, 142, 45, 66],
    [ 57, 142, 45, 63],
    [114, 142, 48, 60],
    [174, 142, 48, 60],
    [234, 142, 48, 63],
    [291, 142, 48, 66]
];

function $(id) {
    return document.getElementById(id);
}

function drawGraphics() {
    var offset = scroll_x % 640;

    ctx.drawImage($("water"), -offset, 0);
    ctx.drawImage($("water"), -offset + 640, 0);
}

function drawLuigi() {
    var f = luigi_frame;
    ctx.drawImage(
        $("luigi"), // image
        frames[f][0], frames[f][1] + (mirror * 70), // src x, src y
        frames[f][2], frames[f][3], // src w, src h
        luigi_pos.x, luigi_pos.y, // dst x, dst y
        frames[f][2], frames[f][3] // dst w, dst h (same as source)
    );
}

function drawDiver() {
    var x = 640 - scroll_x;
    var y = 348 + Math.floor(16 * Math.sin(2 * ticks * Math.PI / 180.0));
    ctx.drawImage($("bonus"), 86, 0, 150, 254, x, y, 150, 254);
}

function updateCharacters() {
    luigi_frame = (Math.floor(ticks / 2) % frames.length); //
}

function updateBackground() {
    scroll_x++;
}

function processKeyboard() {
    var step = 4;

    if (direction & DIR_LEFT) {
        luigi_pos.x -= step;
    }
    else if (direction & DIR_RIGHT) {
        luigi_pos.x += step;
    }

    if (direction & DIR_UP) {
        luigi_pos.y -= step;
    }
    else if (direction & DIR_DOWN) {
        luigi_pos.y += step;
    }
}

function keyDown(e) {
    var handled = false;

    switch (e.keyCode) {
        case 37:
            direction |= DIR_LEFT;
            mirror = 1;
            handled = true;
            break;

        case 38:
            direction |= DIR_UP;
            handled = true;
            break;

        case 39:
            direction |= DIR_RIGHT;
            mirror = 0;
            handled = true;
            break;

        case 40:
            direction |= DIR_DOWN;
            handled = true;
            break;
    }

    if (handled && e.preventDefault) {
        // prevent from browser to receive this event
        e.preventDefault();
    }
}

function keyUp(e) {
    var handled = false;

    switch (e.keyCode) {
        case 37:
            direction &= ~DIR_LEFT;
            handled = true;
            break;

        case 38:
            direction &= ~DIR_UP;
            handled = true;
            break;

        case 39:
            direction &= ~DIR_RIGHT;
            handled = true;
            break;

        case 40:
            direction &= ~DIR_DOWN;
            handled = true;
            break;
    }

    if (handled && e.preventDefault) {
        // prevent from browser to receive this event
        e.preventDefault();
    }
}

function gameTick() {
    ticks++;
    processKeyboard();
    updateCharacters();
    updateBackground();

    drawGraphics();
    drawLuigi();
    drawDiver();
}

function initGame() {
    var canvas = $("canvas");
    ctx = canvas.getContext("2d");
    setInterval(gameTick, 1000 / 30);

    window.onkeydown = keyDown;
    window.onkeyup = keyUp;
}

window.onload = initGame;
