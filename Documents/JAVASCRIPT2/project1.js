
const name = "Grace";
const monthlyIncome = 350000;
const rent = 120000;
const food = 90000;
const transport = 30000;
const internet = 15000;

// totalExpenses

let totalExpenses = rent + food + transport + internet;

// Savings 

let savings = monthlyIncome - totalExpenses;

// saving rate 

let savingRate = (savings / monthlyIncome) * 100;

let savingGoal = savingRate >= 20 




// 1 Answer
console.log(`${name} has a monthly income of ${monthlyIncome} Rwf and she spends ${totalExpenses} RWF`)

// 2 Answer

console.log(`${name} after spending ${totalExpenses} RWF she is left with a saving of ${savings} rwf`)

// 3 Answer

console.log(`${name} hase a saving rate of ${savingRate.toFixed(2)}%`)

// 4 Answer

console.log(`${name} has a saving goal of ${savingGoal}`)







const fullName = "aline UWASE";

const strimmedName = fullName.trim();
const separateName = strimmedName.split(" ");
const sliced = strimmedName.slice(0, 5);
const upperCase = strimmedName.toUpperCase();
const lowerCase = strimmedName.toLowerCase();
// const initals = strimmedName.charAt(0) + strimmedName.charAt(6);
const map = strimmedName.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase()).join(".") + ".";
const userName = strimmedName.trim().split(/\s+/).join(".").toLocaleLowerCase();
const length = strimmedName.trim().split(" ").join("").length;

console.log(strimmedName);
console.log(separateName);
console.log(sliced);``
console.log(upperCase);
console.log(lowerCase);
console.log(map);
console.log(userName);
console.log(length);