class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {
        this.a = Math.ceil((this.max - this.min) / 2) + this.min
       
        return this.a
    }

    lower() {
        return this.max = this.a;
    }

    greater() {
       return this.min = this.a;
    }
}

module.exports = GuessingGame;



