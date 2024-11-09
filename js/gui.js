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
        this.sky_bg = loadImage("assets/images/backgrounds/sky.png");
        this.ground_bg = loadImage("assets/images/backgrounds/ground.png");
    }

    setup() {
        spawn_sprites();
        spawn_game_buttons();

        world.gravity.y = 20;
    }

    draw() {
        // spawn_enemy();
        background('#7ec1cf');
        // add button functions
        enable_buttons(game_buttons);
        enable_buttons(game_menu_buttons);
        bind_game_button_events();

        image(this.sky_bg, 0, 0, 3000, 445);
        image(this.ground_bg, 0, 445, 3000, 450);

        // Controls
        // movement_logic(unit, ground);
        // door_logic(door);
        modifying_rooms();

        // Update and draw sprites based on the adjusted camera position
        apply_scrolling_to_sprites(ground);
        apply_scrolling_to_sprites(door);
        apply_scrolling_to_sprites(wall);
        apply_scrolling_to_sprites(entrance);
        apply_scrolling_to_sprites(base);
        
        for (let unit of units) {
            apply_scrolling_to_sprites(unit);
            movement_logic(unit);

            if (unit.team) {
                unit.overlaps(door);
            }
        }

        for (let base of enemy_bases) {
            apply_scrolling_to_sprites(base);
        }

        for (let room of rooms) {
            apply_scrolling_to_sprites(room);
        }

        // for testing
        if(door.mouse.presses()) {
            base.current_hp -= 50;
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
        textSize(12);
    }
}