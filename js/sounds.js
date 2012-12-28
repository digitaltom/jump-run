var sounds = {}

function preload_sounds() {
    if (sounds[theme] == null) {
        sounds[theme] = {}
        sounds[theme]['theme'] = new Audio("themes/" + theme + "/sounds/theme.mp3")
        sounds[theme]['jump'] = new Audio("themes/" + theme + "/sounds/jump.mp3")
        sounds[theme]['jump_on_enemy'] = new Audio("themes/" + theme + "/sounds/jump_on_enemy.mp3")
        sounds[theme]['coin'] = new Audio("themes/" + theme + "/sounds/coin.mp3")
        sounds[theme]['dead'] = new Audio("themes/" + theme + "/sounds/die.mp3")
        sounds[theme]['success'] = new Audio("themes/" + theme + "/sounds/success.mp3")
    }
}


function sound_theme() {
    sounds[theme]['theme'].play()
}

function sound_coin() {
    sounds[theme]['coin'].play()
}

function sound_dead() {
    sounds[theme]['dead'].play()
}

function sound_jump() {
    sounds[theme]['jump'].play()
}

function sound_jump_on_enemy() {
    sounds[theme]['jump_on_enemy'].play()
}

function sound_success() {
    sounds[theme]['success'].play()
}