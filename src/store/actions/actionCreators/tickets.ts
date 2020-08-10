import { Ticket } from "../../interfaces";
import { ActionCreator } from "../interfaces";
import {
  FETCH_RESTAURANT_TICKETS_SUCCESS,
  FETCH_RESTAURANT_TICKETS_ERROR,
  EDIT_TICKET_SUCCESS,
  EDIT_TICKET_ERROR,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_ERROR,
  SET_EDIT_MODE,
  FETCH_SINGLE_TICKET_SUCCESS,
  FETCH_SINGLE_TICKET_ERROR
} from "../../actionTypes";

export const fetchRestaurantTicketsSuccess = (payload: Ticket[]): ActionCreator => ({
  type: FETCH_RESTAURANT_TICKETS_SUCCESS,
  payload
});

export const fetchRestaurantTicketsError = (error: any): ActionCreator => ({
  type: FETCH_RESTAURANT_TICKETS_ERROR,
  payload: error
});

export const editTicketSuccess = (payload: Ticket): ActionCreator => ({
  type: EDIT_TICKET_SUCCESS,
  payload
});

export const editTicketError = (payload: Ticket): ActionCreator => ({
  type: EDIT_TICKET_ERROR,
  payload
});

export const deleteTicketSuccess = (payload: Ticket): ActionCreator => ({
  type: DELETE_TICKET_SUCCESS,
  payload
});

export const deleteTicketError = (payload: Ticket): ActionCreator => ({
  type: DELETE_TICKET_ERROR,
  payload
});

export const setEditMode = (payload: boolean): ActionCreator => ({
  type: SET_EDIT_MODE,
  payload
});

export const fetchSingleTicketSuccess = (payload: Ticket): ActionCreator => ({
  type: FETCH_SINGLE_TICKET_SUCCESS,
  payload
});

export const fetchSingleTicketError = (payload: Ticket): ActionCreator => ({
  type: FETCH_SINGLE_TICKET_ERROR,
  payload
});
