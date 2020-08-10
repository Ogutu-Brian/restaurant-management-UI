import { AxiosHeader } from './interfaces';
import Cookies from 'js-cookie';

export const createAxiosHeaders = (excludeToken?: boolean): AxiosHeader => {
  let headers: any = {
    Accept: 'application/json',
  };
  const cookieToken: string | undefined = Cookies.get('token');
  let token: string = '';

  if (cookieToken) {
    token = JSON.parse(cookieToken).access;
  }

  return excludeToken ? headers : {
    ...headers,
    Authorization: `Bearer ${token}`
  };
};
