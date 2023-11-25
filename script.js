class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log(`Tuut tuut! ${this.getCarInfo()} Gas: ${this.gas} liters`);
    }

    race(turns) {
        console.log('\nRace Simulation:');
        for (let turn = 1; turn <= turns; turn++) {
            this.consumeGas();
            console.log(`Turn ${turn}: ${this.getCarInfo()} Gas Remaining: ${this.gas} liters`);
        }
    }

    consumeGas() {
        const gasLoss = this.calculateGasLoss();
        this.gas -= gasLoss;
    }

    calculateGasLoss() {
        const baseLoss = 5;
        const yearDifference = new Date().getFullYear() - this.year;
        const yearLoss = Math.max(0, yearDifference);

        return baseLoss + yearLoss;
    }

    getCarInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`;
    }
}

