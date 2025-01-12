import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';

// Create root and render app wrapped with BrowserRouter
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter basename="/FE-Capstone"> {/* Set basename for routing */}
    <App />
  </BrowserRouter>
);
