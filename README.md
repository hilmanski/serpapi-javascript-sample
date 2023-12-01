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

## Using it in Frontend
You can find a simple `index.html` file example in this repository, that fetch a request from the server above. 

If you want to access this endpoint from a frontend, you can run a local server, for example in VSCode: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

- Once it's running, you can adjust the localhost and the port at `server.js file > allowed_domain`. We're setting the header to avoid CORS issue from this domain/localhost.  
- Restart the node server (stop and run `node server`)
- Now, see the console.log results from your HTML file



