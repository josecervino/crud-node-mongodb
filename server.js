const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { db, Quote } = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/newQuote', bodyParser, (req, res) => {
  const quote = {
    text: res.body.text,
    author: res.body.author
  };

  let newQuote = new Quote(quote);

  db.collection('quotes').insert(newQuote, (err, result) => {
    if (err) res.send(new Error('Post failed: ' + e));
    res.send(result.ops[0]);
  });
});

app.get('/getQuote/:id', (req, res) => {
  const id = req.params.id;
  const details = { _id: new ObjectId(id) };
  db.collection('quotes').findOne(details, (err, result) => {
    if (err) res.send(new Error());
    res.send(result);
  });
});

app.get('/allQuotes', (req, res) => {
  db.collection('quotes').find({}, (err, result) => {
    if (err) res.send(new Error());
    res.send(result);
  });
});

app.get('/deleteQuote/:id', (req, res) => {
  db.collection('quotes').remove(details, (err, result) => {
    if (err) res.send(new Error());
    res.send(result);
  });
});

app.put('/updateQuote/:id', (req, res) => {
  const quote = {
    text: req.body.text,
    author: req.body.author
  };

  let newQuote = new Quote(quote);

  const id = req.params.id;
  const details = { _id: new ObjectId(id) };
  db.collection('quotes').update(details, newQuote, (err, result) => {
    if (err) res.send(new Error());
    res.send(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
