// name and age

class Person {
   constructor(name = 'Anonymous', age =0) {
       this.name = name;
       this.age = age;
   }
   getGreeting() {
       //return 'hi ' +this.name+'!';
       return `hi. I am ${this.name}!`;
   }

   getDescription() {
    //return 'hi ' +this.name+'!';
    return `${this.name} is ${this.age} years old!`;
    }
}

class Student extends Person {
 constructor(name, age, major) {
    super(name, age);
    this.major = major;
 }

 hasMoajor() {
     return !!this.major;
 }

 getDescription() {
     let description = super.getDescription();

     if(this.hasMoajor()){
         description += ` Their major is ${this.major}`;
     }
     return description;
 }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += ` and I am form ${this.homeLocation}`;
        }
        return greeting;
    }

    hasLocation(){
        return !!this.homeLocation;
    }
}

// Travelloer -> Person
// Add support for home location
// Override getGreeting
// 1. Hi I am SPS, I am form Gorakhpur.
// 2. Hi I am SPS.

const me = new Traveller("SPS", 32, 'Gorakhpur');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
