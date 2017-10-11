var express = require("express");
var router = express.Router();
var Car = require("./models/carModel.js");
var Booking = require("./models/bookingModel.js");
var mongoose = require("mongoose");


// Koppla upp mot en databas
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/carList', {
    useMongoClient: true
});



router.get("/", (req, res) => {
  var carList = [];
console.log(req.body);
  Car.find({}, function(err, data){
    if (err)
      console.log(err);
    console.log(data);
        data.forEach(function(car) {
      carList.push(car)
        })
      res.render("index.pug", {carList: carList});
})
   })

//db.cars.find({ dagshyra: { $lt: 298 }});
//db.cars.find({ bookedDate: { $ne: datum}});

router.post("/", (req, res) => {
  //Lista alla bilar
  var carList = [];
    var datum = req.body.valtDatum;
console.log("hej kom o hjälp" + req.body);
    console.log(datum);
    //hitta alla bilar som inte är lika med valt datum
  Car.find({bookedDate: { $ne: datum}}, function(err, data){
    if (err)
      console.log(err);
    console.log("hejsanpådej" + data);
        data.forEach(function(car) {
            console.log(car);
      carList.push(car)
        })
      res.render("index.pug", {carList: carList, datum: datum});
})
  })


//uppdatera jsonobjekt med bookedDate

router.get("/update", (req, res) => {
	let query = req.query;
	let id = query.id,
		bookedDate = query.bookedDate;
    Car.updateOne({id},{bookedDate: {$set:bookedDate}
		})
		.exec()
        .then((result)=>{
            console.log("visa resultat" + result);
            res.json(result);
        })
        .catch((err)=> {
            console.log("UpdateError: " + err);
        });
});








  
/*Contact.findById(id, function(err, info) {
    if (err) return res.send("contact create error: " + err);

    // add the message to the contacts messages
    Contact.update({_id: info._id}, {$push: {"messages": {title: title, msg: msg}}}, function(err, numAffected, rawResponse) {
      if (err) return res.send("contact addMsg error: " + err);
      console.log('The number of updated documents was %d', numAffected);
      console.log('The raw response from Mongo was ', rawResponse);

    });
  });*/



/*router.post("/carListAll", (req, data) => {
})*/




module.exports = router;

