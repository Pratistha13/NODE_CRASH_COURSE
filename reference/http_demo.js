const http = require ('http');


// Create server object
http.createServer((req, res) => {

    //Write response
    res.write('HI HAHAHA ');
    res.end()
}).listen(5000, () => console.log('server running...'))

