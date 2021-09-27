class ModernButton extends Button
{
    constructor(width, height, background, value, borderRadius) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }

    render(target) {
        let button = super.render(target);
        button.style.borderRadius = this.borderRadius + 'px';
    }
}
