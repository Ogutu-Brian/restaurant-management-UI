const BASE_URL: string | undefined = process.env.REACT_APP_API_BASE_URL;

export const LOGIN_ENDPOINT: string = `${BASE_URL}/profile/token/`;

export const FETCH_ALL_RESTAURANTS: string = `${BASE_URL}/restaurant/`;

export const FETCH_ALL_RESTAURANT_TICKETS: string = `${BASE_URL}/restaurant/ticket`;
export const EDIT_TICKET_ENDPOINT: string = `${BASE_URL}/restaurant/ticket/edit`;
export const GET_SINGLE_TICKET: string = `${BASE_URL}/restaurant/ticket/single`;

export const FETCH_PURCHASE_TICKETS: string = `${BASE_URL}/restaurant/purchase/tickets/`;
export const BUY_TICKET: string = `${BASE_URL}/restaurant/ticket/buy`;
