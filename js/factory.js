class Factory {
    constructor() {

    }

    preload() {
        this.armory = loadImage("assets/images/rooms/armory.png");
        this.lab = loadImage("assets/images/rooms/lab.png");
        this.bunker = loadImage("assets/images/rooms/bunker.png");
        this.wall = loadImage("assets/images/rooms/wall.png");
        this.entrance = loadImage("assets/images/rooms/entrance.png");
        this.vault_door = loadImage("assets/images/rooms/vault_door.png");
        this.salvage_icon = loadImage("assets/images/icons/salvage.png");
        this.build_icon = loadImage("assets/images/icons/build.png");
        this.cap = loadImage("assets/images/icons/cap.png");
        this.scrap = loadImage("assets/images/icons/scrap.png");

        // this.unit_idle_ani = loadAni("assets/images/units/idle/idle.png", {
        //     width: 32, height: 45, frames: 4
        // });
        // this.unit_walk_ani = loadAni("assets/images/units/walk/walk.png", {
        //     width: 32, height: 45, frames: 6
        // });
        this.unit_idle_ani = loadAnimation("assets/images/units/idle/idle_1.png", 4);
        this.unit_walk_ani = loadAnimation("assets/images/units/walk/walk_1.png", 6);

        this.unit_idle_ani.frameDelay = 10;
        this.unit_walk_ani.frameDelay = 6;
    }

    setup() {

    }

    draw() {

    }

    createGround() {
        let object = new Sprite(W / 2 + 420, 446);
        object.w = 10000;
        object.h = 10;
        object.color = '#3f1f15';
        object.stroke = '#3f1f15';
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

        // Stats
        object.max_hp = 500;
        object.current_hp = 500;
        object.caps = 100;
        object.scraps = 1000;

        return object;
    }

    createEntrance() {
        let object = new Sprite(220, 400);
        object.draw = () => {
            image(this.entrance, 0, 0, 400, 90);
        }
        object.layer = 100;
        object.collider = 'n';
        return object;
    }

    createBase2() {
        let object = new Sprite(210, 595);
        // visual
        object.draw = () => {
            tint(255, 150);
            let imageW = 100;
            let imageH = 99;
            let startX = 3950;
            let startY = -98
            for(let row = 0; row < 4; row++){
                for(let col = 0; col < 4; col++){
                image(this.wall, startX + col * imageW, startY + row * imageH, 100, 90);
                }
            }

            //image(this.wall, 1000, 0, 100, 90);
            strokeWeight(0);
            fill('#1f1f1f');
            // walls
            rect(4280, 0, 20, 520); // left wall
            rect(3890, 55, 20, 420); // right wall
            rect(4100, -250, 440, 20); // top wall

            // floors
            rect(4100, -150, 400, 10);
            rect(4100, -50, 400, 10);
            rect(4100, 50, 400, 10);
            rect(4100, 150, 400, 10);
            rect(4100, 250, 400, 10);
        }
        object.collider = 's';

        object.caps = 100;
        object.scraps = 1000;

        return object;
    }

    createEnemySpawn(x, y){
        let object = new Sprite(x, y);
        object.w = 100;
        object.h = 50;
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
        object.w = 20;
        object.h = 100;
        object.draw = () => {
            image(this.vault_door, 0, 0, 20, 110);
        }
        object.color = 'red';
        object.collider = 's';
        // object.debug= true;
        return object;
    }

    createBackWall(x, y) {
        let object = new Sprite(x, y);
        object.w = 10;
        object.h = 100;
        object.color = 'red';
        object.collider = 's';
        // object.debug= true;
        return object;
    }

    createUnit(x, y, team, hp, damage) {
        let object = new Sprite(x, y);
        object.w = 70;
        object.h = 100;
        object.collider = 'd';
        object.immovable = true;
        object.addAni('walk', this.unit_walk_ani);
        object.addAni('idle', this.unit_idle_ani);
        object.rotationLock = true;
        object.friction = 0;
        object.layer = 1;
        object.scale = 0.5;
        // object.debug= true;

        // Stats
        object.team = team;
        object.hp = hp;
        object.damage = damage;

        return object;
    }

    
    createEnemy(){
        let object = new Sprite(x, y);
        object.w = 20;
        object.h = 50;
    }


    createBackground(x, y, w, h, visible) {
        let object = new Sprite(x, y);
        object.w = w;
        object.h = h;
        object.strokeWeight = 0;
        object.color = "#be6021";
        object.collider = 'n';
        object.visible = visible;
        return object;
    }

    createBuildInfo(x, y, w, h, visible) {
        let object = new Sprite(x, y);
        object.w = w;
        object.h = h;
        object.draw = () => {
            fill('#be6021');
            rect(0, -5, object.w, object.h);

            if (build_buttons_bg.h > tray_height -50) {

                textSize(15);
                this.change_colors(armory_c_cost, base.caps);
                text('Caps cost: ' + armory_c_cost, -150, -105);
                this.change_colors(armory_s_cost, base.scraps);
                text('Scraps cost: ' + armory_s_cost, -150, -85);
                
                this.change_colors(lab_c_cost, base.caps);
                text('Caps cost: ' + lab_c_cost, -150, -105 + 70);
                this.change_colors(lab_s_cost, base.scraps);
                text('Scraps cost: ' + lab_s_cost, -150, -85 + 70);
                
                this.change_colors(bunker_c_cost, base.caps);
                text('Caps cost: ' + bunker_c_cost, -150, -105 + 140);
                this.change_colors(bunker_s_cost, base.scraps);
                text('Scraps cost: ' + bunker_s_cost, -150, -85 + 140);
    
                text('Caps cost: ' + 20, -150, -105 + 210);
                text('Scraps cost: ' + 100, -150, -85 + 210);

                textSize(25);
                fill('white');
                text(this.count_rooms(1), -180, -95);
                text(this.count_rooms(2), -180, -95 + 70);
                text(this.count_rooms(3), -180, -95 + 140);
            }
        }
        object.color = "#39180f";
        object.collider = 'n';
        object.visible = visible;
        return object;
    }

    createInfoUI(x, y, w, h, visible) {
        let object = new Sprite(x, y);
        object.w = w;
        object.h = h;
        object.draw = () => {
            stroke('#9f6b61');
            strokeWeight(5);
            fill('#2d140f');
            rect(0, -5, object.w, object.h, 10);
            line(45, -object.h/2 -5, 45, object.h/2 - 5);
            
            // Resource and other stats

            // Hit Point display
            textSize(12);
            strokeWeight(0);
            fill('white');
            text("Vault Door HP: " + base.current_hp + "/" + base.max_hp, 90, -150);
            rectMode(CORNER);
            let bar_width = 335;
            let percentage = base.current_hp/base.max_hp
            let hp = percentage * bar_width;
            if (percentage*100 < 70 && percentage*100 >= 30) {
                fill('yellow')
            } else if (percentage*100 < 30) {
                fill('red');
            } else {
                fill('green');
            }
            rect(90, -140, hp, 9);

            // Tips display
            fill('white');
            textSize(20);
            text("Tips", -450, -90);
            textSize(12);
            text('- use "Q" and "E" OR middle-mouse button to scroll.', -450, -60);
            text('- press right mouse button to cancel build or salvage actions.', -450, -30);
            text('- tip 3', -450, 0);


            // Caps display
            fill('#be6021');
            rect(100, -110, 150, 50, 10);
            rect(265, -110, 150, 50, 10);
            rect(140, -120, 70, 25, 10);
            rect(305, -120, 70, 25, 10);
            image(this.cap, 125, -85, 25, 25);
            image(this.scrap, 290, -85, 33, 30);
            textSize(18);
            fill('white');
            textAlign(CENTER);
            text(base.caps, 190, -80);
            text(base.scraps, 350, -80);
            textSize(13);
            text("Caps", 175, -108);
            text("Scraps", 340, -108);
        }
        object.color = "#2d140f";
        object.collider = 'n';
        object.visible = visible;
        return object;
    }

    //______ Function to mass apply stats ______//
    apply_default_stats(object, health, armor, damage, attack_speed, attack_range, search_range, movement_speed) {
        // target finding stats
        object.default_search_range = search_range; // hold default search range (should not be changed)
        object.current_search_range = search_range; // hold current search range (can be changed)
        //object.target_node = null;
        //object.target_node_distance = Infinity;
        object.target_enemy = null;
        object.target_enemy_distance = Infinity;

        // unit stats
        object.type = 2;                        // unit type (will always be 2 for units)
        object.health = health;                 // hit point / health
        object.armor = armor;                   // armor (reduce incoming damage)
        object.damage = damage;                 // damage (damage done per attack)
        object.last_attack = null;              // attack timer
        object.attack_speed = attack_speed;     // attack speed (attacks per second)
        //object.attack_range = attack_range;     // attack range (50 minimum especially melee units)
        object.movement_speed = movement_speed; // speed (normal should be 1)
    }


    /////////////
    ///Enemies///
    /////////////
    
    enemy_type_z(x, y){
        let object = new Sprite(x, y);
            // Visual Config
            // object.img = this.generic_sword_guy;
            //object.color = red;
            object.w = 20;
            object.h = 50;
            object.collider = 'd';
            object.immovable = true;
            object.rotationLock = true;
            object.draw = () => {
            strokeWeight(0)
            //fill(color);
            //ellipse(0, 0, 20, 20);
            textSize(10);
            fill('white');
            text(object.health, -10, -10);
            }
            //object.debug = true;
    
            // Stats Config
            this.apply_default_stats(
            object, // object
            80,    // health
            0,      // armor
            5,      // damage
            1,      // attack_speed
            //150,     // attack_range
            150,    // search_range
            1       // movement_speed
            );
                
        return object;
        }


        enemy_type_d(x, y){
            let object = new Sprite(x, y);
                // Visual Config
                // object.img = this.generic_sword_guy;
                //object.color = red;
                object.d = 20;
                object.draw = () => {
                strokeWeight(0)
                //fill(color);
                ellipse(0, 0, 20, 20);
                textSize(10);
                fill('white');
                text(object.health, -10, -10);
                }
                //object.debug = true;
        
                // Stats Config
                this.apply_default_stats(
                object, // object
                200,    // health
                0,      // armor
                5,      // damage
                1,      // attack_speed
                //150,     // attack_range
                150,    // search_range
                1       // movement_speed
                );
                    
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

    change_colors(cost, resource) {
        if (cost <= resource) {
            fill('white');
        } else {
            fill('red');
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