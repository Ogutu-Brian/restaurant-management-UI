import { LogInFormData } from "../../views/authentication/interfaces";
import { Dispatch } from "redux";
import Cookies from 'js-cookie';
import { AuthenticationAPI } from '../../services/authentication';
import { loginSuccess, loginError } from "./actionCreators/authentication";

export const loginAction = (dispatch: Dispatch) => (credentials: LogInFormData): void => {
  AuthenticationAPI.logIn(credentials).then((response: any): void => {
    Cookies.set('token', response.data, { expires: 1 });
    dispatch(loginSuccess(response.data));
  }).catch((error: any): void => {
    dispatch(loginError(error));
  });
};
