Array.prototype.customForEachOne = function (callback){
    for(let i = 0; i < this.length; i++ ){
        callback(this[i], i, this)
        }
}

const myNewArray = ['Vishal', 'Jagannath', 'Waykar'];

// myNewArray.customForEachOne((value, index, array) => {
//     console.log(value, index, array)
// } )



// Array.prototype.forEachTwo = function (callback, thiscontext){
//     if(typeof callback !== 'function') {
//     throw 'not a function'
//     ｝
//     const length = this. length
//     let i = 0;
//     while (i < length) {
//     {
//     if (this.has0wnProperty) {
//     callback. call(thiscontext, this(il, i, this)
//     X
//     i++;
//     }
//     ｝

    Array.prototype.forEachTwo = function (callback, thiscontext){
        if ( typeof callback !== 'function') {
                throw 'not a function';
            }

        const length = this.length;
        let i = 0;

        while(i<this.length){
            if(this.hasOwnProperty(i)){
                callback.call(thiscontext, this[i], i, this);
            }
            i++; 
        }
    }


    myNewArray.forEachTwo((value, index, array) => {
        console.log(value, index, array);
    } )





    /*
    This JavaScript code is extending the built-in Array.prototype with a new method called forEachTwo. This custom forEachTwo method is designed to iterate over an array and apply a provided callback function to each element. Let's break down the code step by step:

Extending Array Prototype:
The code begins by defining a new method called forEachTwo on the Array.prototype. This means that once this code is executed, all arrays in the JavaScript environment will have access to the forEachTwo method.

Function Parameters:
The forEachTwo method takes two parameters:

callback: This is the function that will be called for each element in the array.
thiscontext: An optional parameter that represents the context in which the callback function should be executed.

Callback Function Check:
The code starts by checking if the provided callback is a function. If it's not a function, an error is thrown with the message "Not a function."

Getting Array Length:
The length of the array on which the method is called is stored in the length variable.

Looping through Array Elements:
The code uses a while loop to iterate over the array's elements. The loop continues as long as the index i is less than the array's length.

Checking Property Ownership:
Inside the loop, there's a condition if (this.hasOwnProperty). However, this condition is incomplete and should actually be checking if the array instance itself (this) has a property corresponding to the current index i. The correct condition should be if (this.hasOwnProperty(i)).

Executing the Callback:
If the array has the property at the current index, the callback function is executed using the call method. The call method allows you to invoke a function in a specific context (thiscontext) and pass arguments to it. The callback is invoked with three arguments:

The current array element (this[i])
The index of the current element (i)
The entire array (this)
Incrementing the Index:
After executing the callback (if applicable), the index i is incremented by one.

The purpose of this code is to create a custom version of the forEach method for arrays, which can handle a specified execution context for the callback function. However, there is a minor issue in the code related to the if (this.hasOwnProperty) condition that needs to be corrected for the code to work as intended.
    
    */ 