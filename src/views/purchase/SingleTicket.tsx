import React from 'react';
import { Ticket } from '../../store/interfaces';
import styles from './PurchasePage.module.scss';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from '../../components/Button';
import { purchaseATicket } from '../../store/actions/purchases';

interface Props {
  ticket: Ticket;
  buyTicket: (ticketId: string) => void;
}

const SingleTicket: React.FC<Props> = (props) => {
  const { ticket, buyTicket } = props;
  const availableTickets: number = ticket.max_purchase_count - ticket.number_purchased;

  return (
    <div className={styles.ticket}>
      <div className={styles.name}>{ticket.name}</div>
      <div className={styles.purchaseCount}>
        <div>Available tickets</div>
        <div>{availableTickets}</div>
      </div>
      <div className={styles.amount}>
        <div>Amount</div>
        <div>{ticket.amount}</div>
      </div>
      <div>
        <Button
          className={styles.button}
          disabled={availableTickets ? false : true}
          onClick={() => buyTicket(ticket.id)}
        >
          Buy
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  buyTicket: purchaseATicket(dispatch)
});

export default connect(() => ({}), mapDispatchToProps)(SingleTicket);
