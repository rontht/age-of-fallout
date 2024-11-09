// initiating classes
let factory = new Factory();
let game = new Game();
let loading = new Loading();
let menu = new Menu();
let config = new Config();

// const W = window.innerWidth; //1500
// const H = window.innerHeight*0.99; //850
const W = 1500; //1500
const H = 850; //850

// for screen states
const LOADING = 0;
const MENU = 1;
const GAME = 2;
const CONFIG = 3;

// first screen state
let current_screen = MENU;

// check if game is already setup or not
let game_setup = false;
let build_mode = false;
let salvage_mode = false;
let build_room_type = 0;

// for room hover effects
let dim = 50;
let dim_step = 3;

function preload() {
    game.preload();
    menu.preload();
    loading.preload();
    config.preload();
    factory.preload();
}

function setup() {
    rectMode(CORNER)
    canvas = new Canvas(W, H);
    // setup band-aid
    menu.setup();
    loading.setup();
    config.setup();
}

function draw() {
    // switches screen states
    switch (current_screen) {
        case LOADING:
            loading.draw();
            break;
        case MENU:
            menu.draw();
            break;
        case GAME:
            draw_game();
            break;
        case CONFIG:
            config.draw();
            break;
    }
}

function draw_game() {
    // Game Setup
    if (game_setup == false) {
        game.setup();
        game_setup = true;
    }

    // Handle horizontal scrolling
    enable_scrolling();

    // Apply the horizontal translation for scrolling
    push();
    translate(-cameraX, 0);

    // Game Draw
    game.draw();

    // End translation
    pop();
}