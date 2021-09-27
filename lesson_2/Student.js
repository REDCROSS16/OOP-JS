class Student extends User {
    constructor(username, password, nickname) {
        super(username, password);
        this.nickname = nickname;
    }
    getCurses() { return [1,2]}
    validatePassword()
    {
        return super.validatePassword();
    }
}