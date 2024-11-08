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
        spawn_sprites();
        spawn_game_buttons();

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
        rect(0, 50, 1000, 10);
        fill("yellow");
        rect(1000, 50, 1000, 10);
        fill("green");
        rect(2000, 50, 1000, 10);

        textSize(12);
        fill('black');
        text("Caps: " + base.caps, 10, 150 -20);
        text("Scraps: " + base.scraps, 10, 150);
        text("Empty: " + this.count_rooms(0), 10, 150 + 20);
        text("Armory: " + this.count_rooms(1), 10, 150 + 40);
        text("Lab: " + this.count_rooms(2), 10, 150 + 60);
        text("Bunker: " + this.count_rooms(3), 10, 150 + 80);

        // Update and draw sprites based on the adjusted camera position
        apply_scrolling_to_sprites(ground);
        apply_scrolling_to_sprites(door);
        apply_scrolling_to_sprites(wall);
        apply_scrolling_to_sprites(unit);
        apply_scrolling_to_sprites(base);


        for (let enemy_bases of enemy_bases) {
            apply_scrolling_to_sprites(enemy_bases);
        }

        //apply_scrolling_to_sprites(base2);
        //apply_scrolling_to_sprites(door2);

        for (let button of game_buttons) {
            apply_scrolling_to_sprites(button);
        }

        for (let room of rooms) {
            apply_scrolling_to_sprites(room);
        }
    }

    count_rooms(id) {
        let count = 0;
        rooms.forEach(room => {
            if (room.room_type === id) {
                count++;
            }
        });
        return count;
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