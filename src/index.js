import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import GlobalStyle from './css/globlStyles.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter basename='/read-journey/'>
        <GlobalStyle />
        <App />
      </BrowserRouter>
      </Suspense>
  </React.StrictMode>
);
