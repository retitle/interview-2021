import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { vanillaAutoComplete } from './AutoComplete';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

vanillaAutoComplete(document.getElementById('vanilla-autocomplete'));

