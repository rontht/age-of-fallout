function spawn_sprites() {
    // Ground
    ground = factory.createGround();

    // Door
    door = factory.createDoor(430, 400);
    wall = factory.createDoor(14, 400);

    // Base
    base = new Group();
    // Building
    base.push(factory.createBase());

    // Rooms
    // F1
    base.push(factory.createRoom(70, 495));
    base.push(factory.createRoom(170, 495));
    base.push(factory.createRoom(270, 495));
    base.push(factory.createRoom(370, 495));
    // F2
    base.push(factory.createRoom(70, 595));
    base.push(factory.createRoom(170, 595));
    base.push(factory.createRoom(270, 595));
    base.push(factory.createRoom(370, 595));
    // F3
    base.push(factory.createRoom(70, 695));
    base.push(factory.createRoom(170, 695));
    base.push(factory.createRoom(270, 695));
    base.push(factory.createRoom(370, 695));
    // F4
    base.push(factory.createRoom(70, 795));
    base.push(factory.createRoom(170, 795));
    base.push(factory.createRoom(270, 795));
    base.push(factory.createRoom(370, 795));

    // Units
    // unit = new Group();
    // unit.push(factory.createHero(550, 400));
    unit = factory.createHero();
    // door.bounce(unit);
}