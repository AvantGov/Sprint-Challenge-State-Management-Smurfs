import { GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURF_FAILURE, ADD_SMURF } from '../actions/actionIndex';

const initialState = {
    data: {},
    isFetching: false,
    hasData: false,
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURF_START:
            console.log('get smurf ran')
            return {
                ...state,
                isFetching: true
            }
        case GET_SMURF_SUCCESS:
            console.log('successfully got a smurf')
            return {
                ...state,
                data: action.payload.data,
                isFetching: false,
                hasData: true
            }
        case GET_SMURF_FAILURE:
            console.log('error on the get, tex')
            return {
                ...state,
                error: 'there was an error in the get request',
                isFetching: false
            }
        case ADD_SMURF:
            console.log('addded a smurf')
            return {
                ...state,
                data: [ ...state.data, {
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height,
                    id: Date.now()
                } ]
            }
        default: 
        return state
    }
}
