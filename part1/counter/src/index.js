import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
let count = 1;
ReactDOM.createRoot(document.getElementById('root')).render(<App counter={count} />);