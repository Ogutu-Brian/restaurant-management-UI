import { combineReducers } from 'redux';
import auth from './authentication';
import restaurants from './restaurants';
import tickets from './tickets';
import ticket from './ticket';
import purchases from './purchases';

export default combineReducers({
  auth,
  restaurants,
  tickets,
  ticket,
  purchases
});
