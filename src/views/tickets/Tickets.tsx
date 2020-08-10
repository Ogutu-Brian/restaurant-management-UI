import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store/reducers/interfaces';
import { Ticket } from '../../store/interfaces';
import { Link } from 'react-router-dom';
import styles from './Tickets.module.scss';

const Tickets: React.FC = (props) => {
  const tickets: Ticket[] = useSelector((state: RootReducer) => state.tickets.data);

  return (
    <div className={styles.tickets}>
      {tickets.map((ticket: Ticket, index: number) => (
        <div key={ticket.id} className={styles.ticketLink}>
          <span>{`${index + 1}.`}</span>
          <Link to={`/tickets/${ticket.id}`}>
            {ticket.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
