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
		try{

			const car = await Car.create(req.body)
			res.json(car)

		}catch(err){
			next(err)
		}
   
});

module.exports = router;
