const fs = require("fs");

console.log("here mwe go again before ")
//
// let data = fs.readFileSync("a.txt", "utf8");
// console.log(data);

//async fctn.
let data = fs.readFile("a.txt", "utf-8" , cb )
function cb(err , data ){
    console.log("the data of a.txt is = " + data)
    console.log("end")
}


console.log("this is after the complition ")


