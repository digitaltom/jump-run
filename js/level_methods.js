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

function getLevelObject(character, index_x, index_y) {

    var object = { sx:null, sy:null, deadly:false };
    /* used characters: # x H k h / ^ ü g ` { = } @ 1 2 3 4 5 6 ?
     *                   ß q w a s b p \ ° R | * W U B O X l j ( ) [ ]]
     *                   z 8 */
    switch (character) {
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
        case 'H':
            object.sx = 2;
            object.sy = 2;
            collisionMap.push(object);
            break;
        case 'k':
            object.sx = 6;
            object.sy = 0;
            collisionMap.push(object);
            break;
        case 'h':
            object.sx = 12;
            object.sy = 6;
            object.deadly = true;
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
        case 'g':
            object.sx = 4;
            object.sy = 1;
            break;
        case '`':
            object.sx = 2;
            object.sy = 1;
            break;
        case '{':
            object.sx = 2;
            object.sy = 0;
            break;
        case '=':
            object.sx = 3;
            object.sy = 0;
            break;
        case '}':
            object.sx = 4;
            object.sy = 0;
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
        case '?':
            object.sx = 0;
            object.sy = 11;
            object.type = 'block_coin'
            collisionMap.push(object);
            break;
        case 'ß':
            object.sx = 1;
            object.sy = 11;
            collisionMap.push(object);
            break;
        case 'q':
            object.sx = 0;
            object.sy = 2;
            collisionMap.push(object);
            break;
        case 'w':
            object.sx = 1;
            object.sy = 2;
            collisionMap.push(object);
            break;
        case 'a':
            object.sx = 0;
            object.sy = 3;
            collisionMap.push(object);
            break;
        case 's':
            object.sx = 1;
            object.sy = 3;
            collisionMap.push(object);
            break;
        case 'b':
            object.sx = 13;
            object.sy = 4;
            break;
        case 'p':
            object.sx = 0;
            object.sy = 12;
            object.deadly = true;
            object.type = "enemy_mushroom"
            object.speed_x = 4
            items.push(object);
            replaceLevelSprite(index_x, index_y - line_offset_y, " ");
            break;
        case '\'':
            object.sx = 2;
            object.sy = 3;
            break;
        case '°':
            object.sx = 3;
            object.sy = 2;
            break;
        case 'R':
            object.sx = 3;
            object.sy = 3;
            break;
        case '|':
            object.sx = 3;
            object.sy = 4;
            break;
        case '*':
            object.sx = 1;
            object.sy = 4;
            break;
        case 'W':
            object.sx = 0;
            object.sy = 4;
            break;
        case 'U':
            object.sx = 2;
            object.sy = 6;
            break;
        case 'B':
            object.sx = 1;
            object.sy = 6;
            object.type = 'exit'
            collisionMap.push(object);
            break;
        case 'O':
            object.sx = 1;
            object.sy = 5;
            break;
        case 'X':
            object.sx = 2;
            object.sy = 4;
            break;
        case 'l':
            object.sx = 0;
            object.sy = 5;
            break;
        case 'j':
            object.sx = 2;
            object.sy = 5;
            break;
        case '(':
            object.sx = 11;
            object.sy = 0;
            break;
        case ')':
            object.sx = 12;
            object.sy = 0;
            break;
        case '[':
            object.sx = 11;
            object.sy = 1;
            break;
        case ']':
            object.sx = 12;
            object.sy = 1;
            break;
        case 'z':
            object.sx = 9;
            object.sy = 9;
            collisionMap.push(object);
            break;
        case '8':
            object.sx = 0;
            object.sy = 6;
            collisionMap.push(object);
            break;
        default:
    }
    return object;
}