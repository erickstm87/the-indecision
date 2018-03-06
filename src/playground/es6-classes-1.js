//Car 
//make
//model
//vin
//getDescription

class Person {
    constructor(name = 'anonymous', age = 0){ //that equals is the default so if I instantiate a new person without a name you'll get anonymous
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'greetings ' + this.name;
        return `greetings ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age); //this calls the parent constructor function (Person in our case)
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){ //so this method is overriding it's parent method. Any student will now get this method instead
        let description = super.getDescription();
        
        if(this.hasMajor()){
            description += `. Their major was ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, hometown){
        super(name, age);
        this.hometown = hometown;
    }
   
    getDescription(){
        let description = super.getDescription();
        if(this.hometown){
            description += `. Their hometown is ${this.hometown}`
        }
    return description;
    }
}

const me = new Student('tomas', 30, 'lit'); 
console.log(me.getDescription());

const another = new Student();
console.log(another.getDescription());

const vinDiesel = new Traveller('vinny', 50, 'the streets');
console.log(vinDiesel.getDescription());