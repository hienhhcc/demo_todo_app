import { Fragment } from 'react';
import { AppLayout } from './layouts';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <Fragment>
      <AppLayout />
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
