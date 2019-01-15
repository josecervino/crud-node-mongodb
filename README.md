# CRUD! with Node/Express & MongoDB/Mongoose

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![airbnb](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg?style=flat)](https://github.com/airbnb/javascript)

Learn &amp; build basic CRUD functionality using Node/Express and MongoDB/Mongoose.

## Tech/framework used

<b>Built with</b>

- [Node](https://nodejs.org/en/) : a server Javascript runtime built on Chrome's V8 Javascript engine. Node lets us run Javascript outside of the browser.
- [Express](https://expressjs.com/) : a 3rd-party framework that simplifies the Node server creation/management process (and lots more). Express makes server logic minimal & declarative.
- [MongoDB](https://github.com/mongodb/node-mongodb-native) : a cross-platform document-oriented database program. MongoDB is a noSQL service that is dead simple to set-up & scale - especially for startups & pet-projects that don't need the complexity of a SQL service just yet.
- [Mongoose](https://mongoosejs.com/) : a 3rd-party [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) that simplfies MongoDB validation, casting & business logic. Mongoose makes using MongoDB with Node a breeze compared to raw MongoDB.

## [REQUIRED] Before starting

1. Make sure you have a package manager installed
   - MacOS: [HomeBrew](https://brew.sh/)
2. [Install Node on your computer](https://nodejs.org/en/download/package-manager/):  
   `brew install node`
3. [Install MongoDB on your computer](https://github.com/mongodb/node-mongodb-native)
   **Note:** If any of the above give you a permissions error, run each command with 'sudo' prepended before the command and then enter in your system credentials.
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

1. Create a file called `server.js`
2. Run `npm i --save express`
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
5. Run `node server.js` to start the server
6. We want a fluid workflow, so lets `npm i nodemon` to install a package that, when started, automatically refreshes the application. Add `nodemon server.js` to our package.json under "scripts" and run `npm start` in our terminal to see it all in action.
7. Right, so now we have a basic Node/Express server set up and ready to roll. There's a ton more we can do with both technologies, but this is a good place to leave off until we come back to explore some of it in more detail in the CRUD section.

### Great, now lets set up a local mongoDB database:

1. Run `npm install mongoose` in your terminal.
2. Create a file called `database.js`
3. Copy and paste the following code into the file:

   ```
   const mongoose = require('mongoose');
   const Schema = mongoose.Schema;

   mongoose.connect('mongodb://localhost/db');

   const db = mongoose.connection;

   db.on('error', () => console.log('Connection failed!'));
   db.once('open', () => console.log('Database connected!'));
   ```

4. Lets take a moment to check out what's going on here:

- We're importing and assigning the newly created instance of Mongoose to a constant
- We're then accessing the code of the .Schema property on the constant instance (remember, if we don't add parens we're essentially creating a new reference to that property's code) and assigning it to a new constant
- We then invoke the .call() method on our mongoose instance and pass in a URL where our database is going to be hosted
- Afterwards, we declare a constant and define it as a reference to the .connection property on our mongoose instance
- And finally, on that .connection constant, we:
  1. Invoke the .on() method listener that, when registering an 'error' event, invokes the provided callback
  2. Invoke the .once() method listener that runs once all the while waiting to register the 'open' event, in which case it invokes the provided callback.
- You may be wondering, "What's the Schema constant for?" well we're about to get to it. But a quick intro: Schemas can be thought of as templates, templates we use to store our data. Schema is an object that, when called with the right arguments, allows us to create entirely new templates for our data! That means we can have a template for emails, messages, files, JSON objects, videos - because MongoDB is a noSQL database, we can essentially create any structure for anything we want and it'll accept it. That's great news when we're only just figuring out what our applications do and what data we need to store and need something flexible that can adapt until we've refined things to the point where a SQL database would be better. On to the next section!

Want to get fancy? Try out the [mLab](https://docs.mlab.com/) service and make a hosted Mongo database for your applicatons!

### Fantastic, and now for what we came here for - CRUD!:

![CRUD](https://zellwk.com/images/2016/01/crud-express-mongo.png)

#### Create

1. In Express, we use `app.post(path, callback)` to perform a CREATE operation.
2. So to add a CREATE operation to our server, copy and paste the following into server.js:

   ```
   app.post('/quotes', (req, res) => {
      res.send(res.data)
   })
   ```

3. And now to CREATE data in our Mongo database. We'll be working this part out on-site.

#### Read

1. In Express, we use `app.get(path, callback)` to perform a READ operation.
2. So to add a READ operation to our server, copy and paste the following into server.js:
   ```
   app.get('/', (req,res) => {
      res.send('GET Works!');
   })
   ```
   I know what you're thinking, we just copy and pasted code that's almost identical to our original server start-up code. There's a reason for that. Sometimes code can feel esoteric, as if every new thing is completely different from the past, but REALLY things are EXPANSIONS of past concepts and have a logical connection pushing them forward. More on that in a moment.
3. And now to READ data from our Mongo database. Change the copy & pasted code so that it reads as follows:

   ```
   app.get('/messages', (req,res) => {
      res.send(res.data);
   })
   ```

   There are different ways to read data from Mongo, but this is a good start. Now you understand what a read operation looks like and can use it as a foundation to experiment for your own needs.

4. And now to READ data in our Mongo database. We'll be working this part out on-site.

#### Update

1. In Express, we use `app.put(path, callback)` to perform an UPDATE operation.
2. So to add an UPDATE operation to our server, copy and paste the following into server.js:
   ```
   app.set('/', (req,res) => {
      res.send('SET Works!');
   })
   ```
3. And now to UPDATE data from our Mongo database. Change the copy & pasted code so that it reads as follows:
   ```
   app.set('/', (req, res) => {
      res.send(res.data)
   })
   ```
4. And now to UPDATE data in our Mongo database. We'll be working this part out on-site.

#### Delete

1. In Express, we use `app.delete(path, callback)` to perform a DELETE operation.
2. So to add an DELETE operation to our server, copy and paste the following into server.js:
   ```
   app.set('/', (req,res) => {
      res.send('DELETE Works!');
   })
   ```
3. And now to UPDATE data from our Mongo database. Change the copy & pasted code so that it reads as follows:
   ```
   app.delete('/', (req, res) => {
      res.send('Data deleted.')
   })
   ```
4. And now to DELETE data in our Mongo database. We'll be working this part out on-site.

## Contribute

To contribute, please fork the repo, make sure your master and all subsequent branches are up to date with this repo, and submit a pull request with your changes. I'll get to it as soon as I can.
[contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md)

## Credits

- [Thank you to this Medium post for the Prettier & ESLint set-up help.](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)
- [Thanks to this Medium post for being so thorough with its Node/Mongoose intro](https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57)
- [Thanks to FreeCodeCamp for, again, being one of the best sources for beginner/intermediate software engineering info.](https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57)
- [Thanks to this article for reminding me about the right CRUD Express routes](https://dev.to/ichtrojan/basic-routing-http-requests-and-crud-operation-with-express-and-mongodb-od2)

## License

MIT © [Joe Cervino](https://www.linkedin.com/in/josephcervino/)
