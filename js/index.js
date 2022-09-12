// Iteration 1: Names and Input

let hacker1 = "Arturo";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Andrea";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, incredible  ${hacker1} has ${hacker1.length} characters and ${hacker2} has ${hacker2.length}`);
  }
  else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }
  

// Iteration 3: Loops
// Option 1 

let driversName = "";
for(let i=0; i < hacker1.length; i++) {
  driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName);


let reversedName = "";
    
for (let i = hacker2.length - 1; i >= 0; i--) {
reversedName += hacker2[i];
}
console.log(reversedName);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 

// -- Option 2 
// let uppercase = hacker1.toUpperCase().split("").join(" ");
// console.log(uppercase);

// const reversedName2 = hacker2.split("").reverse().join(" ");
// console.log(reversedName2);










console.log("I'm ready!");

    