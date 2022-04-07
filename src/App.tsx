import { Fragment } from 'react';
import { AppLayout } from './layouts';
import { GlobalStyle } from './styles/globalStyles';

import { configureAppStore } from 'store/configureAppStore';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';

const initialState = {
  authentication: {
    isAuthenticated: false,
  },
};

const queryClient = new QueryClient();

const store = configureAppStore(initialState);

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AppLayout />
          <GlobalStyle />
        </Provider>
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
