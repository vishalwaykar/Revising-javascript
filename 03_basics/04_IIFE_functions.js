// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

((userName = "vishal")=>{
    console.log("This function will automatically execute on it's own");
    console.log("If default name is not vishal then it is renamed/replaced by argument:-->", userName);
})('Vicky');


/*
We can use these IIFE(Immediately Invoked Function Expression) functions for logic which is expected to be execute automatically.

*/ 