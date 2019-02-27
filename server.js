/* Create a Github repo called simple-http-node-server. Create an HTTP server on port 3000 with a request handler that creates a file named hello-world.txt. You will be using the fs module to do this. Write the content: "Hello to this great world" to the hello-world.txt file. Please submit your finished code in your submission. */

const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    fs.appendFile('hello-world.txt', 'Hello to this great world!', function(err) {
      if (err) throw err;
      console.log('Saved');
    });
  })
  .listen(3000);
