const http = require('http');

const server = http.createServer((req, res) => {
    // console.log("req -", req.url);
    // console.log("req -", req.method);
    const url = req.url;

    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`<div>
            <h1>Home Page</h1>
            <a href="/about">Go to About Page</a><br>
            <a href="/contact">Go to Contact Page</a>
            </div>`);
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`<div>
            <h1>About Page</h1>
            <a href="/">Go to Home Page</a>
            </div>`);
        res.end()
    }
    // 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write(`<div>
            <h1>Page Not Found</h1>
            <a href="/">Back to Home</a>
            </div>`);
        res.end()
    }

})

server.listen(5000);
