
const express = require('express')

const router = express.Router()

router.get('/', async(req, res, next)=>{
	res.json('from get')
})

router.get('/:id', async(req, res, next)=>{
	res.json('from get')
})

router.post('/', async(req, res, next)=>{
	res.json('from get')
})


module.exports = router