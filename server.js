//console.log("server is running")
// function add(a,b){
//     return a+b;

// const { json } = require("express")

// }
// 
// var add=(a,b)=>{return a+b};
// var add=(a,b)=>a+b

// var result=add(2,7);
// console.log(result)
// function callback(){
//     console.log("now adding is succesfully completed");
// }
// const add=function(a,b,callback){

//     var result=a+b;
//     console.log(result);
//     callback();
// }
// add(2,4,callback);
// add(2,3,function(){
//     console.log("add completed");
// });
// add(2,3,()=>console.log("add comleted"));
// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt',"hi bro mayak this side",()=>{
//     console.log("file is created");
// })

// how to import a file
// var _ = require('lodash');

// console.log("now i have impoted the notes.js file");
// console.log(notes.age)
// console.log(notes.addnum(44,56));
// var arr=[1,"mayank",true,false,"mayank"]
// var filter=_.uniq(arr);
// console.log(filter);

// json to object and obect to json
//  var objectToConvert={
//     name:"mayank",
//     age:22,
//     regNo:20225050

//  };
//  const jsonToConvert=JSON.stringify(objectToConvert);// this will convert object to json 
//  console.log(jsonToConvert)
//  const objectToConverted=JSON.parse(jsonToConvert);// this will convert json to json
//  console.log(objectToConverted)
const express = require('express');
const db = require('./db.js'); // Assuming db.js connects to MongoDB
const bodyParser = require('body-parser');



const app = express();  // ✔ app initialized before use

app.use(bodyParser.json());  // ✔ middleware added after app creation














const personRoutes=require('./Routes/personRoutes.js');
app.use('/person',personRoutes);

const menuRoutes = require('./Routes/menuRoutes');
app.use('/menu', menuRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});







// ✅ Home route
// app.get('/', (req, res) => {
//   res.send("Welcome to my first express app");
// });




// ✅ About route
// app.get('/about', (req, res) => {
//   res.send("So ya, this is Mayank's first website");
// });

// ✅ Start server
// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });


// app.get('/myinfo',(req,res)=>{
  
//   res.send({
//    name:"mayank",
//    age:22,
//    regno:20225050
//   })
//   })
  // app.get('/myResume',(req,res)=>{
  //  res.send({
  //     collage:"Mnnit Allahabad",
  //     brach:"EE",
  //     skills:["java","SpringBoot","Nodejs","expressJs"]
  //  })
  // })






// app.get('/yourName/:name', (req, res) => {
//   const name = req.params.name;  // URL se name le rahe hain
//   res.send(`Hello bhai kaise ho ${name}`);
// });


