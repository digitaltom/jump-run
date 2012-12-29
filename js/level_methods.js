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

var blocks = {};
blocks['#'] = {sx: 5, sy: 0, collide: true};
blocks['x'] = {sx: 0, sy: 0, collide: true};
blocks['H'] = {sx: 2, sy: 2, collide: true};
blocks['k'] = {sx: 6, sy: 0, collide: true};
blocks['q'] = {sx: 0, sy: 2, collide: true};
blocks['w'] = {sx: 1, sy: 2, collide: true};
blocks['a'] = {sx: 0, sy: 3, collide: true};
blocks['s'] = {sx: 1, sy: 3, collide: true};
blocks['z'] = {sx: 9, sy: 9, collide: true};
blocks['8'] = {sx: 0, sy: 6, collide: true};
blocks['c'] = {sx: 8, sy: 9, collide: true, type:'coin' };
blocks['µ'] = {sx: 13, sy: 13, collide: true, type: 'hidden_block'};
blocks['ß'] = {sx: 1, sy: 11, collide: true};
blocks['?'] = {sx: 0, sy: 11, collide: true, type: 'block_coin'};
blocks['B'] = {sx: 1, sy: 6, collide: true, type: 'exit'};
blocks['h'] = {sx: 12, sy: 6, collide: true, deadly: true};
blocks['@'] = {sx: 9, sy: 2, collide: true, deadly: true};
blocks['p'] = {sx: 0, sy: 12, deadly: true, type: 'enemy_mushroom', speed_x: 4};
blocks['/'] = {sx: 0, sy: 1};
blocks['^'] = {sx: 1, sy: 0};
blocks['ü'] = {sx: 1, sy: 1};
blocks['g'] = {sx: 4, sy: 1};
blocks['`'] = {sx: 2, sy: 1};
blocks['{'] = {sx: 2, sy: 0};
blocks['='] = {sx: 3, sy: 0};
blocks['}'] = {sx: 4, sy: 0};
blocks['1'] = {sx: 0, sy: 7};
blocks['2'] = {sx: 1, sy: 7};
blocks['3'] = {sx: 2, sy: 7};
blocks['4'] = {sx: 0, sy: 8};
blocks['5'] = {sx: 1, sy: 8};
blocks['6'] = {sx: 2, sy: 8};
blocks['b'] = {sx: 13, sy: 4};
blocks['\''] = {sx: 2, sy: 3};
blocks['°'] = {sx: 3, sy: 2};
blocks['R'] = {sx: 3, sy: 3};
blocks['|'] = {sx: 3, sy: 4};
blocks['*'] = {sx: 1, sy: 4};
blocks['W'] = {sx: 0, sy: 4};
blocks['U'] = {sx: 2, sy: 6};
blocks['O'] = {sx: 1, sy: 5};
blocks['X'] = {sx: 2, sy: 4};
blocks['l'] = {sx: 0, sy: 5};
blocks['j'] = {sx: 2, sy: 5};
blocks['('] = {sx: 11, sy: 0};
blocks[')'] = {sx: 12, sy: 0};
blocks['['] = {sx: 11, sy: 1};
blocks[']'] = {sx: 12, sy: 1};
blocks['j'] = {sx: 2, sy: 5};
blocks['Z'] = {sx: 9, sy: 9};
blocks['f'] = {sx: 12, sy: 2};



function getLevelObject(character, index_x, index_y) {
    var object = blocks[character];
    return object
}
