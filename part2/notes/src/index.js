import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import service from './services/notes';


const notes = await service.getAll();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);