var ctx;
var ticks = 0;
var spriteMap = new Image;
var actors;

var gameInterval;

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


            if (scroll_x < 0 ) {
                scroll_x = 0;
            }
            // first tile to display:
            var index_x_start = scroll_x / size.tile.target.w
            var offset_x = scroll_x % size.tile.target.w
            // last tile to show
            var index_x_max = index_x_start + size.tiles.target.w+1

            for (var index_x = index_x_start; index_x < index_x_max; index_x++) {

                var object = { sx:null, sy:null, x:((index_x-index_x_start) * tw)-offset_x, y:index_y * th, deadly: false };
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
                    case '@':
                        object.sx = 9;
                        object.sy = 2;
                        object.deadly = true;
                        collisionMap.push(object);
                        break;
                    case '1':
                        object.sx = 0;
                        object.sy = 7;
                        break;
                    case '2':
                        object.sx = 1;
                        object.sy = 7;
                        break;
                    case '3':
                        object.sx = 2;
                        object.sy = 7;
                        break;
                    case '4':
                        object.sx = 0;
                        object.sy = 8;
                        break;
                    case '5':
                        object.sx = 1;
                        object.sy = 8;
                        break;
                    case '6':
                        object.sx = 2;
                        object.sy = 8;
                        break;
                    default:
                }
                if (object.sx != null && object.sy != null) {
                    ctx.drawImage(spriteMap, object.sx * (sw + 1) , object.sy * (sh + 1) , sw-1, sh, object.x, object.y, tw, th);
                }
            }


        }
    );

}


function updateCharacters() {

    actors.forEach(function (actor) {

        if (held.left && actor.speed.y == 0) {
            actor.speed.x -= 1.5;

        } else if (held.right && actor.speed.y == 0) {
            actor.speed.x += 1.5;
        }
        if (held.up && actor.speed.y == 0) {
            actor.speed.y -= 25.5;
        } else if (held.down) {
            // this only causes a duck animation, nothing happens in term of speed
        }


        // player anim
        if (actor.speed.x > 0) {
            actor.sprite.y = 16;
        } else if (actor.speed.x < 0) {
            actor.sprite.y = 48;
        }

        if (actor.speed.y != 0) {
           actor.sprite.x = 85;
        } else {
        if (actor.speed.x == 0) {
            actor.sprite.x = 0;
        } else if (actor.sprite.x >= 48) {
            actor.sprite.x = 16;
        } else if (Math.abs(actor.speed.x) > 1 && (ticks % 3 == 0) ) {
            actor.sprite.x += 16;
        }
        }


        // apply friction and gravity.
        if (actor.speed.y == 0) {
            actor.speed.x *= 0.8;
        }
        actor.speed.y += 2;
        if (Math.abs(actor.speed.x) < 0.8) actor.speed.x = 0;
        if (Math.abs(actor.speed.y) < 0.1) actor.speed.y = 0;


        // apply speed: speed limit of max 1 tile per frame
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
        var projected_left = actor.pos.x + actor.speed.x;
        var projected_top = actor.pos.y + actor.speed.y;
        var projected_bottom = projected_top + size.tile.target.h
        var projected_right = projected_left + size.tile.target.w


        // block on level edge
        if (projected_left < 0) {
            projected_left = 0;
        } else if (projected_right > size.canvas.w) {
            projected_left = size.canvas.w - size.tile.target.w;
        }

        collisionMap.forEach(function (object) {
            //collisionMap.every(function (object) {
            var collides = false;

            // we are below or above an object
            if (projected_right >= (object.x+size.tile.target.w*0.3) && projected_left <= object.x + size.tile.target.w*0.7) {
                // check bounce bottom:
                if (projected_bottom >= object.y && projected_top < object.y) {
                    projected_top = object.y - size.tile.target.h;
                    actor.speed.y = 0;
                    collides = true;
                // check bounce top:
                } else if (projected_top <= (object.y + size.tile.target.h) && projected_top > object.y) {
                    projected_top = object.y + size.tile.target.h;
                    actor.speed.y = 0.5;
                    collides = true;
                }
            }
            // we are right or left of an object
            if ( (projected_top >= object.y) && (projected_top <= (object.y + size.tile.target.h) ) ) {
                // check bounce right
                if (projected_right >= object.x && projected_left < object.x+size.tile.target.w) {
                    projected_left =  object.x - size.tile.target.w;
                    actor.speed.x = 0;
                    collides = true;
                }
                // check bounce left

                //if (projected_left < object.x+size.tile.target.w && projected_right > object.x) {
                //    projected_left =  object.x + size.tile.target.w;
                //    actor.speed.x = 0;
                //    collides = true;
                //}
            }

            if ((collides == true && object.deadly == true) || (projected_top > size.canvas.h)){
                gameOver();
            }

        })

        // move the player when the level is at it's border, else move the level
        // todo: right level end
         if (scroll_x <= 0) {
            actor.pos.x = projected_left;
             if (projected_left > (size.canvas.w/2)){
             scroll_x = 1;
             }
        } else {
            scroll_x += actor.speed.x;
        }
        actor.pos.y = projected_top;

    });
}

function updateElements() {

}

function drawControls() {
    var actor = actors[0];
    ctx.strokeText("Player: x/y: " + Math.round(actor.pos.x) + "/" + Math.round(actor.pos.y) +
        ", speed x/y: " + Math.round(actor.speed.x) + "/" + Math.round(actor.speed.y), size.tile.target.w, size.tile.target.h);
    ctx.strokeText("Scroll: " + Math.round(scroll_x) + "px - tile#: " + Math.round(scroll_x / size.tile.target.w), size.tile.target.w, size.tile.target.h*2 );
    ctx.strokeText("Objects: " + collisionMap.length, size.tile.target.w, size.tile.target.h*3 );
}


function drawActors() {

    actors.forEach(function (actor) {

        ctx.drawImage(
            actor.spriteMap,
            actor.sprite.x,
            actor.sprite.y,
            actor.size.w,
            actor.size.h,
            actor.pos.x,
            actor.pos.y,
            size.tile.target.w,
            size.tile.target.h
        );

    });

}


function gameOver() {
    // todo: dying animation
    ctx.strokeText("Game Over", size.tile.target.w*5, size.tile.target.h*6 );
    window.clearInterval(gameInterval);

}


window.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37: // left
            held.left = true;
            break;
        case 32: // space
            held.up = true;
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
        case 32: // space
            held.up = false;
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
    drawElements();
    updateCharacters();
    updateElements();

    drawActors();
    drawControls();
}


function initGame() {

    var canvas = $("game");
    ctx = canvas.getContext("2d");

    spriteMap.src = 'images/smb_tiles.png';

    player = {
        pos:{x:size.tile.target.w, y:10 * size.tile.target.h},
        sprite:{x:0, y:16},
        size:{w:16, h:16},
        speed:{x:0, y:0}
    };
    player.spriteMap = new Image;
    player.spriteMap.src = 'images/mario_sprites.png';
    actors = [player];

    gameInterval = setInterval(gameTick, 1000 / 30);
}


window.onload = function () {
    initGame();
}