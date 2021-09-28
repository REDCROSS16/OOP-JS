class List3 extends List
{
    constructor(array, cssClass) {
        super(array);
        this.cssClass = cssClass;
    }
    render() {
        let ul = super.render();
        let body = document.querySelector('body');
        for (let item of ul.childNodes) {
            item.style.textAlign = this.cssClass[0];
            item.style.fontWeight = this.cssClass[1];
            item.style.color = this.cssClass[2];
        }
        body.append(ul);
    }
}