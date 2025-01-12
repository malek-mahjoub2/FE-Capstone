import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/FE-Capstone"> {/* Add basename here */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
