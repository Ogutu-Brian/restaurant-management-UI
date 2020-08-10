export interface Restaurant {
  id: string,
  name: string,
  owner: string;
}

export interface Ticket {
  id: string;
  name: string;
  max_purchase_count: number;
  number_purchased: number;
  is_deleted: boolean;
  restaurant: string;
  amount:number;
}
