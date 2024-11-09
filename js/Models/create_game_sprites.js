let lastTime = 0;
let z_enemy_count = 4;
let d_enemy_count = 0;
let enemy_limiter = 0;
let initial_position = 1000;

function spawn_sprites() {
    // Ground
    ground = factory.createGround();

    // Door
    door = factory.createDoor(430, 400);
    //door2 = factory.createDoor(1500, 400);
    
    wall = factory.createBackWall(14, 400);

    // Base
    base = factory.createBase();
    //base2 = factory.createBase2();

    entrance = factory.createEntrance();

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
    //Max Spawn Logic
    // Check for time passed.
    if (currentTime - lastTime >= 10000) {
    let total_spawn = z_enemy_count + d_enemy_count; // Total number of enemies to spawn
    let max_spawn = 6;

    // Spawn enemies based on current counts and limits
    for (let i = 0; i < total_spawn; i++) {
        if (i < z_enemy_count) {
        enemy_bases.push(factory.enemy_type_z(initial_position, 400));
    } else {
        enemy_bases.push(factory.enemy_type_d(initial_position, 400));
        }
      initial_position += 20; // Space out enemies
    }

    // Adjust counters and spawn limit according to the pattern
    if (z_enemy_count < 6 - enemy_limiter) {
        z_enemy_count += 1;
    } else if (d_enemy_count < max_spawn) {
      // Only spawn 'd' enemies if there are less than 6 'd' enemies
        d_enemy_count += 1;
        z_enemy_count = 0; // Reset 'z' count after spawning 6 'z' enemies
        enemy_limiter += 1; // Increase the limiter to reduce 'z' spawns in next cycles
    }

    enemy_bases.overlaps(enemy_bases);

        lastTime = currentTime;
        initial_position = 1000;
    }
    
}