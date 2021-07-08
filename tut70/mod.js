console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.exports = {
//     avg:average,
//     name:"harry",
//     repo:"GitHub"
// }

       //or

//module.exports apne aap me ek object hai or object mei name as a key and value is larry       
module.exports.name="larry";
module.exports.repo="GitHub";
module.exports.avg=average;
