export interface ActionCreator {
  type: string;
  payload: any;
}

export interface PurchasedTicket {
  id: string,
  ticket: string;
}
