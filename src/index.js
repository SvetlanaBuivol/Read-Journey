import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import App from './components/App';
import GlobalStyle from './css/globlStyles.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter basename="/read-journey">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalStyle />
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
