function attack_logic(unit, targets, door) {
    unit.mode = "WALK";

    for (let target of targets) {
        let distance = dist(unit.x, unit.y, target.x, target.y);

        if (distance < unit.attack_range) {
            if (target.team && unit.x < target.x) {
                unit.mode = "IDLE";
                break;
            } else if (!target.team && unit.x > target.x) {
                unit.mode = "IDLE";
                break;
            } else if (target.team !== unit.team) {
                unit.mode = "ATTACK";
                deal_damage(unit, target);
                break;
            }
        }
    }

    let doorDistance = dist(unit.x, unit.y, door.x, door.y);
    if (doorDistance < unit.attack_range && !unit.team) {
        unit.mode = "ATTACK";
        deal_damage(unit, door);
    }
}

function deal_damage(unit, target) {
    let current_time = millis();
    let attack_interval = 1000 / unit.attack_speed;

    if (!unit.last_attack) {
        unit.last_attack = 0;
    }

    if (current_time - unit.last_attack >= attack_interval) {
        target.current_hp -= unit.attack_damage;
        unit.last_attack = current_time;
        console.log("ouch");
    }
}

function death_logic(unit) {
    if (unit.current_hp <= 0) {
        unit.remove();
    }
}

function draw_health_bar(unit) {
    rectMode(CORNER);
    let bar_width = 50;
    let percentage = unit.current_hp / unit.max_hp
    let hp = percentage * bar_width;
    if (percentage * 100 < 70 && percentage * 100 >= 30) {
        fill('yellow')
    } else if (percentage * 100 < 30) {
        fill('red');
    } else {
        fill('green');
    }
    rect(unit.x, unit.y - 30, hp, 9);
    rectMode(CENTER);
}