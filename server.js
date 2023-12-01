const http = require('http');
const { getJson } = require("serpapi");
require('dotenv').config();

const server = http.createServer((req, res) => {

    // Set CORS headers
    const allowed_domain = 'http://127.0.0.1:5500' // Adjust with your domain or localhost port
    res.setHeader('Access-Control-Allow-Origin', allowed_domain);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url === '/test' && req.method === 'GET') {
        
        return getJson({
            api_key: process.env.SERPAPI_API_KEY,
            engine: "google",
            q: "Coffee",
            location: "Austin, Texas, United States",
            google_domain: "google.com",
            gl: "us",
            hl: "en"
        }, (json) => {
            console.log(json);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(json));
        });

    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
