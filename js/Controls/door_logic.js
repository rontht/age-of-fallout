let open_door = false;
let close_door = false;
let start_timer = false;
let door_timer = 0;

function door_logic(door) {
    // space bar press to open the door
    if (kb.presses('space') && !open_door && !close_door) {
        door_timer = 60; // reset timer
        open_door = true; // start opening door
    }

    // open the door
    if (open_door === true) {
        door.y -= 10;
        if (door.y <= 300) { // stop at open position
            door.y = 300;
            open_door = false;
            start_timer = true; // start timer when door fully opens
        }
    }

    // countdown timer if door is open
    if (start_timer === true) {
        if (door_timer > 0) {
            door_timer--;
        } else {
            start_timer = false;
            close_door = true; // start closing door
        }
    }

    // close the door
    if (close_door === true) {
        door.y += 10;
        if (door.y >= 400) { // stop at closed position
            door.y = 400;
            close_door = false;
        }
    }
}