import * as React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import EmptyLayout from './src/commons/Empty';
const App: React.FC<any> = props => {
  return (
    <Provider store={store}>
      <EmptyLayout/>
    </Provider>

  );
};

export default App;