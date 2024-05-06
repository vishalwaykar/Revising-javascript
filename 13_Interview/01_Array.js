// There is one array you just need to print the original properties of the array using loop

// Perfrom below operation on browser

Array.prototype.extraProperty = "Vishal";

const myNewArray = ['Vishal', 'Jagannath', 'Waykar'];

// Typical implementation which will print the extraProperty as well
// for(value in myNewArray){
//     console.log(value);
// }

// To avoid this extraProperty from being logged we need below method of an array to verify that whether given value is the original property of that array or not:

for(v in myNewArray){
    if(myNewArray.hasOwnProperty(v)){
        console.log(v);
    }
}