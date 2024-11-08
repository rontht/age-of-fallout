let tray_opened = true;
let tray_speed = 8;

function bind_game_button_events() {
    if (game_quit_button.mouse.presses()) {
        current_screen = MENU;
        disable_buttons(game_buttons);
        game_setup = false;
        build_mode = false;
        salvage_mode = false;

        // remove all sprite groups
        ground.remove();
        wall.remove();
        door.remove();
        base.remove();
        rooms.remove();
        unit.remove();
        game_buttons.remove();
        game_menu_buttons.remove();
        info_panel.remove();
    }

    if (game_config_button.mouse.presses()) {
        console.log("Config, Under Construction!");
        // current_screen = CONFIG;
        // disable_game_buttons();
    }

    if (build_room_1.mouse.presses()) {
        if (armory_s_cost <= base.scraps && armory_c_cost <= base.caps) {
            console.log("ready to build armory");
            build_mode = true;
            salvage_mode = false;
            build_room_type = 1;
        } else {
            console.log("not enough resources to build armory");
        }
    }

    if (build_room_2.mouse.presses()) {
        if (lab_s_cost <= base.scraps && lab_c_cost <= base.caps) {
            console.log("ready to build lab");
            build_mode = true;
            salvage_mode = false;
            build_room_type = 2;
        } else {
            console.log("not enough resources to build lab");
        }
    }

    if (build_room_3.mouse.presses()) {
        if (bunker_s_cost <= base.scraps && bunker_c_cost <= base.caps) {
            console.log("ready to build bunker");
            build_mode = true;
            salvage_mode = false;
            build_room_type = 3;
        } else {
            console.log("not enough resources to build bunker");
        }
    }

    if (
        (mouse.presses('right') && (build_mode || salvage_mode)) ||
        toggle_button.mouse.presses()
    ) {
        build_mode = false;
        salvage_mode = false;
    }

    if (salvage_button.mouse.presses()) {
        if (salvage_mode) {
            build_mode = false;
            salvage_mode = false;
        } else if (!salvage_mode) {
            build_mode = false;
            salvage_mode = true;
        }
    }

    dropdown_build_buttons();
}

function dropdown_build_buttons() {
    // Dropdown
    let build_buttons = [build_room_1, build_room_2, build_room_3, build_room_4]
    if (toggle_button.mouse.presses()) {
        if (tray_opened) {
            tray_opened = false;
        } else if (!tray_opened) {
            tray_opened = true;
        }
    }

    // update buttons position
    if (tray_opened) {
        trayY = lerp(trayY, tray_target, 0.1);
        // update buttons position
        build_buttons.forEach((btn, i) => {
            btn.position.y = trayY + i * 70;
        });
    } else {
        trayY = lerp(trayY, 500, 0.1);
        // update buttons position
        build_buttons.forEach((btn, i) => {
            btn.position.y = trayY;
        });
    }

    if (tray_opened) {
        build_buttons_bg.h = lerp(build_buttons_bg.h, tray_height, 0.1); // Grow background
        build_buttons_bg.y = lerp(build_buttons_bg.y, tray_height * 2, 0.1); // Grow background
    } else {
        build_buttons_bg.h = lerp(build_buttons_bg.h, 1, 0.1); // Shrink background
        build_buttons_bg.y = lerp(build_buttons_bg.y, 520, 0.1); // Shrink background
    }

    // hide/show the buttons
    if (trayY < 500) {
        build_buttons.forEach((btn, i) => {
            btn.collider = 'n';
        });
    }


        // info_panel.visible = true;
    // } else {
        // info_panel.visible = false;
        // console.log('no');
    // }
}

function bind_menu_button_events() {
    if (play_button.mouse.presses()) {
        current_screen = GAME;
        disable_buttons(menu_buttons);
    }
    if (deck_button.mouse.presses()) {
        console.log("Deck, Under Construction!");
    }
    if (config_button.mouse.presses()) {
        console.log("Config, Under Construction!")
        // current_screen = CONFIG;
        // disable_menu_buttons();
    }
    if (exit_button.mouse.presses()) {
        console.log("Exit, Under Construction!");
    }
}

function enable_buttons(buttons) {
    for (let button of buttons) {
        button.visible = true;
        button.collider = 'k';
    }
}
function disable_buttons(buttons) {
    for (let button of buttons) {
        button.visible = false;
        button.collider = 'n';
    }
}