import { Dispatch } from "redux";
import { RestaurantsAPI } from '../../services/restaurants';
import { Restaurant } from "../interfaces";
import { fetchRestaurantsSuccess, fetchRestaurantsError } from "./actionCreators/restaurants";

interface Response {
  data: Restaurant[];
}

export const fetchAllRestaurants = (dispatch: Dispatch): VoidFunction => (): void => {
  RestaurantsAPI.fetchAllRestaurants().then((response: Response): void => {
    dispatch(fetchRestaurantsSuccess(response.data));
  }).catch((error: any): void => {
    dispatch(fetchRestaurantsError(error));
  });
};
