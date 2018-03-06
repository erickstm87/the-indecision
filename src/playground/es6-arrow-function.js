const square = function(x){
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(7));

const anotherName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(anotherName('pablo escobar'));

const getFirstName = (fullName) => fullName.split(' ')[0];
// fname = fullname.split(' ')[0];

let firstName = 'this is the first name: ' + getFirstName('toms bomb');
console.log(firstName);