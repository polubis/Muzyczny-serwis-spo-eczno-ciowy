import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';
import App from "./containers/App";

import storeCreator from './store/config';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

WebFont.load({
    google: {
      families: ['Roboto:300,400,700', 'sans-serif']
    }
});

const { store, persistor } = storeCreator();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , 
  document.getElementById('root'));
registerServiceWorker();
