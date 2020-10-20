const path = require('path')
const express = require('express')

const server = express()

const fbroutes = require('./routes/footballroutes')
const spacexroutes = require('./routes/spacexroutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/home/v1/fb', fbroutes)
server.use('/home/v1/spacex', spacexroutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
