function fun(){
    console.log("fun says Hi!!!")
}
fun();
// let sayHi = function(){
//     console.log("sayHI function says Hi");
//    }
//       sayHi();
function tobepassedAsargument(){
    console.log("I am passed as an argument");
}
function highorderfunction(cb){
    cb();
}
highorderfunction(tobepassedAsargument);
