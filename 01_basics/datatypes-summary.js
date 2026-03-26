

// Primitive dtataType

// 7 Types -> String , Number, Boolean ,Null, Bigint, Undefined,Symbole

const score =100
const scoreVal =100.3

const isLoggedIn=false
const outsideTemp = null
let useEmail;

const id= Symbol('123')
const anoid =Symbol('123')

console.log(id ===anoid);

// const bigNumber=1312345222289525n


//Non Primitive dataType(Reference)

// type -> Array , Objects, Funtions

const heros=["Ajay Devan","Sanjay Dutt","AmitabBacchan","Ritik Raushan"]
let myobj={
    name:"ritesh",
    age:24
}
const myFuntion = function(){
    console.log("hello");
 }

//  console.log(typeof heros);

//  console.log(typeof anoid);

//  console.log(typeof id );

//********************************************** */

// Stack (Primitive),Heap(Non-primitive)


let myYoutubeName="RiteshJhaacadmic"

let anothername=myYoutubeName

console.log(myYoutubeName)
console.log(anothername)

 let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
 }

//  console.log(userOne);

let userTwo=userOne

userTwo.email="ritesh@gmail.com"

console.log(userOne);
 console.log(userTwo); // reference

