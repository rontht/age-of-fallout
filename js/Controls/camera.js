let cameraX = 0;
let max_scroll_speed = 20;
let min_scroll_speed = 10;
let initial_x = null;

function enable_scrolling() {
    if (kb.pressing('e')) {
        cameraX += min_scroll_speed;
    } else if (kb.pressing('q') && cameraX > 0) {
        cameraX -= min_scroll_speed;
    }

    if (mouse.pressing('center')) {
        if (initial_x === null) {
            initial_x = mouse.x;
        }

        // calculate scroll speed based on mouse_distance
        let mouse_distance = mouse.x - initial_x;
        let scroll_speed = map(Math.abs(mouse_distance), 0, 300, min_scroll_speed, max_scroll_speed);

        if (initial_x > mouse.x) {
            cameraX += scroll_speed;
        } else if (initial_x < mouse.x) {
            cameraX -= scroll_speed;
        }
    } else {
        initial_x = null;
    }

    cameraX = constrain(cameraX, 0, 1500);
}

function apply_scrolling_to_sprites(object) {
    object.position.x -= cameraX;
    object.draw();
    object.position.x += cameraX;
}