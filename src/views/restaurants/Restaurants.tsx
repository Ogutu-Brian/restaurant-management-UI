import React, { ChangeEvent, useEffect } from 'react';
import styles from './Restaurants.module.scss';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store/reducers/interfaces';
import { Restaurant } from '../../store/interfaces';
import { Dispatch } from 'redux';
import { fetchAllRestaurants } from '../../store/actions/restaurants';
import { connect } from 'react-redux';
import { fetchAllRestaurantTickets } from '../../store/actions/tickets';
import Tickets from '../tickets/Tickets';

interface Props {
  fetchAllRestaurants: () => void;
  fetchTickets: (restaurantId: string) => void;
}

const Restaurants: React.FC<Props> = (props) => {
  const restaurants: Restaurant[] = useSelector((state: RootReducer) => state.restaurants.data);
  const { fetchAllRestaurants, fetchTickets } = props;

  const onChange = (e: ChangeEvent<HTMLSelectElement>): void | undefined => {
    fetchTickets(e.target.value);
  };

  useEffect(() => {
    fetchAllRestaurants();
  }, [fetchAllRestaurants]);

  return (
    <div className={styles.restaurants}>
      <div>Please Select a restaurant</div>
      <select
        name="restaurants"
        id="restaurants"
        onChange={onChange}
        placeholder="Please select"
        defaultValue="Example"
      >
        <option value="" id="default">
          Choose your restaurant
        </option>
        {restaurants.map((restaurant: any) => (
          <option value={restaurant.id} key={restaurant.id}>
            {restaurant.name}
          </option>
        ))}
      </select>
      <Tickets />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  fetchAllRestaurants: fetchAllRestaurants(dispatch),
  fetchTickets: fetchAllRestaurantTickets(dispatch),
});

export default connect(() => ({}), mapDispatchToProps)(Restaurants);
