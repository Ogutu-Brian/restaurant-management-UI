import React, { useEffect } from 'react';
import SingleTicket from './SingleTicket';
import { Ticket } from '../../store/interfaces';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store/reducers/interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchAllPurchaseTickets } from '../../store/actions/purchases';

interface Props {
  fetchTickets: () => void;
}

const PurchasesPage: React.FC<Props> = (props) => {
  const { fetchTickets } = props;
  const tickets: Ticket[] = useSelector((state: RootReducer) => state.purchases.data);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return (
    <div>
      {tickets.map((ticket: Ticket) => (
        <SingleTicket ticket={ticket} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTickets: fetchAllPurchaseTickets(dispatch)
});

export default connect(() => ({}), mapDispatchToProps)(PurchasesPage);
