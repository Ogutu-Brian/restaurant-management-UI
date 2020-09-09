import { Dispatch } from "redux";
import { RestaurantsAPI } from "../../services/restaurants";
import { Ticket } from "../interfaces";
import {
  fetchAllPurchaseTicketsSuccess,
  fetchAllPurchaseTicketsError,
  buyTicketSuccess,
  buTicketError
} from "./actionCreators/purchase";
import { PurchasedTicket } from "./interfaces";

interface AllPurchases {
  data: Ticket[];
}

interface BuyTicket {
  data: PurchasedTicket;
}

export const fetchAllPurchaseTickets = (dispatch: Dispatch) => (): void => {
  RestaurantsAPI.fetchAllPurchaseTickets().then((response: AllPurchases): void => {
    dispatch(fetchAllPurchaseTicketsSuccess(response.data));
  }).catch((error: any) => {
    dispatch(fetchAllPurchaseTicketsError(error));
  });
};

export const purchaseATicket = (dispatch: Dispatch) => (ticketId: string) => {
  RestaurantsAPI.buyTicket(ticketId).then((response: BuyTicket): void => {
    dispatch(buyTicketSuccess(response.data));
  }).catch((error: any): void => {
    dispatch(buTicketError(error));
  });
};
