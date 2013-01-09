// key based controls:

function hideControls() {
    document.getElementById("pad-controls").style.visibility = "hidden"
    enable_default_touch()
}

function is_touch_device() {
    return !!('ontouchstart' in window);
}

function preventDefault(event) {
  event.preventDefault();
}

// prevent scrolling etc
function disable_default_touch() {
    document.body.addEventListener('touchmove', preventDefault, false);
    document.body.addEventListener('touchstart', preventDefault, false);
    document.body.addEventListener('touchend', preventDefault, false);
}

// re-enable touch events for menu
function enable_default_touch() {
    document.body.removeEventListener('touchmove', preventDefault, false);
    document.body.removeEventListener('touchstart', preventDefault, false);
    document.body.removeEventListener('touchend', preventDefault, false);
}


function registerControls() {
    window.onkeydown = function (e) {
        e.preventDefault();
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
            case 27: // escape
                initGame()
            default:
                return;
        }
        return false;
    };

    window.onkeyup = function (e) {
        e.preventDefault();
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
        return false;
    };


    // touch based controls:

    if (is_touch_device()) {
        if (document.getElementById("github-fork-me")) {
            document.getElementById("github-fork-me").style.visibility = "hidden"
        }
        document.getElementById("pad-controls").style.visibility = "visible"
    }

    // prevent scrolling etc
    disable_default_touch()


    var left = document.getElementById("control-left");
    left.addEventListener('touchstart', function (event) {
        held.right = false;
        held.left = true;
        left.style.backgroundImage = "url('images/arrow-left-active.png')"
    }, false);
    left.addEventListener('touchend', function (event) {
        held.right = false;
        held.left = false;
        left.style.backgroundImage = "url('images/arrow-left.png')"
    }, false);

    var up = document.getElementById("control-up");
    up.addEventListener('touchstart', function (event) {
        held.up = true;
        up.style.backgroundImage = "url('images/arrow-up-active.png')"
    }, false);
    up.addEventListener('touchend', function (event) {
        held.up = false;
        up.style.backgroundImage = "url('images/arrow-up.png')"
    }, false);

    var right = document.getElementById("control-right");
    right.addEventListener('touchstart', function (event) {
        held.left = false;
        held.right = true;
        right.style.backgroundImage = "url('images/arrow-right-active.png')"
    }, false);
    right.addEventListener('touchend', function (event) {
        held.left = false;
        held.right = false;
        right.style.backgroundImage = "url('images/arrow-right.png')"
    }, false);

}