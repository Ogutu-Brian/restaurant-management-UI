import { Dispatch } from "redux";
import { RestaurantsAPI } from "../../services/restaurants";
import { Ticket } from "../interfaces";
import {
  fetchRestaurantTicketsSuccess,
  fetchRestaurantTicketsError,
  editTicketSuccess,
  deleteTicketSuccess,
  editTicketError,
  deleteTicketError,
  fetchSingleTicketSuccess,
  fetchSingleTicketError
} from "./actionCreators/tickets";

interface TicketCollection {
  data: Ticket[];
}

interface SingleTicket {
  data: Ticket;
}


export const fetchAllRestaurantTickets = (dispatch: Dispatch) => (restaurantId: string): void => {
  RestaurantsAPI.fetchAllTicketsForRestaurant(restaurantId).then((response: TicketCollection) => {
    dispatch(fetchRestaurantTicketsSuccess(response.data));
  }).catch((error: any) => {
    dispatch(fetchRestaurantTicketsError(error));
  });
};

export const editTicket = (dispatch: Dispatch) => (
  ticketId: string,
  ticketData: Ticket,
  isDelete?: boolean): void => {
  RestaurantsAPI.editTicket(ticketId, ticketData).then((response: SingleTicket): void => {
    const data = { ...response.data, id: ticketId };
    !isDelete
      ? dispatch(editTicketSuccess(data)) && dispatch(fetchSingleTicketSuccess(data))
      : dispatch(deleteTicketSuccess(data));
  }).catch((error: any): void => {
    !isDelete ? dispatch(editTicketError(error)) : dispatch(deleteTicketError(error));
  });
};

export const fetchSingleTicket = (dispatch: Dispatch) => (ticketId: string): void => {
  RestaurantsAPI.fetchSingleTicket(ticketId).then((response: SingleTicket): void => {
    dispatch(fetchSingleTicketSuccess(response.data));
  }).catch((error: any): void => {
    dispatch(fetchSingleTicketError(error));
  });
};
