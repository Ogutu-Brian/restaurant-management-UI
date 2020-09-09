import { LOGIN_SUCCESS, LOGIN_ERROR } from '../../actionTypes';
import { ActionCreator } from '../interfaces';

export const loginSuccess = (payload: any): ActionCreator => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginError = (payload: any): ActionCreator => ({
  type: LOGIN_ERROR,
  payload
});
