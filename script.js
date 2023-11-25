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
        console.log(`Tuut tuut! Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}, Gas: ${this.gas} liters`);
    }

    race(turns) {
        for (let turn = 1; turn <= turns; turn++) {
            this.consumeGas();
            console.log(`Turn ${turn}: ${this.brand} ${this.model} - Gas Remaining: ${this.gas} liters`);
        }
    }

    consumeGas() {
        const gasLoss = this.calculateGasLoss();
        this.gas -= gasLoss;
    }

    calculateGasLoss() {
        const baseLoss = 5;
        const yearDifference = new Date().getFullYear() - this.year;
        const yearLoss = yearDifference > 0 ? yearDifference : 0;

        return baseLoss + yearLoss;
    }
}