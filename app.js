const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'ADD A NAME'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: {
    type: String,
    required: true,
  },
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

const fruit = new Fruit({
  name: 'Peach',
  rating: 10,
  review: 'Peaches are great.',
});

// fruit.save();

const personsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitsSchema,
});

const Person = mongoose.model('Person', personsSchema);

const pineapple = new Fruit({
  name: 'Pineapple',
  score: 9,
  review: 'Great fruit',
});

const plantains = new Fruit({
  name: 'Plantains',
  score: 10,
  review: 'Plantains are AWESOME',
});

plantains.save();

// const person = new Person({
//   name: 'John',
//   age: 37,
// });

const person = new Person({
  name: 'Amy',
  age: 12,
  favoriteFruit: pineapple,
});

pineapple.save();

// person.save();

// const kiwi = new Fruit({
//   name: 'Kiwi',
//   score: 10,
//   review: 'The best fruit!',
// });

// const orange = new Fruit({
//   name: 'Orange',
//   score: 4,
//   review: 'Too sour for me',
// });

// const banana = new Fruit({
//   name: 'Banana',
//   score: 3,
//   review: 'Weird Texture',
// });

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successful Addition to DB');
//   }
// });

// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fruits);
//   }
// });

// Person.find((err, persons) => {
//   err ? console.log(err) : console.log(persons);
// });

// Fruit.find((err, fruits) => {
//   err ? console.log(err) : console.log(fruits.map((fruit) => fruit.name));
// });

Person.find((err, person) => {
  err ? console.log(err) : console.log(person);
});

// Fruit.updateOne(
//   { _id: '5f0355d30d677a349bf6026b' },
//   { review: 'Steaks are better than Fruits' },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('UPDATE SUCCESSFUL');
//     }
//   }
// );

// Person.updateOne({ name: 'John' }, { favoriteFruit: plantains }, (err) => {
//   err ? console.log(err) : console.log('Plantains added to John');
// });

// Fruit.deleteOne({ name: 'Peach' }, (err) => {
//   err ? console.log(err) : console.log('Deleted Successfully');
// });

// Person.deleteMany({ name: 'John' }, (err) => {
//   err ? console.log(err) : console.log('All Johns DELETED');
// });
