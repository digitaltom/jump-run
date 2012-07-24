var ctx;
var actorCtx;
var ticks = 0;
var spriteMap = new Image;
var actors;
var background_image;
// position of the player
var scroll_x = 0;
var scroll_y = 0;

// size details about various aspects of the game
var size = {
tile: { // size of tiles
source: {w:16, h:16},
target: {w:32, h:32}
},
tiles: { // number of tiles
source: {w:13, h:11},
target: {w:30, h:30}
},
canvas: {w:null, h:null} // initialize later
};

var backgroundMap = [
"                                                                ",
"  #  #     #######    ######       ########      ######    #####",
"                                                                ",
"  ~~~~                                                          ",
"   ^                     ######################                 ",
"  /ü`                                                           ", 
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];



function $(id) {
    return document.getElementById(id);
}

function drawGraphics() {

    // clear the canvas before repainting
    // ctx.clearRect(0, 0, size.canvas.w, size.canvas.h);
    
    var offset = scroll_x % 640;

    //ctx.drawImage(background_image, -scroll_x, 0);
    //scroll_x++;
    
    backgroundMap.forEach(function(linecontent, index_y){
	
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
    
// repaint each actor
actors.forEach(function(actor){
ctx.drawImage(
actor.spriteMap,
0,
0,
actor.size.w,
actor.size.h,
actor.pos.x,
actor.pos.y,
actor.size.w,
actor.size.h
);

});    
    

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

    drawGraphics();
}


function initGame() {

    var canvas = $("game");
    ctx = canvas.getContext("2d");

    spriteMap.src = 'images/smb_tiles.png';

    player = {
        pos:{x:0, y:0},
        size:{w:16, h:32}
    };
    player.spriteMap = new Image;
    player.spriteMap.src = 'images/mario_sprites.png';
    actors = [player];

    background_image = new Image();
    background_image.src = 'images/levels/mario-1-1.gif';

    setInterval(gameTick, 1000 / 30);
}



window.onload = function() {
    initGame();
}