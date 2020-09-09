import React, { useState, useEffect } from 'react';
import { Ticket } from '../../store/interfaces';
import styles from './Tickets.module.scss';
import EditTicket from './EditTicket';
import { Dispatch } from 'redux';
import { editTicket, fetchSingleTicket } from '../../store/actions/tickets';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setEditMode as setReduxEditMode } from '../../store/actions/actionCreators/tickets';
import { useHistory } from 'react-router-dom';
import { RootReducer } from '../../store/reducers/interfaces';

interface Props {
  editTicket: (ticketId: string, ticketData: Ticket, isDelete?: boolean) => void;
  fetchTicket: (ticketId: string) => void;
  match: {
    params: {
      id?: string;
    };
  };
}

const SingleTicket: React.FC<Props> = (props) => {
  const { editTicket, fetchTicket, match: { params } } = props;
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const dispatch: Dispatch = useDispatch();
  const history = useHistory();
  const stateTicket: Ticket | undefined = useSelector((state: RootReducer) => state.ticket.data);
  const [ticket, setTicket] = useState<Ticket>({
    id: '',
    name: '',
    max_purchase_count: 0,
    is_deleted: false,
    number_purchased: 0,
    restaurant: '',
    amount: 0
  });

  useEffect(() => {
    const ticketId: string | undefined = params.id;

    if (ticketId) {
      fetchTicket(ticketId);
    }
  }, [fetchTicket, params]);

  useEffect(() => {
    if (stateTicket) {
      setTicket(stateTicket);
    }
  }, [stateTicket]);

  if (isEditMode) {
    return (
      <EditTicket
        ticket={ticket}
        setEditMode={(value: boolean) => (setEditMode(value))}
        editTicket={editTicket}
      />
    );
  }

  const onEditModeSet = (): void => {
    dispatch(setReduxEditMode(false));
    setEditMode(true);
  };

  const deleteTicket = (): void => {
    editTicket(ticket.id, {
      ...ticket,
      is_deleted: true
    }, true);

    history.push('/tickets');
  };

  return (
    <div className={styles.ticket}>
      <div className={styles.name}>{ticket.name}</div>
      <div className={styles.purchaseCount}>
        <div>Maximum purchase count</div>
        <div>{ticket.max_purchase_count}</div>
      </div>
      <div className={styles.ticketsPurchased}>
        <div>Tickets purchased</div>
        <div>{ticket.number_purchased}</div>
      </div>
      <div className={styles.buttonsContainer}>
        <div>
          <button className={styles.editBtn}
            onClick={onEditModeSet}>
            Edit
          </button>
        </div>
        <div>
          <button className={styles.deleteBtn}
            onClick={deleteTicket}
          >
            Delete
           </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  editTicket: editTicket(dispatch),
  fetchTicket: fetchSingleTicket(dispatch)
});

export default connect(() => ({}), mapDispatchToProps)(SingleTicket);
