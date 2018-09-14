import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';

WebFont.load({
    google: {
      families: ['Roboto:300,400,700', 'sans-serif']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
