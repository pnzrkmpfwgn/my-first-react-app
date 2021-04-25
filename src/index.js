import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import Reducer from './store/reducer/reducer'
const store = createStore(Reducer);

ReactDOM.render(<Provider store={store} ><React.Fragment><HashRouter><App /></HashRouter></React.Fragment></Provider>, document.getElementById('root'));


serviceWorker.unregister();
