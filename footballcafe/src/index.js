import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "./fonts/nimbus-sans/nimbus-regular.otf";
import "./fonts/nimbus-sans/nimbus-bold.otf";
import "./fonts/Avantgarde/avantgarde-regular.TTF";
import "./fonts/Avantgarde/avantgarde-bold.TTF";

document.title = "football cafe"; // Set the page title

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
