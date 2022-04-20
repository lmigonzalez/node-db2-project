const Cars = require('./cars-model')

const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {

  try{
		const car = await Cars.getById(req.params.id)
		if(!car){
     res.status(404).json({message: `car with id ${car} is not found`})
    }
    else{
      req.car = car
      next()
    }
	}
	catch(err){
		next({message: err.message})
	}

}

const checkCarPayload = (req, res, next) => {
//  const error = {status: 400}

 if(!req.body.vin){
   return next({status: 400, message: 'vin is missing'})
 }
 if(!req.body.make){
  return next({status: 400, message: 'make is missing'})
}
if(!req.body.model){
  return next({status: 400, message: 'model is missing'})
}
if(!req.body.mileage){ 
  return next({status: 400, message: 'mileage is missing'})
}
next()

}

const checkVinNumberValid = (req, res, next) => {

  if(vin.validate(req.body.vin)){
    next()
  }else{
    next({status: 400, message: `vin ${req.body.vin} is invalid`})
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}



module.exports = {

  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}