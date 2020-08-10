import { RestaurantsState } from "./interfaces";
import { ActionCreator } from "../actions/interfaces";
import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_ERROR } from "../actionTypes";

const initialState: RestaurantsState = {
  data: [],
  error: null
};

const restaurantsReducer = (
  state: RestaurantsState = initialState,
  action: ActionCreator): RestaurantsState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RESTAURANTS_SUCCESS:
      return {
        data: payload,
        error: null
      };
    case FETCH_RESTAURANTS_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
