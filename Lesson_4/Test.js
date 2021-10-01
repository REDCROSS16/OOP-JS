class Test
{
    constructor() {

    }
    // setTestProp(name){
    //     this._name = name.trim().toLowerCase();
    // }
    getName() {
        return this._name;
    }
    set testProp(testProp) {
        this._testProp = testProp;
    }
    get testProp () {
        return this._testProp;
    }
    set name(name) {
        this._name = name.trim().toLowerCase();
    }
}