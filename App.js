import './App/@fake-db'
import React from 'react';
import {Provider} from 'react-redux';
import store from './App/store';
import MSGreact from './App/MSGreact';

const App = ()=>{
  return(
    <>
      <Provider store={store}>
        <MSGreact/>
      </Provider>
    </>
  )
}

export default App;
