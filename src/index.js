import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { ThemeProvider } from '@mui/system';
import Theme from './styles/Theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
