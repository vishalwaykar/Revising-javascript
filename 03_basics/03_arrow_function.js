const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// let username = 'vishal'
// const chai =  () => {
//     // let username = "hitesh"
//     console.log(this.username);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //implicit return


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// let username = 'vishal'
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()


//following way we can access the global using this
username = new String('vishal'); 
const chai =  function () {
    // let username = "hitesh"//dynamically pick the type string.
    // let username = 'vivek';//dynamically pick the type string.
    let username = new String('Vicky');//specified with type string.
    username = 23;
    console.log(this.username);
    console.log(username);
    console.log(typeof username);
}

chai()