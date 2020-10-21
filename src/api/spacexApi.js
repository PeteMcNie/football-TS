import request from 'superagent'

const spaceXUrl = '/home/v1/spacex'

export function getSpaceXData (data) {
  const stringData = data.SpaceX
  //   console.log('SPACEX api string: ', stringData)
  return request
    .get(`${spaceXUrl}/${stringData}`)
    .then(response => {
      console.log('spacex GET request RESPONSE: ', response.body)
    })
}
