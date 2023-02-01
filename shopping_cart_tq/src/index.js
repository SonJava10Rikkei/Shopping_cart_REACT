import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { reducer } from "./reducers";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Taoj store cho ungw dung reducer cua ung dung
const storeApp = createStore(reducer);
root.render(
  // cung caaps storeApp cho cac component cua ung dung
  <Provider store={storeApp}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();