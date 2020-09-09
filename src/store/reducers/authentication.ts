import { AuthenticationState } from './interfaces';
import { LOGIN_SUCCESS } from '../actionTypes';
import { ActionCreator } from '../actions/interfaces';
const initialState: AuthenticationState = {
  token: {}
};

const authenticationReducer = (
  state: AuthenticationState = initialState, action: ActionCreator): AuthenticationState => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        token: payload
      };
    default:
      return state;
  }
};

export default authenticationReducer;
