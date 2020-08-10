import axios from 'axios';
import { LogInFormData } from '../views/authentication/interfaces';
import { LOGIN_ENDPOINT } from './ApiEndpoints';
import { createAxiosHeaders } from './axiosConfig';

export class AuthenticationAPI {
  static logIn = (credentials: LogInFormData, params?: any): Promise<any> => {
    return axios.post(LOGIN_ENDPOINT, credentials, {
      headers: createAxiosHeaders(true),
      params
    });
  };
}
