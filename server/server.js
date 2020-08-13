console.log("app is loading ...");

const express = require("express");
// const axios = require("axios");
const PORT = 5000 || process.env.PORT;
const data = require('./data.json');
const app = express();
const path = require('path');
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

app.get("/getAllcars", (req, res) => { 
  // JSON.parse(JSON.stringify(data)
  // res.status(200).send(allCars);
  res.status(200).send(JSON.parse(JSON.stringify(data)));
});

//deployment
if (PORT === "production") {
  const root = path.join(__dirname,'..','client/build');
  console.log(root);
  app.use(express.static(root));
  app.get("*", (req, res) => {
      res.sendFile("index.html", { root });
  });
};

app.listen(PORT , () => {
  console.log(`listening to port ${PORT}`);
});
   