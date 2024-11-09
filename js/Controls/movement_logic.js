// function movement_logic(unit, ground) {

//     let on_ground = unit.colliding(ground);

//     // move on a and d key presses
//     if (kb.pressing('a')) {
//         unit.x -= 2;
//         unit.mirror.x = true;
//         unit.changeAni('walk');
//     } else if (kb.pressing('d')) {
//         unit.x += 2;
//         unit.mirror.x = false;
//         unit.changeAni('walk');
//     } else {
//         unit.changeAni('idle');
//     }

//     unit.speed = 0;
// }

function movement_logic(unit) {
    if (unit.team) {
        if (attack_mode) {
            unit.x += 2;
            unit.changeAni('walk');
        } else {
            unit.changeAni('idle');
        }
    } else if (!unit.team) {
        if (attack_mode) {
            unit.x -= 2;
            unit.mirror.x = true;
            unit.changeAni('walk');
        } else {
            unit.mirror.x = true;
            unit.changeAni('idle');
        }
    }

    unit.speed = 0;
}

function automated_enemy_movement() {

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