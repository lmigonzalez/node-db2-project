// STRETCH
const cars = [
	{
		vin: '19UYA42601A001865',
		make: 'toyota',
		model: 'prius',
		mileage: 250000,
		title: 'clean',
		transmission: 'manual',
	},
	{
		vin: 'JH4DB1554MS802906',
		make: 'nissan',
		model: 'maxima',
		mileage: 100000,
		title: 'salvage',
	},
	{
		vin: 'JH4CU2F60CC000008',
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