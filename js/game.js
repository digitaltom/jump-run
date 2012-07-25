var ctx;
var actorCtx;
var ticks = 0;
var spriteMap = new Image;
var actors;
var background_image;
// position of the player
var scroll_x = 0;
var scroll_y = 0;
var held = {left: false, right: false, up: false, down: false};

// size details about various aspects of the game
var size = {
tile: { // size of tiles
source: {w:16, h:16},
target: {w:32, h:32}
},
tiles: { // number of tiles
source: {w:13, h:11},
target: {w:18, h:18}
},
canvas: {w:null, h:null} // initialize later
};



function $(id) {
    return document.getElementById(id);
}

function drawGraphics() {

    // clear the canvas before repainting
    // ctx.clearRect(0, 0, size.canvas.w, size.canvas.h);
    
    var offset = scroll_x % 640;

    //ctx.drawImage(background_image, -scroll_x, 0);
    //scroll_x++;
    
    levels[0].forEach(function(linecontent, index_y){
	
	// 5 free lines on top, 13 lines of level content
	index_y += 5;
	//alert(targetIndex);
	
	// context.drawImage(img,x,y,width,height);
	// context.drawImage(img,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);
	
	// cache tile sizes
var sw = size.tile.source.w;
var sh = size.tile.source.h;
var tw = size.tile.target.w;
var th = size.tile.target.h;
var sx, sy;
	
for ( var index_x = 0; index_x < linecontent.length; index_x++ )
{

    switch (linecontent.charAt(index_x)) {
case '#': sx = 5; sy = 0; break;
case 'x': sx = 0; sy = 0; break;
case '/': sx = 0; sy = 1; break;
case '^': sx = 1; sy = 0; break;
case 'ü': sx = 1; sy = 1; break;
case '`': sx = 2; sy = 1; break;
default: sx = null; sy = null;
}
    //alert(sx);
     if(sx != null && sy != null){
        ctx.drawImage(spriteMap, sx*(sw+1), sy*(sh+1), sw, sh, index_x*tw, index_y*th, tw, th);
     }
}


    }
    );
    
}


function updateCharacters() {

}

function updateElements() {

}

function updateBackground() {

}


function drawActors() {
   // repaint each actor
   
actors.forEach(function(actor){
    
   ctx.clearRect(actor.pos.x, actor.pos.y, size.canvas.w, size.canvas.h*2); 
   
   	if (held.left) {
actor.speed.x -= 0.5;
} else if (held.right) {
actor.speed.x += 0.5;
}
if (held.up) {
actor.speed.y -= 15;
} else if (held.down) {
// this only causes a duck animation, nothing happens in term of speed
}
  
// and right before painting the actors in the repaint loop, apply speed, friction and gravity.
// the new position is then immediately reflected in the drawImage call that follows it.
actor.speed.x *= 0.9;
if (actor.speed.x < 0.001) actor.speed.x = 0;
actor.pos.x += actor.speed.x;
//actor.speed.y += 3;
actor.pos.y += actor.speed.y;  
// max speed 1 tile
if (actor.speed.x >= size.tile.target.w) {actor.speed.x = size.tile.target.w}
if (actor.speed.y >= size.tile.target.h) {actor.speed.y = size.tile.target.h}
  
ctx.drawImage(
actor.spriteMap,
0,
0,
actor.size.w,
actor.size.h,
actor.pos.x,
actor.pos.y,
size.tile.target.w,
size.tile.target.h*2
);

});  
    
}



window.onkeydown = function(e){
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
window.onkeyup = function(e){
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
    //updateCharacters();
    //updateElements();

    drawGraphics();
    drawActors();
}


function initGame() {

    var canvas = $("game");
    ctx = canvas.getContext("2d");

    spriteMap.src = 'images/smb_tiles.png';

    player = {
        pos:{x:0, y: 15*size.tile.target.h},
        size:{w:16, h:32},
        speed:{x:0, y:0}
    };
    player.spriteMap = new Image;
    player.spriteMap.src = 'images/mario_sprites.png';
    actors = [player];

    setInterval(gameTick, 1000 / 30);
}



window.onload = function() {
    initGame();
}