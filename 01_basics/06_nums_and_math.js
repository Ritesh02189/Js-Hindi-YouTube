const score= 400
// console.log(score);
const blance =new Number (100.)
// console.log(blance);

console.log(blance.toString().length);
// console.log(blance.toFixed(2));


const otherNumber =23.8966
// console.log(otherNumber.toPrecision(4))

const hundreds =1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++ Maths ++++++++++====

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.9)); //high Value
// console.log(Math.floor(4.9)); //low value by default
// console.log(Math.min(4,9,2,7,9)); // find min value
// console.log(Math.max(4,9,2,7,9)); //find max value

console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min)
