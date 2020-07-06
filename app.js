const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitsSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

const fruit = new Fruit({
  name: 'Apple',
  rating: 7,
  review: 'Pretty solid as a fruit.',
});

// fruit.save();

const personsSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personsSchema);

const person = new Person({
  name: 'John',
  age: 37,
});

// person.save();

const kiwi = new Fruit({
  name: 'Kiwi',
  score: 10,
  review: 'The best fruit!',
});

const orange = new Fruit({
  name: 'Orange',
  score: 4,
  review: 'Too sour for me',
});

const banana = new Fruit({
  name: 'Banana',
  score: 3,
  review: 'Weird Texture',
});

Fruit.insertMany([kiwi, orange, banana], (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successful Addition to DB');
  }
});

// =========================================
// FIND ALL DOCUMENTS
// =========================================

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(fruits);
    callback(fruits);
  });
};
