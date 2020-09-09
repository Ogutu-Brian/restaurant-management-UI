import { TicketState } from "./interfaces";
import { ActionCreator } from "../actions/interfaces";
import { FETCH_SINGLE_TICKET_SUCCESS, FETCH_SINGLE_TICKET_ERROR } from "../actionTypes";

const initialState: TicketState = {
  data: undefined,
  error: null
};

const ticketReducer = (state: TicketState = initialState, action: ActionCreator): TicketState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SINGLE_TICKET_SUCCESS:
      return {
        data: payload,
        error: null,
      };
    case FETCH_SINGLE_TICKET_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default ticketReducer;
