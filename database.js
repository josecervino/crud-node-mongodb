const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('DB connected!'));

let kittySchema = new Schema({ name: string });

let Kitten = mongoose.model('Kitten', kittySchema);

let silence = new Kitten({ name: 'Silence' });

kittySchema.methods.speak = function() {
  let greeting = this.name ? `Meow name is ${this.name}.` : `I don't have a name yet.`;
  console.log(greeting);
  return greeting;
};

