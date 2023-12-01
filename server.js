const http = require('http');
const { getJson } = require("serpapi");
require('dotenv').config();

const server = http.createServer((req, res) => {
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
