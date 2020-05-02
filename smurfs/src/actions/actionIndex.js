// * dependencies:
import axios from 'axios'


// * action constants: 
export const GET_SMURF_START = 'GET_SMURF_START'
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS'
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE'

export const ADD_SMURF = 'ADD_SMURF'

// * action creator: 
export const getData = () => dispatch => {
    dispatch({ type: GET_SMURF_START });
    axios.get(`http://localhost:3333/smurfs`)
        .then((response) => {
            console.log('API response:', response)
            dispatch({ type: GET_SMURF_SUCCESS, payload: response })
        })
        .catch((error) => {
            console.log('error, Tex:', error)
            dispatch({ type: GET_SMURF_FAILURE, payload: error })
        })
}

export const addData = (data) => {
    console.log('data:', data)
    return { type: ADD_SMURF, payload: data }
}
