import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Search from 'routes/Search';
import createStore from 'Redux/index';
import registerServiceWorker from './registerServiceWorker';

export const browserHistory = createBrowserHistory();
const store = createStore();
registerServiceWorker();

const RootView = () => (
  <Switch>
    <Route path="/search" name="Search" component={Search} />
  </Switch>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <RootView />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
