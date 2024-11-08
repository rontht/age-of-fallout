let armory_c_cost = 10;
let armory_s_cost = 100;

let lab_c_cost = 50;
let lab_s_cost = 200;

let bunker_c_cost = 50;
let bunker_s_cost = 50;

function modifying_rooms() {
    for (let room of rooms) {
        // Building new rooms
        if (build_mode) {
            if (room.mouse.presses() && kb.pressing('SHIFT')) {
                if (room.room_type === 0) {
                    build_room(room, base);
                }
            } else if (room.mouse.presses()) {
                if (room.room_type === 0) {
                    build_room(room, base);
                    build_mode = false;
                }
            }
        }

        // Selling rooms
        if (salvage_mode) {
            if (room.mouse.presses() && kb.pressing('SHIFT')) {
                if (room.room_type != 0) {
                    room.room_type = 0;
                }
            } else if (room.mouse.presses()) {
                if (room.room_type != 0) {
                    room.room_type = 0;
                    salvage_mode = false;
                }
            }
        }
    }

    // not working yet. trying to force out of build_mode if all rooms has been built _______________________________
    // let all_built = this.base.every(room => room.room_type !== 0);
    // if (all_built === true) {
    //     this.build_mode = false;
    // }
}

function build_room(room, base) {
    room.room_type = build_room_type;
    switch (build_room_type) {
        case 0:

            break;
        case 1:
            base.caps -= armory_c_cost;
            base.scraps -= armory_s_cost;
            break;
        case 2:
            base.caps -= lab_c_cost;
            base.scraps -= lab_s_cost;
            break;
        case 3:
            base.caps -= bunker_c_cost;
            base.scraps -= bunker_s_cost;

            break;
    }
}