
/*
Notes:

The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
The return value of the 'Function Execution' context is passed to the Global Execution Context

Amazing videos Hitesh Sir, 
Learning a lot..!!
Correct me if something I explained is Wrong

*/



// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// Notes for control flow One.js

/*
Comparision operator
< less than
> greater than
== equals
<= less than equals
>= greater than equals
!= not equals
=== strictly equals(checks type and value of the variable as well)
truthy values
falsy values

0, undefined, '', null, NaN, [], {}, ==========> falsy values


Interesting thing to know:

false == 0 //true
false == '' //true
0 == '' //true
*/ 
