
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get personInfo() {
        console.log(`Person: ${this.name},(${this.age})`)
    }
}

class Car {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
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

const molly = new Person('Molly', 25);
const robert = new Person('Robert', 17);
const bettie = new Person('Bettie', 45);
const paul = new Person('Paul', 45);
console.log(molly);
console.log(robert);
console.log(bettie);
console.log(paul);

const tesla = new Car('Tesla', 'Model S', 2023, 3147);
const audi = new Car('Audi', 'Q5', 2022, 5874);
const toyota = new Car('Toyota', 'Avensis', 2020, 2587);
const scoda = new Car('Scoda', 'Fabia', 2008, 1593);
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

