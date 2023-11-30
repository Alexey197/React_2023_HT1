import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ApiContext from './context/api.js';
import api from './api'
import stores from './stores'
import { BrowserRouter } from 'react-router-dom';
import StoresContext from './context/stores.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <ApiContext.Provider value={api}>
    <StoresContext.Provider value={stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoresContext.Provider>
  </ApiContext.Provider>
);

import 'bootstrap/dist/css/bootstrap.css'

// import './stores/cart'