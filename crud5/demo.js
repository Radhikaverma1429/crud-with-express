const http = require('http');

const server = http.createServer((req, res) => {
    try {
        res.writeHead(200, { 'content-type': "text/html" });
        res.write('<h1> this is my first code </h1>');
        res.write('<h2> this is my second code </h2>');
        res.write('<button> click me </button>');
        res.end("okk by by ")
    } catch (error) {
        console.log(error.message);
    }
})

server.listen(9000) 

// const findavg =(a,b,c) =>{
//     console.log("finding avg");
//     return (a+b+c)/3;
// }

// module.exports=findavg;