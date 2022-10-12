import * as actionTypes from '../actionsTypes';
import { updateObject } from '../utility';


const initialState = {
    account: null,
    isAuthenticated: false,
    token: null,
}

const UpdateState = (state, action) => {

    return updateObject(state, action.payload)

}

const Reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SESSION_START: return UpdateState(state, action);
        case actionTypes.SESSION_SUCCESS: return UpdateState(state, action);
        case actionTypes.SESSION_FAIL: return UpdateState(state, action);

        default:
            return state;
    }

}

export default Reducer;

