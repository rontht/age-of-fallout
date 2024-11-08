let lastTime = 0;

function spawn_sprites() {
    // Ground
    ground = factory.createGround();

    // Door
    door = factory.createDoor(430, 400);
    //door2 = factory.createDoor(1500, 400);
    
    wall = factory.createDoor(14, 400);

    // Base
    base = factory.createBase();
    //base2 = factory.createBase2();

    // Rooms
    rooms = new Group();
    // F1
    rooms.push(factory.createRoom(70, 495));
    rooms.push(factory.createRoom(170, 495));
    rooms.push(factory.createRoom(270, 495));
    rooms.push(factory.createRoom(370, 495));
    // F2
    rooms.push(factory.createRoom(70, 595));
    rooms.push(factory.createRoom(170, 595));
    rooms.push(factory.createRoom(270, 595));
    rooms.push(factory.createRoom(370, 595));
    // F3
    rooms.push(factory.createRoom(70, 695));
    rooms.push(factory.createRoom(170, 695));
    rooms.push(factory.createRoom(270, 695));
    rooms.push(factory.createRoom(370, 695));
    // F4
    rooms.push(factory.createRoom(70, 795));
    rooms.push(factory.createRoom(170, 795));
    rooms.push(factory.createRoom(270, 795));
    rooms.push(factory.createRoom(370, 795));

    // Units
    // units = new Group();
    unit = factory.createHero();

    ///////////
    // Enemy //
    ///////////

    enemy_bases = new Group();
    enemy_bases.push(factory.createEnemySpawn(1000, 400));
}

function spawn_enemy() {
    let currentTime = millis();

    // Check if 60 seconds (60,000 ms) have passed since the last sprite was created
    if (currentTime - lastTime >= 1000) {

        //enemy_bases.push(factory.createEnemySpawn(3000, 400));

        // Update lastTime to the current time
        lastTime = currentTime;
    }
}