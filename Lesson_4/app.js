const test = new Test();
const test2 = new Test2();



// test.setTestProp('Alex')
test.name = ' 123';
test.testProp = 'background-color: red';
console.log(test.getName())


test2.setTestProp('test_prop_value');
console.log(test2.getTestProp())