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


// Create car objects
const honda = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45);
const ford = new Car('Ford', 'F-150', 2020, 'Black', 25000, 30);
const bmw = new Car('BMW', 'X5', 2022, 'Green', 60000, 65);
const mazda = new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60);
const audi = new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47);
const kia = new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56);

// Invoke honk method for each car
honda.honk();
ford.honk();
bmw.honk();
mazda.honk();
audi.honk();
kia.honk();

// Simulate race for 7 turns
honda.race(7);
ford.race(7);
bmw.race(7);
mazda.race(7);
audi.race(7);
kia.race(7);
