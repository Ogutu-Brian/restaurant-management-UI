import React, { useEffect } from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import Login from './views/authentication/Login';
import Header from './components/Header';
import styles from './App.module.scss';
import Restaurants from './views/restaurants/Restaurants';
import Ticket from './views/tickets/Ticket';
import PurchasesPage from './views/purchase/PurchasePage';
import Cookies from 'js-cookie';

const App: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const token: string | undefined = Cookies.get('token');

    if (!token && window.location.pathname.includes('/tickets')) {
      window.alert('Please log in to view this page');
      history.push('/');
    }
  }, [history]);

  return (
    <div className={styles.app}>
      <Header />
      <Route exact path="/" component={Login} />
      <Route exact path="/tickets" component={Restaurants} />
      <Route exact path="/tickets/:id" component={Ticket} />
      <Route exact path="/purchase" component={PurchasesPage} />
    </div>
  );
};

export default App;
