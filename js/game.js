var ctx;
var ticks = 0;
var spriteMap = new Image;
var actors;

// position displayed level
var scroll_x = 0;

var held = {left:false, right:false, up:false, down:false};
var collisionMap;

// size details about various aspects of the game
var size = {
    tile:{ // size of tiles
        source:{w:16, h:16},
        target:{w:32, h:32}
    },
    tiles:{ // number of tiles
        source:{w:13, h:11},
        target:{w:18, h:18}
    },
    canvas:{w:576, h:576}
};


function $(id) {
    return document.getElementById(id);
}

function drawElements() {

    // clear the canvas before repainting
    ctx.clearRect(0, 0, size.canvas.w, size.canvas.h);
    collisionMap = [];

    levels[0].forEach(function (linecontent, index_y) {

            // 5 free lines on top, 13 lines of level content
            index_y += 5;

            // context.drawImage(img,x,y,width,height);
            // context.drawImage(img,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);

            // cache tile sizes
            var sw = size.tile.source.w;
            var sh = size.tile.source.h;
            var tw = size.tile.target.w;
            var th = size.tile.target.h;


            // first tile to display:
            var index_x = scroll_x / size.tile.target.w
            // last tile to show
            var index_max = index_x + size.tiles.target.w

            // offset
            //-(scroll_x % size.tiles.target.w)

            for (; index_x < index_max; index_x++) {

                var object = { sx:null, sy:null, x:index_x * tw, y:index_y * th };
                switch (linecontent.charAt(index_x)) {
                    case '#':
                        object.sx = 5;
                        object.sy = 0;
                        collisionMap.push(object);
                        break;
                    case 'x':
                        object.sx = 0;
                        object.sy = 0;
                        collisionMap.push(object);
                        break;
                    case '/':
                        object.sx = 0;
                        object.sy = 1;
                        break;
                    case '^':
                        object.sx = 1;
                        object.sy = 0;
                        break;
                    case 'ü':
                        object.sx = 1;
                        object.sy = 1;
                        break;
                    case '`':
                        object.sx = 2;
                        object.sy = 1;
                        break;
                    default:
                }
                //alert(sx);
                if (object.sx != null && object.sy != null) {
                    ctx.drawImage(spriteMap, object.sx * (sw + 1), object.sy * (sh + 1), sw, sh, object.x, object.y, tw, th);
                }
            }


        }
    );

}


function updateCharacters() {

    actors.forEach(function (actor) {

        if (held.left) {
            actor.speed.x -= 1.5;
        } else if (held.right) {
            actor.speed.x += 1.5;
        }
        if (held.up) {
            actor.speed.y -= 15;
        } else if (held.down) {
            // this only causes a duck animation, nothing happens in term of speed
        }

        // apply speed, friction and gravity.
        actor.speed.x *= 0.8;
        if (Math.abs(actor.speed.x) < 0.01) actor.speed.x = 0;
        //actor.speed.y += 3;

        // speed limit of max 1 tile per frame
        if (actor.speed.x >= size.tile.target.w) {
            actor.speed.x = size.tile.target.w
        }
        if (-actor.speed.x >= size.tile.target.w) {
            actor.speed.x = -size.tile.target.w
        }
        if (actor.speed.y >= size.tile.target.h) {
            actor.speed.y = size.tile.target.h
        }
        if (-actor.speed.y >= size.tile.target.h) {
            actor.speed.y = -size.tile.target.h
        }


        //alert(collisionMap);
        var projected_x = actor.pos.x + actor.speed.x;
        var projected_y = actor.pos.y + actor.speed.y;
        collisionMap.forEach(function (object) {

            // todo: block on screen edge

            if (object.x >= projected_x && object.x <= projected_x + size.tile.target.w) {
                //alert(object);
            }

        })

        actor.pos.x += actor.speed.x;
        actor.pos.y += actor.speed.y;

    });
}

function updateElements() {

}

function drawControls() {
    var actor = actors[0];
    ctx.strokeText("Player: x/y: " + Math.round(actor.pos.x) + "/" + Math.round(actor.pos.y) +
        ", speed x/y: " + Math.round(actor.speed.x) + "/" + Math.round(actor.speed.y), 0, size.tile.target.h);
}

function updateBackground() {

}


var blocks = function (x, y) {
// get corner coordinates in tile coordinates
    var tl = {
        x:Math.floor(x / size.tile.w),
        y:Math.floor(y / size.tile.h)
    };
    var br = {
        x:Math.ceil(x / size.tile.w) + 1,
        y:Math.ceil(y / size.tile.h) + 1
    };
// loop through all blocks in this rectangle
// note that the bottom right coords are exclusive
// this solves an important problem when the sprite
// has the same size as the grid.
    for (var x = tl.x; x < br.x; ++x) {
        for (var y = tl.y; y < br.y; ++y) {
            if (backgroundMap[toIndex(x, y)]) return true;
        }
    }
// none of the tiles blocked, move is ok
    return false;
};


function drawActors() {

    actors.forEach(function (actor) {

        ctx.drawImage(
            actor.spriteMap,
            0,
            0,
            actor.size.w,
            actor.size.h,
            actor.pos.x,
            actor.pos.y,
            size.tile.target.w,
            size.tile.target.h * 2
        );

    });

}


window.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37: // left
            held.left = true;
            break;
        case 38: // up
            held.up = true;
            break;
        case 39: // right
            held.right = true;
            break;
        case 40: // down
            held.down = true;
            break;
        default:
            return;
    }
    return false; // cancel regular key
};

// of course we now also need to register keyup
window.onkeyup = function (e) {
    switch (e.keyCode) {
        case 37: // left
            held.left = false;
            break;
        case 38: // up
            held.up = false;
            break;
        case 39: // right
            held.right = false;
            break;
        case 40: // down
            held.down = false;
            break;
        default:
            return;
    }
    return false; // cancel regular key
};


function gameTick() {
    ticks++;
    //processKeyboard();

    drawElements();
    updateCharacters();
    //updateElements();


    drawActors();

    drawControls();
}


function initGame() {

    var canvas = $("game");
    ctx = canvas.getContext("2d");

    spriteMap.src = 'images/smb_tiles.png';

    player = {
        pos:{x:0, y:15 * size.tile.target.h},
        size:{w:16, h:32},
        speed:{x:0, y:0}
    };
    player.spriteMap = new Image;
    player.spriteMap.src = 'images/mario_sprites.png';
    actors = [player];

    setInterval(gameTick, 1000 / 30);
}


window.onload = function () {
    initGame();
}