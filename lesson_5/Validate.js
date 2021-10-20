class Validate
{
    constructor(a) {
        this.a = a;
    }

    static isNumber (param) {
        return typeof param === 'number';
    }

    static isInt (param) {
        if (this.isNumber(param)) {
            return Number.isInteger(param);
        }
    }
}