const express = require('express')

const router = express.Router()

module.exports = router

router.get('/:data', (req, res) => {
  const data = req.params.data
  console.log('Spacexroutes data: ', data)
})
