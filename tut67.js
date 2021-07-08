// Synchronous or blocking
// line by line execution

// const fs=require("fs");
// let text=fs.readFileSync("tut66.txt","utf-8");
// text=text.replace("arpan","adarsh");

// console.log("The content of the file is ",text);

// console.log("Creating a new file...");
// fs.writeFileSync("adarsh.txt",text);

// Asynchronous or non-blocking
// line by line execution is not guaranteed callbacks will fire

const fs=require("fs");
fs.readFile("tut66.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message");