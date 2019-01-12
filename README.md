# CRUD! with Node/Express & MongoDB/Mongoose
Learn &amp; build basic CRUD functionality using Node/Express and MongoDB/Mongoose.

## Build status

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)

## Code style

[![airbnb](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg?style=flat)](https://github.com/airbnb/javascript)

## Tech/framework used
<b>Built with</b>

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://github.com/mongodb/node-mongodb-native)
- [Mongoose](https://mongoosejs.com/)

## [REQUIRED] Before starting

1. Make sure you have a package manager installed
    - MacOS: [HomeBrew](https://brew.sh/)
2. [Install Node on your computer](https://nodejs.org/en/download/package-manager/):  
    ``` brew install node ```
3. [Install MongoDB on your computer](https://github.com/mongodb/node-mongodb-native)
    **Note:** If any of the above give you a permissions error, run each command with 'sudo' prepended before the command and      then enter in your system credentials.
    - Run `brew update` on terminal
    - Run `brew install mongodb`
    - Create '/data/db' directory: `mkdir -p /data/db`
    - Run `mongod` to start your mongod process (if you get an error, try `sudo mongod` and then enter in your system credentials).
    - To run mongo CLI: run `mongo` in terminal
    - For mongo CLI commands, visit: https://docs.mongodb.com/manual/reference/mongo-shell/

## What you'll be doing

You'll be going through a relatively straightforward process of setting up a local (meaning on your local computer) Node server, setting up a local (meaning on your local computer) MongoDB database, and implementing basic CRUD routes between the two.

## Why you'll be doing this

CRUD functionality constitutes about 80% of all application functionality (some people say close to 100%, but lets stick to 80). That means that if we don't know how to implement CRUD functionality, or at least know what CRUD functionality looks like, we have a severe gap in our software engineering knowledge. We'll be going through these steps to fill this gap.

## How you'll be doing this

We're going to go through some basic setups for the technologies we'll be using, then we'll create the CRUD funcitonality.

[NODE] First things first, lets set up a local Node server:
1. Create a file called ```server.js```
2. Copy and paste the following code into the file:
   ```
   const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
   ```
  3. Take a moment to look at what's going on here:
    - ```const http = require('http');``` instantiates the http module of the Node package, allowing us to call methods that allow us to create a server.
    - ```const port = 3000``` defines a constant to an integer we'll be using to start up our server.
    - ```const server = ``` gets a constant ready to then assign a server instance to
    - ```= http.createServer()``` calls the createServer method on the imported http module, where we pass in a callback function as an argument
    - ```
      (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
      }
      ```
      Within the callback function, we populate 
  4. Run ```node server.js``` and navigate to ```localhost:<PORT # HERE>```

[MongoDB] Great, now lets set up a local mongoDB database:



[CRUD] Fantastic, and now for what we came for - CRUD:



## Contribute

To contribute, please fork the repo, make sure your master and all subsequent branches are up to date with this repo, and submit a pull request. I'll get to it as soon as I can.
[contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md)

## Credits

## License

MIT © [Joe Cervino](https://www.linkedin.com/in/josephcervino/)
