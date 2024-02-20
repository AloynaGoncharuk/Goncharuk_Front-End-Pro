
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
    }
    get personInfo() {
        console.log(`Person: ${this.name}, ${this.age}`)
    }
}

class Car {
    constructor(options) {
        this.brand = options.brand;
        this.model = options.model;
        this.year = options.year;
        this.number = options.number;
    }
    owner(owner) {
        if (owner.age < 18) {
            console.log(`Warning: You don’t have the right to drive a vehicle`)
        } else {
            this.ownerName = owner;
        }
    }
    get carInfo() {
        console.log(`Car: ${this.brand}, ${this.model}, ${this.year}, ${this.number}`);
        this.ownerName ? this.ownerName.personInfo : console.log(`${this.brand}, ${this.model} hasn’t an owner`);
    }
}

const molly = new Person({ name: 'Molly', age: 25 });
const robert = new Person({ name: 'Robert', age: 17 });
const bettie = new Person({ name: 'Bettie', age: 45 });
const paul = new Person({ name: 'Paul', age: 45 });
console.log(molly);
console.log(robert);
console.log(bettie);
console.log(paul);

const tesla = new Car({ brand: 'Tesla', model: 'Model S', year: 2023, number: 3147 });
const audi = new Car({ brand: 'Audi', model: 'Q5', year: 2022, number: 5874 });
const toyota = new Car({ brand: 'Toyota', model: 'Avensis', year: 2020, number: 2587 });
const scoda = new Car({ brand: 'Scoda', model: 'Fabia', year: 2008, number: 1593 });
console.log(tesla)
console.log(audi);
console.log(toyota);
console.log(scoda);

tesla.owner(molly);
audi.owner(robert);
toyota.owner(bettie);
scoda.owner(paul);


tesla.carInfo;
audi.carInfo;
toyota.carInfo;
scoda.carInfo;

