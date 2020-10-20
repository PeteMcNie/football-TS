// export function getTeam (team) {
//   console.log('api: getteam hit', team)
//   fetch('/home', { method: 'POST', body: team })
//     .then(response => {
//         console.log('api POST response', response)
//         return response.body
//     })
// }

import request from 'superagent'

const footballUrl = '/home/v1/fb'

export function getTeam (team) {
  // console.log('footballapi: getteam hit', team)
  return request
    .get(`${footballUrl}/${team}`)
    .then(response => {
    //  console.log('footballapi POST response', response.body)
      return response.body
    })
}
