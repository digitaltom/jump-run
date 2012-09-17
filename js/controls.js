// key based controls:

function hideControls() {
    document.getElementById("pad-controls").style.visibility = "hidden"
}

function registerControls() {
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
            case 27: // escape
                initGame()
            default:
                return;
        }
        return false;
    };

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
        return false;
    };


    // touch based controls:

    // TODO: hide on non-touch devices
    document.getElementById("pad-controls").style.visibility = "visible"

    // prevent scrolling
    document.body.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    var left = document.getElementById("control-left");
    left.addEventListener('mouseover', function (event) {
        held.right = false;
        held.left = true;
    }, false);
    left.addEventListener('touchstart', function (event) {
        held.right = false;
        held.left = true;
    }, false);
    left.addEventListener('mouseout', function (event) {
        held.right = false;
        held.left = false;
    }, false);
    left.addEventListener('touchend', function (event) {
        held.right = false;
        held.left = false;
    }, false);

    var up = document.getElementById("control-up");
    up.addEventListener('mouseover', function (event) {
        held.up = true;
    }, false);
    up.addEventListener('touchstart', function (event) {
        held.up = true;
    }, false);
    up.addEventListener('mouseout', function (event) {
        held.up = false;
    }, false);
    up.addEventListener('touchend', function (event) {
        held.up = false;
    }, false);

    var right = document.getElementById("control-right");
    right.addEventListener('mouseover', function (event) {
        held.left = false;
        held.right = true;
    }, false);
    right.addEventListener('touchstart', function (event) {
        held.left = false;
        held.right = true;
    }, false);
    right.addEventListener('mouseout', function (event) {
        held.left = false;
        held.right = false;
    }, false);
    right.addEventListener('touchend', function (event) {
        held.left = false;
        held.right = false;
    }, false);

}