function modifying_rooms() {
    for (let room of base) {
        // Building new rooms
        if (build_mode && room.mouse.presses() && kb.pressing('SHIFT')) {
            if (room.room_type === 0) {
                room.room_type = build_room_type;
            }
        } else if (build_mode && room.mouse.presses()) {
            if (room.room_type === 0) {
                room.room_type = build_room_type;
                build_mode = false;
            }
        }

        // Selling rooms
        if (salvage_mode && room.mouse.presses() && kb.pressing('SHIFT')) {
            if (room.room_type != 0) {
                room.room_type = 0;
            }
        } else if (salvage_mode && room.mouse.presses()) {
            if (room.room_type != 0) {
                room.room_type = 0;
                salvage_mode = false;
            }
        }
    }

    // not working yet. trying to force out of build_mode if all rooms has been built _______________________________
    // let all_built = this.base.every(room => room.room_type !== 0);
    // if (all_built === true) {
    //     this.build_mode = false;
    // }
}