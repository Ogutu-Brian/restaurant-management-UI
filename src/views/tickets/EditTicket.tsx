import React, { useEffect, useState, ChangeEvent } from 'react';
import { Ticket } from '../../store/interfaces';
import styles from './Tickets.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../store/reducers/interfaces';
import { Dispatch } from 'redux';
import { setEditMode as setReduxEditMode } from '../../store/actions/actionCreators/tickets';

interface Props {
  ticket: Ticket;
  setEditMode: (value: boolean) => void;
  editTicket: (ticketId: string, ticketData: Ticket, isDelete?: boolean) => void;
}

const EditTicket: React.FC<Props> = (props) => {
  const { ticket, setEditMode, editTicket } = props;
  const successfulEdit: boolean | undefined = useSelector((
    state: RootReducer
  ) => state.tickets.successfulEdit);
  const dispatch: Dispatch = useDispatch();
  const [editData, setEditData] = useState<Ticket>(ticket);
  enum FIELDS {
    NAME = 'name',
    MAX_PURCHASE_COUNT = 'max_purchase_count'
  }

  useEffect(() => {
    if (successfulEdit) {
      setEditMode(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successfulEdit]);

  const cancelEdit = (): void => {
    dispatch(setReduxEditMode(false));
    setEditMode(false);
  };

  const onSave = (): void => {
    editTicket(ticket.id, editData);
  };

  const onChange = (fieldName: string) => (e: ChangeEvent<HTMLInputElement>): void => {
    setEditData({
      ...editData,
      [fieldName]: e.target.value
    });
  };

  return (
    <div className={styles.editTicket}>
      <Input
        placeholder="Edit name"
        defaultValue={ticket.name}
        onChange={onChange(FIELDS.NAME)}
      />
      <Input
        placeholder="Edit max purchases"
        defaultValue={ticket.max_purchase_count}
        onChange={onChange(FIELDS.MAX_PURCHASE_COUNT)}
      />
      <div className={styles.buttonsContainer}>
        <Button className={styles.editBtn} onClick={onSave}>Save</Button>
        <Button className={styles.editBtn} onClick={cancelEdit}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditTicket;
