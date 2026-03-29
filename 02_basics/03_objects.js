// singleton 
// Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Ritesh",
    "full name":"Ritesh Kumar jha",
    [mySym]: "mykey1",
    age: 20,
    location:"Bihar",
    email:"riteshjha279@gmail.com",
    isLogggedIn: false,
    LastLoginDays :["Monday","Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="ritesh@chatGpt.com"

// console.log(JsUser["email"]);

// Object.freeze(JsUser);
JsUser.email="ritesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());
JsUser.greetingTwo= function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greetingTwo());