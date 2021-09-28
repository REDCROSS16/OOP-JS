class List
{
    constructor(array) {
        this.array = array;
    }

    render () {
        const ul = document.createElement('ul');
        const body = document.querySelector('body');
        for (let item of this.array) {
            let li = document.createElement('li');
            li.innerHTML = item;
            ul.append(li);
        }
        body.append(ul);
        return ul;
    }
}