import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import GlobalStyle from './css/globlStyles.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <BrowserRouter basename='/read-journey'>
        <GlobalStyle />
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
