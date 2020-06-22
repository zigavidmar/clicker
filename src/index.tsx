import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './sass/global.scss'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
