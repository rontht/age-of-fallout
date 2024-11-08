function spawn_sprites() {
    // Ground
    ground = factory.createGround();

    // Door
    door = factory.createDoor(430, 400);
    wall = factory.createDoor(14, 400);

    // Base
    base = factory.createBase();

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
    

}