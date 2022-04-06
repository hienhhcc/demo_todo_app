import { Fragment } from 'react';
import { AppLayout } from './layouts';
import { GlobalStyle } from './styles/globalStyles';

import { configureAppStore } from 'store/configureAppStore';
import { Provider } from 'react-redux';

const initialState = {
  authentication: {
    isAuthenticated: false,
  },
};

const store = configureAppStore(initialState);

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <AppLayout />
        <GlobalStyle />
      </Provider>
    </Fragment>
  );
}

export default App;
