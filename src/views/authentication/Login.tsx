import React, { useState, ChangeEvent, useEffect } from 'react';
import styles from './Login.module.scss';
import { LogInFormData } from './interfaces';
import { hasAllFieldsFilled } from '../../utils/formUtils';
import { Dispatch } from 'redux';
import { loginAction } from '../../store/actions/authentication';
import { connect, useSelector } from 'react-redux';
import { RootReducer } from '../../store/reducers/interfaces';
import { useHistory } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

interface Props {
  loginUser: (credentials: LogInFormData) => void;
}

const Login: React.FC<Props> = (props) => {
  const { loginUser } = props;
  const [formData, setFormData] = useState<LogInFormData>({
    username: '',
    password: ''
  });
  const authTokens = useSelector((state: RootReducer) => state.auth.token);
  const history = useHistory();

  const onSubmit = () => {
    const isValid: boolean = hasAllFieldsFilled(formData);

    if (isValid) {
      loginUser(formData);
    } else {
      window.alert('Please enter all the fields');
    }
  };

  const onChange = (fieldName: string) => (event: ChangeEvent<any>): void => {
    event.persist();
    setFormData((previousData: LogInFormData): LogInFormData => ({
      ...previousData,
      [fieldName]: event.target.value
    }));
  };

  useEffect(() => {
    if (authTokens.access) {
      history.push('/tickets');
    }
  }, [authTokens, history]);

  return (
    <div className={styles.login}>
      <div className={styles.header}>Log In</div>
      <Input
        placeholder="Enter your username"
        onChange={onChange('username')}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        className={styles.input}
        onChange={onChange('password')}
      />
      <Button
        className={styles.button}
        onClick={onSubmit}>
        Log In
       </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginUser: loginAction(dispatch)
});

export default connect(() => ({}), mapDispatchToProps)(Login);
