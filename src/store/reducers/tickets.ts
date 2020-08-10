import { TicketsState } from "./interfaces";
import { ActionCreator } from "../actions/interfaces";
import {
  FETCH_RESTAURANT_TICKETS_SUCCESS,
  FETCH_RESTAURANT_TICKETS_ERROR,
  EDIT_TICKET_SUCCESS,
  EDIT_TICKET_ERROR,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_ERROR,
  SET_EDIT_MODE,
} from "../actionTypes";
import { Ticket } from "../interfaces";

const initialState: TicketsState = {
  data: [],
  error: null,
  successfulEdit: false,
};

const ticketsReducer = (state = initialState, action: ActionCreator): TicketsState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RESTAURANT_TICKETS_SUCCESS:
      return {
        data: payload,
        error: null
      };
    case FETCH_RESTAURANT_TICKETS_ERROR:
      return {
        ...state,
        error: payload
      };
    case EDIT_TICKET_SUCCESS:
      return {
        ...state,
        successfulEdit: true,
        data: state.data.map((ticket: Ticket) => {
          if (ticket.id === payload.id) {
            return payload;
          }

          return ticket;
        })
      };
    case EDIT_TICKET_ERROR:
      return {
        ...state,
        error: payload
      };
    case DELETE_TICKET_SUCCESS:
      return {
        ...state,
        data: state.data.filter((ticket: Ticket) => ticket.id !== payload.id)
      };
    case DELETE_TICKET_ERROR:
      return {
        ...state,
        error: payload
      };
    case SET_EDIT_MODE:
      return {
        ...state,
        successfulEdit: payload
      };
    default:
      return state;
  }
};

export default ticketsReducer;
