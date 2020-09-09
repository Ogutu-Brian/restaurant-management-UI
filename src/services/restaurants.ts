import axios from 'axios';
import {
  FETCH_ALL_RESTAURANTS,
  FETCH_ALL_RESTAURANT_TICKETS,
  EDIT_TICKET_ENDPOINT,
  GET_SINGLE_TICKET,
  FETCH_PURCHASE_TICKETS,
  BUY_TICKET,
} from './ApiEndpoints';
import { createAxiosHeaders } from './axiosConfig';
import { Ticket } from '../store/interfaces';

export class RestaurantsAPI {
  static fetchAllRestaurants = (): Promise<any> => {
    return axios.get(FETCH_ALL_RESTAURANTS, {
      headers: createAxiosHeaders()
    });
  };

  static fetchAllTicketsForRestaurant = (restaurantId: string): Promise<any> => {
    return axios.get(`${FETCH_ALL_RESTAURANT_TICKETS}/${restaurantId}/`, {
      headers: createAxiosHeaders()
    });
  };

  static editTicket = (ticketId: string, ticketData: Ticket): Promise<any> => {
    return axios.put(`${EDIT_TICKET_ENDPOINT}/${ticketId}/`, ticketData, {
      headers: createAxiosHeaders()
    });
  };

  static fetchSingleTicket = (ticketId: string): Promise<any> => {
    return axios.get(`${GET_SINGLE_TICKET}/${ticketId}/`, {
      headers: createAxiosHeaders(true)
    });
  };

  static fetchAllPurchaseTickets = (): Promise<any> => {
    return axios.get(FETCH_PURCHASE_TICKETS, {
      headers: createAxiosHeaders(true)
    });
  };

  static buyTicket = (ticketId: string, data?: any): Promise<any> => {
    return axios.put(`${BUY_TICKET}/${ticketId}/`, data, {
      headers: createAxiosHeaders(true),
    });
  };
};
