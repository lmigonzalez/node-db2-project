// STRETCH
const cars = [
	{
		vin: '1234567890',
		make: 'toyota',
		model: 'prius',
		mileage: 250000,
		title: 'clean',
		transmission: 'manual',
	},
	{
		vin: '1231237890',
		make: 'nissan',
		model: 'maxima',
		mileage: 100000,
		title: 'salvage',
	},
	{
		vin: '1234561230',
		make: 'ford',
		model: 'focus',
		mileage: 15000,
	},
]


exports.seed = function(knex){
	return knex('cars')
	.truncate().then(()=>{
		return knex('cars').insert(cars)
	})

}