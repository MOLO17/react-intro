import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { AppProps, AppState } from './containers/App/App.model';

const data: AppState = JSON.parse(window.sessionStorage.getItem('todos') || '[]');

const persistData: AppProps['persistData'] = data =>
  window.sessionStorage.setItem('todos', JSON.stringify(data));

ReactDOM.render(<App data={data} persistData={persistData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
