class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    description = {
        name: 'Класс для создание кнопок'
    }
    render (target) {
        let  button = document.createElement('button');
            button.style.width = this.width + 'px';
            button.style.height = this.height + 'px';
            button.style.backgroundColor = this.background;
        const t = document.querySelector(target);
        button.textContent = this.value;
        t.append(button);
        return button;
    }
}