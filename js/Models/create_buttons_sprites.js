let trayY = 500;
let tray_height = 330;
let tray_target = 560;

function spawn_game_buttons() {
    // button configs
    let button_width = 100;
    let button_height = 30;
    let buttons_x = 15;

    // create new group for game buttons
    // should make this into factory _______________________________
    game_buttons = new Group();

    build_buttons_bg = factory.createBackground2(700 + buttons_x, 500, 500, 1, true);
    game_buttons.add(build_buttons_bg);
    
    build_room_1 = new Sprite();
    game_buttons.add(build_room_1);
    apply_button_style(build_room_1, 485 + buttons_x, trayY, 50, 50, "Arm");
    
    build_room_2 = new Sprite();
    game_buttons.add(build_room_2);
    apply_button_style(build_room_2, 485 + buttons_x, trayY + 50, 50, 50, "Lab");
    
    build_room_3 = new Sprite();
    game_buttons.add(build_room_3);
    apply_button_style(build_room_3, 485 + buttons_x, trayY + 100, 50, 50, "Bunk");

    build_room_4 = new Sprite();
    game_buttons.add(build_room_4);
    apply_button_style(build_room_4, 485 + buttons_x, trayY + 150, 50, 50, "New");
    
    main_buttons_bg = factory.createBackground(700 + buttons_x, 500, 500, 50, true);
    game_buttons.add(main_buttons_bg);
    
    toggle_button = new Sprite();
    game_buttons.add(toggle_button);
    apply_button_style(toggle_button, 650 + buttons_x, 500, 400, 50, "Build");

    salvage_button = new Sprite();
    game_buttons.add(salvage_button);
    apply_button_style(salvage_button, 900 + buttons_x, 500, 100, 50, "Salvage");









    game_menu_buttons = new Group();

    game_quit_button = new Sprite();
    game_menu_buttons.add(game_quit_button);
    apply_button_style(game_quit_button, 50, 15, button_width, button_height, "Quit");
    
    game_config_button = new Sprite();
    game_menu_buttons.add(game_config_button);
    apply_button_style(game_config_button, 150, 15, button_width, button_height, "Config");
}


function spawn_menu_buttons() {
    // button configs
    let button_x = W / 2;
    let button_y = H / 2;
    let button_width = 100;
    let button_height = 30;
    let button_space = 50;

    menu_buttons = new Group();

    // button sprites
    play_button = new Sprite();
    menu_buttons.add(play_button);
    apply_button_style(play_button, button_x, button_y + (button_space * 0), button_width, button_height, "Play");

    deck_button = new Sprite();
    menu_buttons.add(deck_button);
    apply_button_style(deck_button, button_x, button_y + (button_space * 1), button_width, button_height, "Deck");

    config_button = new Sprite();
    menu_buttons.add(config_button);
    apply_button_style(config_button, button_x, button_y + (button_space * 2), button_width, button_height, "Config");

    exit_button = new Sprite();
    menu_buttons.add(exit_button);
    apply_button_style(exit_button, button_x, button_y + (button_space * 3), button_width, button_height, "Exit");
}