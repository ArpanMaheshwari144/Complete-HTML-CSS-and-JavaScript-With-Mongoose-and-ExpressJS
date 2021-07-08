const fs=require("fs");
let text=fs.readFileSync("tut66.txt","utf-8");
text=text.replace("arpan","adarsh");

console.log("The content of the file is ",text);

console.log("Creating a new file...");
fs.writeFileSync("adarsh.txt",text);