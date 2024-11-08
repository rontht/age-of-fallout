class Factory {
    constructor() {

    }

    preload() {
        this.armory = loadImage("assets/images/rooms/armory.png");
        this.lab = loadImage("assets/images/rooms/lab.png");
        this.bunker = loadImage("assets/images/rooms/bunker.png");
        this.wall = loadImage("assets/images/rooms/wall.png");
        this.salvage_icon = loadImage("assets/images/icons/salvage.png");
        this.build_icon = loadImage("assets/images/icons/build.png");
    }

    setup() {

    }

    draw() {

    }

    createGround() {
        let object = new Sprite(W / 2 + 420, 446);
        object.w = 10000;
        object.h = 10;
        object.color = 'black';
        object.collider = 's';
        return object;
    }

    createBase() {
        let object = new Sprite(210, 595);
        // visual
        object.draw = () => {
            strokeWeight(0);
            fill('#1f1f1f');
            // walls
            rect(-200, 0, 20, 520); // left wall
            rect(220, 55, 20, 420); // right wall
            rect(10, -250, 440, 20); // top wall

            // floors
            rect(10, -150, 400, 10);
            rect(10, -50, 400, 10);
            rect(10, 50, 400, 10);
            rect(10, 150, 400, 10);
            rect(10, 250, 400, 10);

            // texts
            textSize(12);
            text('G, for team assembly', -190, -230);
            text('F1', -190, -135);
            text('F2', -190, -35);
            text('F3', -190, 65);
            text('F4', -190, 165);
        }
        object.collider = 's';

        return object;
    }

    createRoom(x, y) {
        let object = new Sprite(x, y);
        object.w = 100;
        object.h = 90;
        // visual
        object.draw = () => {
            tint(255, 150);
            image(this.wall, 0, 0, 100, 90);
            tint(255, 255);
            if ((build_mode && object.room_type === 0 && object.mouse.hovering())) {
                this.change_room_img(build_room_type);
                fill(3, 252, 53, this.dim());
                rect(0, 0, 100, 90);
            }

            this.change_room_img(object.room_type);
            // rect(0, 0, 100, 90);

            // indicate available rooms for building
            if (build_mode && object.room_type === 0 && !object.mouse.hovering()) {
                image(this.build_icon, 0, 0, 30, 30);
            }
            
            // indicate available rooms for salvaging
            if (salvage_mode && object.room_type != 0 && !object.mouse.hovering()) {
                image(this.salvage_icon, 0, 0, 30, 30);
            }

            if (((salvage_mode && object.room_type != 0 && object.mouse.hovering()))) {
                fill(252, 3, 3, this.dim());
                rect(0, 0, 100, 90);
            }
        }
        object.room_type = 0;
        object.collider = 's';

        return object;
    }

    createDoor(x, y) {
        let object = new Sprite(x, y);
        object.w = 10;
        object.h = 100;
        object.color = 'red';
        object.collider = 's';
        // object.debug= true;
        return object;
    }

    createHero(x, y) {
        let object = new Sprite(x, y);
        object.w = 20;
        object.h = 50;
        object.collider = 'd';
        object.immovable = true;
        object.rotationLock = true;
        object.friction = 0;
        // object.debug= true;
        return object;
    }

    createGarage() {

    }

    createBackground(x, y, w, h, visible) {
        let object = new Sprite(x, y);
        object.w = w;
        object.h = h;
        object.color = "gray";
        object.collider = 'n';
        object.visible = visible;
        return object;
    }



    /////////////
    //functions//
    /////////////

    change_room_img(id) {
        switch (id) {
            case 0:
                
                break;
            case 1:
                image(this.armory, 0, 0, 100, 90);
                break;
            case 2:
                image(this.lab, 0, 0, 100, 90);
                break;
            case 3:
                image(this.bunker, 0, 0, 100, 90);
                break;
        }
    }

    dim() {
        dim += dim_step;
        // Reverse direction when bounds are hit
        if (dim >= 100 || dim <= 50) {
            dim_step = -dim_step;
        }
        return dim;
    }
}