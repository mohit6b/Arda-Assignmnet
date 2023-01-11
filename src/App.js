import React from 'react';
import { Provider } from 'react-redux';
import AddressInput from './components/Form/AddressInput';
import ConnectMetamask from './components/Landing/ConnectMetamask';
import TokenAddressSpace from './components/Landing/TokenAddressSpace';
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ConnectMetamask></ConnectMetamask>  
        <AddressInput></AddressInput>
      </Provider>
    </>
  );
}

export default App;
