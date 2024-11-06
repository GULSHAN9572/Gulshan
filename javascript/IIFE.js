(function() {
    // Code to be executed immediately
    })();
    //or
    (() => {
    })()
    // or
    ( async () => {
    // code here ....
    })()
    // or
    ( async (parameters) => {
    // code here ....
    })(arguments)
    //------------------------------------------
    // simple self-invoking function
(() => {
    console.log("This is a self-invoking function");
    })();
    // output - This is a self-invoking function
    
    // self-invoking function with parameter
    ((a, b) => {
    console.log(a + " " + b);
    })("hello", "world");
    // output -- hello world
    //-----------------------------------------------
    const result = ((a, b) => {
        return a + " " + b;
        })("hello", "world");
        
        console.log(result);
        //output - hello world