console.log("app is loading ...");

const express = require("express");
const axios = require("axios");
const PORT = 5000;
 
const app = express();

let allCars = [] ; 

axios.get(
  "https://private-anon-ab9cc9d997-carsapi1.apiary-mock.com/cars")
.then(res=>{
  allCars = res.data;

}) 



app.get("/getAllcars", (req, res) => {
  res.status(200).send(allCars);
});



app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
   