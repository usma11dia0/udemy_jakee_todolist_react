import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'))

reportWebVitals();
