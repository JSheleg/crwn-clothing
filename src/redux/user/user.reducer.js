import { UserActionTypes } from "./user.types";

//reducer is a function that gets two properties
const INITIAL_STATE = {
    currentUser: null
}

//state initial default value
const userReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;