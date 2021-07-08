console.log("This is arpan");

// let name="arpan";
// let name1="aditya";
// let name2="adarsh";
// let name3="akbar";
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

// function greet(name){
//     console.log(name + " is a good boy");
// }
// let name="arpan";
// let name1="aditya";
// let name2="adarsh";
// let name3="akbar";
// greet(name);
// greet(name1);
// greet(name2);
// greet(name3);

// function greet(name,greetText){
//     let name1="name1"; // local variable 
//     console.log(greetText +" "+ name);
//     console.log(name + " is a good boy");
// }
// let name="arpan";
// let name1="aditya"; // global variable
// let name2="adarsh";
// let name3="akbar";
// // let greetText="Good Morning";
// let greetText1="Good afternoon";
// greet(name,greetText1);
// greet(name1,greetText1);
// greet(name2,greetText1);
// greet(name3,greetText1);

// function greet(name,greetText="Where is your message"){ 
//     console.log(greetText +" "+ name);
//     console.log(name + " is a good boy");
// }
// let name="arpan";
// let name1="aditya"; 
// let name2="adarsh";
// let name3="akbar";
// let greetText="Good Morning";
// greet(name,greetText);
// greet(name1,greetText);
// greet(name2,greetText);
// greet(name3); //by default jo humne function mei message de rakha hoga wo le lega

// function sum(a,b,c){
//     let d=a+b+c;
//     return d;

//     // this line is never get executed(Unreachable code)
//     // console.log("This is unreachable");
// }
// let returnValue=sum(1,2,3);
// console.log(returnValue);

// function min(a,b){
//     if(a>b){
//         console.log("b is minimum");
//     } else{
//         console.log("a is minimum");
//     }
// }

// let returnValue=min(10,5);
// console.log(returnValue);

// function max(a,b){
//     if(a>b){
//         console.log("a is maximum");
//     } else{
//         console.log("b is maximum");
//     }
// }

// let returnValue=max(10,50);
// console.log(returnValue);

// function greater(a,b){
//     if(a>b){
//         console.log("a is greater");
//     } else{
//         console.log("b is greater");
//     }
// }

// let returnValue=greater(10,50);
// console.log(returnValue);

function lessThan(a,b){
    if(a>b){
        console.log("b is less than");
    } else{
        console.log("a is less than");
    }
}

let returnValue=lessThan(10,50);
console.log(returnValue);