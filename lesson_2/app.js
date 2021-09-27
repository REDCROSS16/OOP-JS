let button = new Button(100, 100, 'red', 'Magic Button');
console.log(button)


button.render('body');


const modernBtn = new ModernButton(100,50, 'blue', 'nice', 5);
modernBtn.render('body');

console.log(modernBtn.description.name)