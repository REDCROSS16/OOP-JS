const test = new Test();
const test2 = new Test2();
const test3 = new Test3();
const test4 = new Test4;

// test.setTestProp('Alex')
test.name = ' 123';
test.testProp = 'background-color: red';
console.log(test.getName())


test2.setTestProp('test_prop_value');
console.log(test2.getTestProp())


test3.setTestProp('test_3_check_prop_value');
console.log(test3.getTestProp())


test4.setTestProp(1);
console.log(test4.getTestProp())