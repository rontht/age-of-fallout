function apply_button_style(button, x, y, w, h, label) {
    button.x = x;
    button.y = y;
    button.w = w;
    button.h = h;
    button.draw = () => {
        let hoverEffect = 0;
        if (button.mouse.hovering()) {
            hoverEffect = -3;
        } else {
            hoverEffect = 0;
        }

        // button background
        fill("gray");
        rect(hoverEffect, hoverEffect, w, h);

        // button label
        fill("dark");
        textSize(20);
        textAlign(CENTER, CENTER);
        text(label, hoverEffect, hoverEffect);
    }
    button.visible = false;
    button.collider = 'n';
}