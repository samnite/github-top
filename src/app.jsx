import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import store from './store/store';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
