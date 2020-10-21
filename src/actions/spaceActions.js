import { getSpaceXData } from '../api/spacexApi'

export const GET_SPACEX_DATA = 'GET_SPACEX_DATA'
export const GET_SPACEX_DATA_SUCCESS = 'GET_SPACEX_DATA_SUCCESS'
export const GET_SPACEX_DATA_FAILURE = 'GET_SPACEX_DATA_FAILURE'

export function getSpaceData (data) {
  console.log('space action sending: ', data)
  return (dispatch) => {
    dispatch(gettingSpaceXData())
    return getSpaceXData(data)
      .then(returnData => {
        console.log('space action returning data: ', returnData)
      })
  }
}

export function gettingSpaceXData () {
  return {
    type: GET_SPACEX_DATA
  }
}
