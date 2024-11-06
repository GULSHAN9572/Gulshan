const http = require('http');


const server = http.createServer((req,res) =>{
    if (req.url == '/'){
        res.write(`<h1>Hello ,Node.js!</h1>`);
    }
    else if (req.url == `/about`){
        res.write(`<h1>this is about page!</h1>`);
    }
    else if (req.url == `/home`){
        res.write(`<h1>This is Home page!</h1>`);
    }
    else if (req.url == `/home/rs`){
        res.write(`<h1>This is RS page!</h1>`);
    }
    
    
    res.end();

});
server.listen(5005);
console.log('The HTTP server is running on port 5005');
