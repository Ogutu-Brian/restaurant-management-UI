import { TicketsState } from "./interfaces";
import { ActionCreator } from "../actions/interfaces";
import {
  FETCH_TICKET_PURCHASES_SUCCESS,
  FETCH_TICKET_PURCHASES_ERROR,
  BUY_TICKET_SUCCESS,
  BUY_TICKET_ERROR
} from "../actionTypes";
import { Ticket } from "../interfaces";

const initialState: TicketsState = {
  data: [],
  error: null,
  successfulEdit: false,
};

const purchasesReducer = (state = initialState, action: ActionCreator): TicketsState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TICKET_PURCHASES_SUCCESS:
      return {
        data: payload,
        error: null
      };
    case FETCH_TICKET_PURCHASES_ERROR:
      return {
        ...state,
        error: payload
      };
    case BUY_TICKET_SUCCESS:
      return {
        ...state,
        data: state.data.map((ticket: Ticket) => {
          if (ticket.id === payload.ticket) {
            return {
              ...ticket,
              number_purchased: ticket.number_purchased + 1
            };
          }
          return ticket;
        })
      };
    case BUY_TICKET_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default purchasesReducer;

