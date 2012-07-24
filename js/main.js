
// size details about various aspects of the game
var size = {
tile: { // size of tiles
source: {w:16, h:16},
target: {w:16, h:16}
},
tiles: { // number of tiles
source: {w:13, h:11},
target: {w:30, h:30}
},
canvas: {w:null, h:null} // initialize later
};


// load the source image. technically you should wait for it to finish loading, but we'll be lazy in that regard right now...
var spriteMap = new Image;
spriteMap.src = 'images/smb_tiles.png'; // or whatever the name of the sprite map image is

// canvas details
var canvas = document.getElementById('canvas');
// this is the handle we need to paint on the canvas. we dont really use the canvas object after the initialization phase
var ctx = canvas.getContext('2d');

var actorCanvas = document.getElementById('actor-canvas');
var actorCtx = actorCanvas.getContext('2d');

// convert between index and xy on the map
var toIndex = function(x,y, boolSource){
if (boolSource) return (y*size.tiles.source.w)+x;
return (y*size.tiles.target.w)+x;
};
var toXY = function(index, boolSource){
if (boolSource) return {x:(index%size.tiles.source.w), y:(Math.floor(index/size.tiles.source.w))};
return {x:index%size.tiles.target.w, y:Math.floor(index/size.tiles.target.w)};
};

// each element in the array tells you which sprite in the sprite map should be drawn, if any.
// 0 means none so we offset at 1, meaning we should deduct one from the index
var backgroundMap = [
1,0,0,5,6,7,0,0,0,0,
1,0,0,8,8,8,0,0,0,0
];


var repaint = function(currentFrame){
// clear the canvas before repainting
ctx.clearRect(0, 0, size.canvas.w, size.canvas.h);

// loop through the background tile data
backgroundMap.forEach(function(sourceIndex, targetIndex){
// get source and target coordinates
var src = toXY(sourceIndex, true);
var tgt = toXY(targetIndex, false);
// cache tile sizes
var sw = size.tile.source.w
var sh = size.tile.source.h;
var tw = size.tile.target.w;
var th = size.tile.target.h;
// actually paint
ctx.drawImage(
spriteMap,
src.x * sw,
src.y * sh,
sw,
sh,
tgt.x * tw,
tgt.y * th,
tw,
th
);
// and maybe the rectangle (using pretty much the same target parameters)
ctx.strokeRect(
tgt.x * tw,
tgt.y * th,
tw,
th
);
});

actorCtx.clearRect(0, 0, size.canvas.w, size.canvas.h);
// repaint each actor
actors.forEach(function(actor){
actorCtx.drawImage(
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
// you could draw a rectangle around it if you want, just like before...
});


};


var start = function(){
// frame counter
var frames = 0;
setTimeout(function frame(){
try {
if (backgroundMap.repaint !== false) {
repaint(++frames);
backgroundMap.repaint = false;
}
} finally {
setTimeout(frame, 50);
}
}, 50);
};


var player = {
pos: {x: 0, y: 0},
size: {w: 16, h: 32}
};
player.spriteMap = new Image;
player.spriteMap.src = '../images/mario_sprites.png'; // or whatever it is

// create an array to hold all actors
var actors = [player];

//start();


