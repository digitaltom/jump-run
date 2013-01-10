function replaceLevelSpriteXY(x, y, item) {
    line_nr = y / size.tile.target.h - line_offset_y
    replaceLevelSprite(x / size.tile.target.w, line_nr, item)
}

function replaceLevelSprite(pos, line, item) {
    current_level.level[line] = current_level.level[line].replaceAt(pos, item);
}

function getLevelSpriteXY(x, y) {
    line_nr = y / size.tile.target.h - line_offset_y;
    return getLevelSprite(x / size.tile.target.w, line_nr);
}

function getLevelSprite(pos, line) {
    return current_level.level[line].charAt(pos);
}

function getIndicesOf(searchStr, str) {
    var startIndex = 0, searchStrLen = searchStr.length;
    var index, indices = [];
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function getLevelSpritePositions(type) {
    var positions = []
    current_level.level.forEach(function (linecontent, pos_y) {
            getIndicesOf(type, linecontent).forEach(function (pos_x) {
                    positions.push({x: pos_x, y: pos_y})
                }
            )
        }
    )
    return positions
}

function getLastLevelSpritePosition(type, x) {
    var pos
    positions = getLevelSpritePositions(type)
    positions.sort(function(a,b) { return a.x - b.x });
    positions.forEach(function (position) {
           if (!pos || (pos.x < position.x && position.x * size.tile.target.w <= x)){
               pos = position
           }
    })
    return pos
}

var blocks = {};
blocks['#'] = {sx:5, sy:0, collide:true, solid:true};
blocks['x'] = {sx:0, sy:0, collide:true, solid:true};
blocks['H'] = {sx:2, sy:2, collide:true, solid:true};
blocks['k'] = {sx:6, sy:0, collide:true, solid:true};
blocks['q'] = {sx:0, sy:2, collide:true, solid:true};
blocks['w'] = {sx:1, sy:2, collide:true, solid:true};
blocks['a'] = {sx:0, sy:3, collide:true, solid:true};
blocks['s'] = {sx:1, sy:3, collide:true, solid:true};
blocks['z'] = {sx:9, sy:9, collide:true, solid:true};
blocks['8'] = {sx:0, sy:6, collide:true, solid:true};
blocks['c'] = {sx:8, sy:9, collide:true, type:'coin' };
blocks['µ'] = {sx:13, sy:13, collide:true, solid:true, type:'hidden_block'};
blocks['y'] = {sx:13, sy:13, type:'respawn'};
blocks['~'] = {sx:9, sy:0, collide:true, type:'trampoline'};
blocks['ß'] = {sx:1, sy:11, collide:true, solid:true};
blocks['?'] = {sx:0, sy:11, collide:true, solid:true, type:'block_coin'};
blocks['B'] = {sx:1, sy:6, collide:true, type:'exit'};
blocks['h'] = {sx:12, sy:6, collide:true, deadly:true};
blocks['@'] = {sx:9, sy:2, collide:true, deadly:true};
blocks['p'] = {sx:0, sy:12, deadly:true, solid:true, type:'enemy_mushroom', speed_x:4};
blocks['/'] = {sx:0, sy:1};
blocks['^'] = {sx:1, sy:0};
blocks['ü'] = {sx:1, sy:1};
blocks['g'] = {sx:4, sy:1};
blocks['`'] = {sx:2, sy:1};
blocks['{'] = {sx:2, sy:0};
blocks['='] = {sx:3, sy:0};
blocks['}'] = {sx:4, sy:0};
blocks['1'] = {sx:0, sy:7};
blocks['2'] = {sx:1, sy:7};
blocks['3'] = {sx:2, sy:7};
blocks['4'] = {sx:0, sy:8};
blocks['5'] = {sx:1, sy:8};
blocks['6'] = {sx:2, sy:8};
blocks['b'] = {sx:13, sy:4};
blocks['\''] = {sx:2, sy:3};
blocks['°'] = {sx:3, sy:2};
blocks['R'] = {sx:3, sy:3};
blocks['|'] = {sx:3, sy:4};
blocks['*'] = {sx:1, sy:4};
blocks['W'] = {sx:0, sy:4};
blocks['U'] = {sx:2, sy:6};
blocks['O'] = {sx:1, sy:5};
blocks['X'] = {sx:2, sy:4};
blocks['l'] = {sx:0, sy:5};
blocks['j'] = {sx:2, sy:5};
blocks['('] = {sx:11, sy:0};
blocks[')'] = {sx:12, sy:0};
blocks['['] = {sx:11, sy:1};
blocks[']'] = {sx:12, sy:1};
blocks['j'] = {sx:2, sy:5};
blocks['Z'] = {sx:9, sy:9};
blocks['f'] = {sx:12, sy:2};


function getLevelObject(character) {
    var object = blocks[character];
    return object
}
