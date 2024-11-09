function apply_button_style(button, x, y, w, h, label, bg_color, font_color) {
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
        fill(bg_color);
        rect(hoverEffect, hoverEffect, w, h);

        // button label
        fill(font_color);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(label, hoverEffect, hoverEffect);
    }
    button.visible = false;
    button.collider = 'n';
}