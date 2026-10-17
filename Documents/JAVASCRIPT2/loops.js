// // for loop


// // for (intialization; condition; increment/decrement) {

// // }


// // we are going to count form 1 to 10
// // console.log("1");
// // console.log("2");
// // console.log("3");
// // console.log("4");
// // console.log("5");
// // console.log("6");
// // console.log("7");
// // console.log("8");
// // console.log("9");
// // console.log("10");


// for (let num = 1; num <= 10; num++) {    

// // condition 
// if (num % 2 === 0) {
//     // console.log(`${num} is even number`);
// } else {
//     // console.log(`${num} is odd number`);
// }

// }


// let fruits = ["apple", "banana", "orange", "mango", "grape"];

// for (let i = 0; i < fruits.length; i++) {

//     // console.log(`${i+1}: ${fruits[i]}`);

// }

// const world = "KIGALI";

// for (let i = 0; i < world.length; i++) {
//     // console.log(`${i+1}: ${world[i]}`);
// }


// // for --of loop

// // for (const variable of value) {
// //     console.log(variable);
// // }

// for (const fruit of fruits) {
//     // console.log(fruit);
// }


// const object = { name: "Eric", track: "Frontend", score: 88 }

// for(const key in object) {

//     // console.log(`${key}: ${object[key]}`);

// }


// // while loop

// let saving = 0;
// let weeks = 0;

// // while (saving < 100000) {
// //     // saving += 15000;
// //     // weeks++;
// //     // console.log(`It took use ${weeks} weeks to save ${saving} RWF which is above our minimum saving goal of 100000 RWF`);
// // }

// // let IsAuthenticated = true;

// // while (IsAuthenticated) {
// //     // console.log("Welcome to the dashboard");
// //     // break;
// // }


// do { 
//     number = Math.floor(Math.random() * 100);
//     console.log(`The number is ${number}`);
// } while (number < 10)


const prices = [2500, 4000, 1500, 6000];


let total = 0;
for (const p of prices) total += p;
console.log(total);


let scoore = [30, 45, 70, 65, 50, 99, 73, 88, 65, 32];

let count = 0;
let highest = 0;

for(const s of scoore) {
    if (s >= 80) {
        console.log(`${s} - You passed`)
    } else if (s >= 70) {
        console.log(`${s} - You passed`)
    } else if (s >= 60) {
        console.log(`${s} - You tried`)
    } else if (s >= 50) {
        console.log(`${s} - You are in an attenction Zone`)
    } else {
        console.log(`${s} - You failed`)
    }

    if (s > highest) highest = s;
    console.log(`The highest marks are ${highest}`)
}


//  the targe and the finding status

const names = ["Aline", "Eric", "Grace"];
let target = "Eric"
let found = false;
for(const t of names) {

    if (t === target) {
        found= true;
        break
    }
}

console.log(found ? 'Found': 'Not found');


for(let i = 10; i >0; i--){
    if (i % 2 !== 0) continue
    console.log(i)
}

let stars = "";
for (let i = 0; i < 5; i++) stars += "*";
console.log(stars); 