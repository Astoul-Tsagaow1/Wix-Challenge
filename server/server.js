console.log("app is loading ...");
const express = require("express");
const PORT = 5000 || process.env.NODE_ENV;
const data = require("./data.json");
const app = express();
const path = require("path");
const userRegisterModule = require('./modules/userRegister/userRegister');
const userLoginModule = require('./modules/userLogin/userLogin');
const userLoginAuthModule = require('./modules/UserLoginWithFB/AuthLogin');

app.use(express.json());




app.get("/getAllcars", (req, res) => {
  res.status(200).send(JSON.parse(JSON.stringify(data)));
});


app.post("/userRegister", (req, res) => {
  userRegisterModule.userRegister(req, res);
});

app.post("/userLogin",(req, res) => {
  userLoginModule.userLogin(req,res)
});  

app.post("/userLoginAuth",(req, res) => {
  userLoginAuthModule.userLoginWithAuth(req,res)
});



app.route('https://localhost:3000')
//deployment
// if (PORT === "production") {
//   const root = path.join(__dirname,'..','client/build');
//   console.log(root);
//   app.use(express.static(root));
//   app.get("*", (req, res) => {
//       res.sendFile("index.html", { root });
//   });
// };

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
