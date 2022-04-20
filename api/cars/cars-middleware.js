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
   res.status(400).json({message: 'vin is missing'})
  //  return next({status: 400, message: 'vin is missing'})
 }
 if(!req.body.make){
  res.status(400).json({message: 'make is missing'})
  // return next({status: 400, message: 'make is missing'})
}
if(!req.body.model){
  res.status(400).json({message: 'model is missing'})
  // return next({status: 400, message: 'model is missing'})
}
if(!req.body.mileage){ 
  res.status(400).json({message: 'mileage is missing'})
  // return next({status: 400, message: 'mileage is missing'})
}
next()

}

const checkVinNumberValid = (req, res, next) => {

  if(vin.validate(req.body.vin)){
    next()
  }else{
    res.status(400).json({message: `vin ${req.body.vin} is invalid`})
    // next({status: 400, message: `vin ${req.body.vin} is invalid`})

  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const existing = await Cars.getByVin(req.body.vin)
    if(!existing){
      next()
    }
    else( res.status(400).json({message: `vin ${req.body.vin} already exists`}))
    // else({status: 400, message: `vin ${req.body.vin} already exists`})
  }
  catch(err){
    next(err)
  }
}



module.exports = {

  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}