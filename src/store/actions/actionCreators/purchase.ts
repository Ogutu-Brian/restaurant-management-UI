import { Ticket } from "../../interfaces";
import { ActionCreator, PurchasedTicket } from "../interfaces";
import {
  FETCH_TICKET_PURCHASES_SUCCESS,
  FETCH_TICKET_PURCHASES_ERROR,
  BUY_TICKET_SUCCESS,
  BUY_TICKET_ERROR
} from "../../actionTypes";

export const fetchAllPurchaseTicketsSuccess = (payload: Ticket[]): ActionCreator => ({
  type: FETCH_TICKET_PURCHASES_SUCCESS,
  payload
});

export const fetchAllPurchaseTicketsError = (payload: any): ActionCreator => ({
  type: FETCH_TICKET_PURCHASES_ERROR,
  payload
});

export const buyTicketSuccess = (payload: PurchasedTicket): ActionCreator => ({
  type: BUY_TICKET_SUCCESS,
  payload
});

export const buTicketError = (payload: any): ActionCreator => ({
  type: BUY_TICKET_ERROR,
  payload
});
