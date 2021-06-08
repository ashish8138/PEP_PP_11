const fsKaObject = require("fs");
// console.log(fsKaObject);
let f1KaData = fsKaObject.readFileSync("./f1.txt"  );
console.log(f1KaData + "");
fsKaObject.writeFileSync("index.text" , "hello world!!");
let f2data = fsKaObject.readFileSync("./f2.txt" , "utf-8");
console.log(f2data);
fsKaObject.writeFileSync("../activity/work.js" , "number 1 cover");
