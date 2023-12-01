# About
This is a simple example on how to use [SerpApi](https://serpapi.com/) in Node.js using the [SerpApi Javascript Library](https://github.com/serpapi/serpapi-javascript)

## Run this repo locally
- Clone this repository
- Run `npm install`
- Create a new `.env` file
- Add this in the `.env` file 
```
SERPAPI_API_KEY="YOUR_API_KEY"
```
- Replace YOUR_API_KEY with your actual SERPAPI API key.
- Run the server with `node server`
- Open your browser at http://localhost:3000/test

## Using it in Frontend (Optional)
This is an additional guide, on how to access the endpoint from frontend (HTML).

**Prerequisite**  
Run a local server for your HTML file. Options:
- Using VSCode Text Editor: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- Using Python SimpleHTTPServer: https://www.digitalocean.com/community/tutorials/python-simplehttpserver-http-server

**Tutorial**  

You can find a simple `index.html` file example in this repository, that fetch a request from the server above. 

- Once it's running, you can adjust the localhost and the port at `server.js file > allowed_domain`. We're setting the header to avoid CORS issue from this domain/localhost.  
- Restart the node server (stop and run `node server`)
- Now, see the console.log results from your HTML file



