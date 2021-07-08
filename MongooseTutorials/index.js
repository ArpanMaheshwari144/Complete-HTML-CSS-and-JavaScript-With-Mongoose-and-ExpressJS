// open powershell write mongod and open second powershell write mongo and then open vscode terminal write node index.js 

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   console.log("we are connecting");
// });


var kittySchema = new mongoose.Schema({
  name: String
});


kittySchema.methods.speak = function () {
  var greeting = "My name is " + this.name
  console.log(greeting);
}


var Kitten = mongoose.model('Kittens', kittySchema);


var harryKitty = new Kitten({
  name: 'harryKitty'
});
var harryKitty2 = new Kitten({
  name: 'harryKitty2'
});
console.log(harryKitty.name);
harryKitty.speak();


harryKitty.save(function (err, harryKitty) {
  if (err) return console.error(err);
  // harryKitty.speak();
});


harryKitty2.save(function (err, k) {
  if (err) return console.error(err);
  // k.speak();
});


Kitten.find({
  name: "harryKitty"
}, function (err, kittens) {
  if (err) return console.error(err);
  // console.log(kittens);
})