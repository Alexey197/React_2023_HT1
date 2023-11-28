import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ApiContext from './context/api.js';
import api from './api'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <ApiContext.Provider value={api}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiContext.Provider>
);

import 'bootstrap/dist/css/bootstrap.css'