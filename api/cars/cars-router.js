const express = require("express");

const Car = require("./cars-model");

const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid } = require("./cars-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.status(201).json('hello')
  Car.getAll()
    .then((cars) => {
      res.status(201).json(cars);
    })
    .catch((err) => {
      next(err);
    });
});



router.get("/:id", checkCarId, async (req, res, next) => {
//   res.status(201).json(req.cars)
  
try{
	res.json(req.car)
}
catch(err){
	next(err)
}

});



router.post("/",
 	checkCarPayload,
	checkVinNumberUnique, 
	checkVinNumberValid, async (req, res, next) => {
  res.json("from get");
});

module.exports = router;
