// arguments object - no longer bound with arrow functions
// this keyword - no longer bound 
const user = {
    name: 'tomas',
    cities: ['boulder', 'indianapolis', 'milwaukee'],
    //this down below is the es5 syntax for a method
    //printPlacesLived: function() {//don't use an arrow function here because the code within here will not bind using this. this.name for example will try to access the global scope as opposed to the object containing the property
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach(function(city){ 
            console.log(this.name + ' has lived in each of these cities: ' + city);// this print statement returns undefined because the this.name value is lost inside of an anonymous function. it is strictly bound the it's parent object. arrow functions however will default to their parent 
        })
        const newCity = this.cities.map((city) => this.name + ' has lived in ' + city )
        // this.cities.forEach((city) => { //because this is an arrow function it defaults to whatever it's parent is. Arrow functions use the context in which the this was created
        //     console.log(this.name + ' has lived in each of these cities: ' + city);
        // })
        console.log(newCity);
    }
}

const multiplier = {
    numbers: [1,2,3,4],
    aNumber: 3,
    multiplyBy() {
        return this.numbers.map((oneNumber) => oneNumber * this.aNumber);
    }
}

user.printPlacesLived();
console.log(multiplier.multiplyBy());