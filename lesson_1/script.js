let a = {
    name: 'ALex',
    color: 'Red',
    bold: true,
    showColor: function () {
        console.log(this.color);
    },
}

const b = {
    __proto__ : a,
    fontSize: '24px'
}

const c = {
    fontFamily: 'Verdana',
    __proto__: b
}

// document.querySelector('.s-1').innerHTML = text;

a.showColor();


result = c.hasOwnProperty('fontFamily');

