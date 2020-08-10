import { Restaurant, Ticket } from "../interfaces";

export interface AuthenticationState {
  token: {
    refresh?: string,
    access?: string;
  };
}

export interface RestaurantsState {
  error: any;
  data: Restaurant[];
}

export interface TicketsState {
  error: any;
  data: Ticket[];
  successfulEdit?: boolean;
}

export interface TicketState {
  data?: Ticket,
  error: any;
}

export interface RootReducer {
  auth: AuthenticationState;
  restaurants: RestaurantsState;
  tickets: TicketsState;
  ticket: TicketState;
  purchases: TicketsState;
}
