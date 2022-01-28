// import React, { createContext, useContext } from "react";
import React from "react";
import { Provider } from 'react-redux';
import store from './store';
// import { useProductReducer } from './reducers'

// const StoreContext = createContext();
// const { Provider } = StoreContext;

export default function StoreProvider(props) {

  return <Provider store={store} {...props} />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
