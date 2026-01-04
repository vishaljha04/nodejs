const fs = require("fs");

//synchronus code
// fs.writeFileSync('./text.txt','Hey there');

// fs.writeFile('./text.txt','Hey there2',(err)=>console.log(err))

// const result = fs.readFileSync('./contact.txt','utf-8');
// console.log("readed file",result);

//asynchronus return nothing it expects handler for handling the result;
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync('./text.txt',"Hey there \n")
// fs.appendFileSync('./text.txt',new Date().getDate().toLocaleString())

//for copying files to another file
// fs.cpSync('./text.txt','copy.txt');

//to delete files
fs.unlinkSync('./copy.txt');
