const express = require('express')
// const db = require('../db/queries')

const router = express.Router()

const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, '../db/footballdata.json')

module.exports = router

router.get('/:team', (req, res) => {
  // const team = req.params.team
  // console.log('football routes ', team)   NOT CURRENTLY BEING USED AS USING FILE SYSTEM NOT DB

  //   db.getMatches()
  //     .then(matches => {
  //       // console.log('GET ROUTE MATCHES ', matches)
  //       res.status(200).send(matches)
  //     })
  //     .catch(err => {
  //       res.status(500).send('Database error: ' + err.message)
  //     })
  // })

  fs.readFile(filepath, 'utf8', (err, contents) => { // CURRENTLY GETTING DATA FROM FS NOT DB
    if (err) { throw err }
    const matchInfo = JSON.parse(contents)
    res.send(matchInfo)
  })
})

// FURTHER API CALLS COULD BE MADE USING THE BELOW:

// 'https://api.football-data.org/v2/competitions/PL/matches' //ALL MATCHES FOR THAT COMPETION
// '/v2/competitions/{id = PL}/standings'  ALL STANDINGS FOR THAT COMPETION
// '/v2/teams/{id}/matches/'  ALL MATCHES FOR A TEAM
