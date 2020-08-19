var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";



const userLoginWithAuth =(req,res)=>{

    console.log("Auth Login");
    console.log(req.body);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("car-catalog");
        // var myobj = {req.body};
        dbo
          .collection("carCatalogsUsers")
          .insertOne(req.body, function (err, result) {
            console.log("1 document inserted");
            res.status(200).send(result);
            db.close();
            return;
          });
      });




}



module.exports.userLoginWithAuth =userLoginWithAuth
