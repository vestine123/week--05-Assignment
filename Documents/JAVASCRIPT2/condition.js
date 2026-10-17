// if ... else if /else if

let age = 16;

if (age >= 18) {
    console.log("You are an adult")
}

let isLoggedIn = true;

if (isLoggedIn === true) {
    console.log("Welcome to the website");
}

let password = "123456";

if (password !== "123456") {
    console.log("Password is Incorrect");
}



// if..else

if (isLoggedIn === true) {
    console.log("Welcome to the website");
} else {
    console.log("Please login");
}

if (age >= 18) {
    console.log("You are an adult")
} else {
    console.log("You are a minor")
}


// if...else if...else condition 

let marks = 55;


if (marks >= 80) {
    console.log("Grade A");
}else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console .log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else {
    console.log("You have failed");
}


// combining the conditions 

let Authenticated = true;
let isAdmin = true;

if (Authenticated === true && isAdmin === true) {
    console.log("Welcome Admin");
} else if (Authenticated === true && isAdmin === false) {
    console.log("Welcome User");
} else {
    console.log("Please login");
}

let ages = 19;
let hasTicket = false;
let isVip = true;

if (ages >= 18 && hasTicket) console.log("Welcome to the club");

if (ages >=18 || isVip) console.log("You are not allowed to be here");

const user = null;

let userName = null;

if (user && user.name) {
    console.log(user.name);
}

console.log(user?.name); 


// Truthy and Falsy values

let input = "";

if (!input) {
    console.log("Please provide a valid input");
}

const quantity = 0;
if (quantity) { console.log("You have items now items in your cart") }
if (quantity !== undefined) {console.log("You have items now items in your cart") }

// Ternary Operator

const score = 45;

const result = score >= 50 ? "Pass" : "Fail";

console.log(result);


let userNames = "Aline";
let hours = "12hrs";

const message = hours === "12hrs" ? `Hello ${userNames} what are we going today Thise afternoon Afternoon`: `Hello ${userNames} what are we going to do these Morning`;

console.log(message);



// we study 3 day's a week 

let studyDays = "Thursday";

switch (studyDays) {
    case "Tueday":
        console.log("We study on Tuesday");
        break;
    
    case "Wednesday":
        console.log("We do revision on wendesday");
        break;
    case "Thursday":
        console.log("We have to study  on Thursday");
        break;
    case "Friday":
        console.log("We dont study on friday");
        break;
    case "Saturday":
        console.log("We have a study on Saturday");
        break;

    default:
        console.log("We dont have a study on this day");
}