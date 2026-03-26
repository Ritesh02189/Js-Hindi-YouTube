const name ="Ritesh"
const repoCount =50
//  console.log(name+repoCount+"Value");
 console.log(`HEllo my name is ${name} and my repo count is ${repoCount}`);
 
 const gameName = new String('Rite-sh')
 console.log(gameName[0]);
 console.log(gameName.__proto__);
 

 console.log(gameName.length)
 
 console.log(gameName.toUpperCase())
 console.log(gameName.charAt('2'))
 console.log(gameName.indexOf('t'))
 
const newString = gameName.substring(0,5)
console.log(newString);


const anotherString = gameName.slice(-8,4) //reverse
console.log(anotherString);

const newSringOne="  Ritesh  "
console.log(newSringOne);
console.log(newSringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('ritesh'))

console.log(gameName.split('-'));
