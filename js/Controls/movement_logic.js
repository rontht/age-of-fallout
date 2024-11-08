function movement_logic(unit, ground) {
    // move on a and d key presses
    if (kb.pressing('a')) {
        unit.vel.x -= 0.5;
    } else if (kb.pressing('d')) {
        unit.vel.x += 0.5;
    }

    // jump on w
    if (kb.presses('w') && unit.colliding(ground)) { // Assuming ground at y = height - 50
        unit.vel.y = -8;
    }

    // damping to create smooth stop
    unit.vel.x *= 0.9;
    unit.vel.y *= 0.9;
}

function automated_enemy_movement(){
    
}


function dealing_damage(object, target) {


    let current_time = millis();
    let attack_interval = 1000 / object.attack_speed;

    if (!object.last_attack) {
        object.last_attack = 0;
    }

    let effective_range = object.attack_range + max(target.w, target.h) / 2;

    if (dist(object.x, object.y, target.x, target.y) < effective_range &&
        current_time - object.last_attack >= attack_interval) {
        target.health -= object.damage;
        object.last_attack = current_time;

        // Guide line to indicate current targets
        stroke('red');
        strokeWeight(10);
        line(object.x, object.y, target.x, target.y);
        stroke('black');
        strokeWeight(1);
    }

    if (target.health <= 0) {
        target.remove();
    }
}