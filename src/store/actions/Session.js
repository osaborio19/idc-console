import * as actionTypes from '../actionsTypes';

//Reducer functions to update state
export const AuthActionReducer = (actionType, payload) => {
    return {
        type: actionType,
        payload: payload
    };
};

export const SetSession = (session) => {
    return dispatch => {

        dispatch(AuthActionReducer(actionTypes.SESSION_START))

        let elementsUpdated = {
            account: session.account,
            isAuthenticated: session.isAuthenticated,
            token: session.token,
        }

        dispatch(AuthActionReducer(actionTypes.SESSION_SUCCESS, elementsUpdated))
    }
}