import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderCustom from './components/HeaderCustom';

ReactDOM.render(
  <React.StrictMode>
    <HeaderCustom />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
