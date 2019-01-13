const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/db');

const db = mongoose.connection;

db.on('error', () => console.log('Connection failed!'));
db.once('open', () => console.log('Database connected!'));

