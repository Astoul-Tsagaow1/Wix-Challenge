var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const bcrypt = require("bcrypt");

const userRegister =  (req, res) => {
  const { email } = req.body.userRegisterForm;
 console.log(1235688);
  MongoClient.connect(url, function(err, db) {
    const dbo = db.db("car-catalog");
    dbo
      .collection("carCatalogsUsers")
      .findOne({ email }, function(err, emailExist) {
        if (emailExist == null) {
         return insertUsersToDB(req,res);
        } else {
          console.log("emailExist");
          res.status(404).send("Email emailExist")
          return
        }
      });
  });
  
};



 
const insertUsersToDB=  async(req,res)=> {
  const { email } = req.body.userRegisterForm;
  const { password } = req.body.userRegisterForm;
  const { lastName  } = req.body.userRegisterForm;
  const { firstName } = req.body.userRegisterForm;



  try {
    const salt = await bcrypt.genSalt();
    bcrypt.hash(password, salt, (err, hash) => {
      console.log(hash);
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("car-catalog");
        var myobj = {
          email,
          password: hash,
          firstName,
          lastName,
          userSignInRegular:req.body.userSignInRegular
        };
        dbo
          .collection("carCatalogsUsers")
          .insertOne(myobj, function (err, result) {
            console.log("1 document inserted");
            res.status(200).send(result);
            db.close();
            return;
          });
      });
    });
  } catch {
    return res.status(404).send();
  }

}

module.exports.userRegister = userRegister;
