

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const bcrypt = require("bcrypt");




const userLogin = async(req,res)=>{


    const { email } = req.body.userLoginForm;
    const { password } = req.body.userLoginForm;
  
  
   ////find email in DB
  
   MongoClient.connect(url, function (err, db) {
     if (err) throw err;
     var dbo = db.db("car-catalog");
     dbo
       .collection("carCatalogsUsers")
       .find({ email })
       .toArray(function (err, result) {
         try {
           bcrypt.compare(password, result[0].password, (err, hash) => {
             if (hash) {
               console.log("succsus its the same password");
            return  res.status(201).send(result);
  
             }

             
             return res.status(404).send(result);


             });
         }  
         catch {
          return res.status(404).send(result);
         }
        //  console.log(result, "the person that login");
         db.close();
       });
   });
  
  }
   

  module.exports.userLogin =userLogin
