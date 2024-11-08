class Loading {
    constructor() {

    }

    preload() {

    }

    setup() {
        this.timer = 30;
    }

    draw() {
        background('red');

        //Loading Text
        textSize(50);
        fill('white');
        text('Loading . . .', 0, H / 2);

        // timer for loading screen
        this.timer--;
        if (this.timer <= 0) {
            current_screen = MENU;
        }
    }
}

class Menu {
    constructor() {

    }

    preload() {

    }

    setup() {
        spawn_menu_buttons();
    }

    draw() {
        background('blue');

        // menu text
        textSize(30);
        fill('white');
        text('Main Menu', 30, 50);

        // add button functions
        enable_buttons(menu_buttons);
        bind_menu_button_events();
    }
}

class Game {
    constructor() {

    }

    preload() {

    }

    setup() {
        spawn_game_buttons();
        spawn_sprites();

        world.gravity.y = 20;
    }

    draw() {
        background('#7ec1cf');

        // add button functions
        enable_buttons(game_buttons);
        enable_buttons(game_menu_buttons);
        bind_game_button_events();

        // Controls
        movement_logic(unit, ground);
        door_logic(door);
        modifying_rooms();

        // test rect for scrolling
        fill("red");
        rect(0, 50, 1000, 100);
        fill("yellow");
        rect(1000, 50, 1000, 100);
        fill("green");
        rect(2000, 50, 1000, 100);

        // Update and draw sprites based on the adjusted camera position
        apply_scrolling_to_sprites(ground);
        apply_scrolling_to_sprites(door);
        apply_scrolling_to_sprites(wall);
        apply_scrolling_to_sprites(unit);

        for (let button of game_buttons) {
            apply_scrolling_to_sprites(button);
        }
    
        for (let object of base) {
            apply_scrolling_to_sprites(object);
        }
    }
}

class Config {
    constructor() {

    }

    preload() {

    }

    setup() {

    }

    draw() {
        background('yellow');

        //Menu Text
        textSize(30);
        fill('black');
        text('Menu', 30, 50);
    }
}