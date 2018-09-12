// Set Class Person
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;

    }

    getGreeting() {
        return `Hey. i am ${this.name}!!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// Set Class Student
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    getDescription() {

        if (this.major) {
            return `${super.getDescription()} Their major is ${this.major}`
        }
        return super.getDescription()
    }
}

// Set Class Traveler
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        if (this.homeLocation) {
            return `${super.getGreeting()} I am from ${this.homeLocation}`
        }
        return super.getGreeting()
    }
}


const me = new Traveler('Diogo Esteves', 29, 'Lisbon');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere!!');
console.log(other.getGreeting());
