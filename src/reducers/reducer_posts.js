import _ from 'lodash'

export default function(state={},action){
    switch(action.type){
        case 'FETCH_POSTS':

        return(
            _.mapKeys(action.payload.data,'id')
        )

        case 'DELETE_POST':
        return _.omit(state, action.payload)

        case 'FETCH_POST':
        //const post = action.payload.data
        //const newState = {...state}
        //newState[post.id]=post
        //return newState
            return{...state, [action.payload.data.id]:action.payload.data}
        default:
       
        return state
    }
}