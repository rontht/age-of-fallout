let trayY = 500;
let tray_height = 300;
let tray_target = 600;

function spawn_game_buttons() {
    // button configs
    let button_width = 100;
    let button_height = 30;

    // create new group for game buttons
    // should make this into factory _______________________________
    game_buttons = new Group();

    build_buttons_bg = factory.createBackground(700, 500, 500, 1, true);
    game_buttons.add(build_buttons_bg);
    
    build_room_1 = new Sprite();
    game_buttons.add(build_room_1);
    apply_button_style(build_room_1, 600, trayY, button_width * 2, button_height, "Armory");
    
    build_room_2 = new Sprite();
    game_buttons.add(build_room_2);
    apply_button_style(build_room_2, 600, trayY + 50, button_width * 2, button_height, "Lab");
    
    build_room_3 = new Sprite();
    game_buttons.add(build_room_3);
    apply_button_style(build_room_3, 600, trayY + 100, button_width * 2, button_height, "Bunker");
    
    main_buttons_bg = factory.createBackground(700, 500, 500, 50, true);
    game_buttons.add(main_buttons_bg);
    
    toggle_button = new Sprite();
    game_buttons.add(toggle_button);
    apply_button_style(toggle_button, 550, 500, button_width, button_height, "Build");

    salvage_button = new Sprite();
    game_buttons.add(salvage_button);
    apply_button_style(salvage_button, 650, 500, button_width, button_height, "Salvage");






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