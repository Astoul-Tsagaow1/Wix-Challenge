console.log("app is loading ...");

const express = require("express");
const axios = require("axios");
const PORT = 5000;
const data = require('./data.json');
const app = express();

let allCars = [] ; 
// "https://private-anon-ab9cc9d997-carsapi1.apiary-mock.com/cars"
// axios.get("https://private-anon-ab9cc9d997-carsapi1.apiary-mock.com/cars")
// .then(res=>{
//   // console.log(res.data);
//   // allcars= [...res.data,...JSON.parse(JSON.stringify(data)) ] 
// // console.log(allcars);
// }) 

// .catch(err=>{


//   console.log(err);
// })

// console.log( JSON.parse(JSON.stringify(data) ) );

app.get("/getAllcars", (req, res) => { 
  // JSON.parse(JSON.stringify(data)
  // res.status(200).send(allCars);
  res.status(200).send(JSON.parse(JSON.stringify(data)));
});



app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
   