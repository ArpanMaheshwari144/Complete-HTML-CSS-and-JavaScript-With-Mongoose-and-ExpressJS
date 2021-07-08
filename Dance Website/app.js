const express=require("express");
const path=require("path");
const app=express();
const mongoose = require('mongoose');
const bodyparser=require("body-parser");
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const port=80;

//DEFINE MONGOOSE SCHEMA
var contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    phone: String,
    age: String,
    gender: String,
    address: String,
    desc: String
});

var Contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')); // for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the template engine as pug
app.set('views',path.join(__dirname,'views')); // set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const params={ };
    res.status(200).render('index.pug',params);
});

app.get("/contact",(req,res)=>{
    const params={ };
    res.status(200).render('index.pug'.params);
});

app.post("/contact",(req,res)=>{
    var myData=new Contact(req.body);
    myData.save().then(()=>{
        res.send("These items has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Items was not saved to the database")
    });
    // res.status(200).render('index.pug');
});

// START THE SERVER
// port 80 nodemon app.js se localhost mei khulti hai
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});


/*
-start mongod
-node app.js
-localhost
-contact forms mei details bhar ke submit karna hai
-in mongo
-use contactDance
-show collections
-db.contacts.find()
*/
