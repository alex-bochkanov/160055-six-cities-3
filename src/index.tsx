import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { CITIES } from './const';
import { store } from './store';
import { getToken } from './services/token';
import { userActions } from './store/slices/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(
  getToken() ? userActions.checkAuth() : userActions.setNoAuth()
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App cities={CITIES} />
    </Provider>
  </React.StrictMode>
);
