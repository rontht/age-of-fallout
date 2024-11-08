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