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

We're going to go through some basic setups for the technologies we'll be using, then we'll create the CRUD functionality.

### First things first, lets set up a local Node server:
1. Create a file called ```server.js```
2. Run ```npm i --save express```
3. Copy and paste the following code into the the file:
    ```
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    ```
  4. Take a moment to understand what's going on here:
    - We're instantiating the express node module
    - We create a new application instance (our server)
    - We declare a constant set to an integer where our application will be hosted
    - We create a GET route with two arguments:
      1. '/' is the URL - in this case the initially loaded URL
      2. (req, res) => is a callback that takes the request and response objects as arguments.
        - Inside the callback, we call the .send() method on res to quite literally send "Hello World!" as a response.
      3. We create a listenter that takes our previously defined port constant and a callback as arguments
  5. Run ```node server.js``` to start the server
  6. We want a fluid workflow, so lets ```npm i nodemon``` to install a package that, when started, automatically refreshes the application. Add `nodemon server.js` to our package.json under "scripts" and run ```npm start``` in our terminal to see it all in action.
  7. Right, so now we have a basic Node/Express server set up and ready to roll. There's a ton more we can do with both technologies, but this is a good place to leave off until we come back in the CRUD section.

### Great, now lets set up a local mongoDB database:
1. 


### Fantastic, and now for what we came for - CRUD:



## Contribute

To contribute, please fork the repo, make sure your master and all subsequent branches are up to date with this repo, and submit a pull request. I'll get to it as soon as I can.
[contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md)

## Credits
- [Thank you to this Medium post for the Prettier & ESLint set-up help.](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
- 

## License

MIT © [Joe Cervino](https://www.linkedin.com/in/josephcervino/)
