import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_ERROR } from '../../actionTypes';
import { ActionCreator } from '../interfaces';
import { Restaurant } from '../../interfaces';

export const fetchRestaurantsSuccess = (payload: Restaurant[]): ActionCreator => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload
});

export const fetchRestaurantsError = (payload: any): ActionCreator => ({
  type: FETCH_RESTAURANTS_ERROR,
  payload
});
