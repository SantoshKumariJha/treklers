import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Home } from './homePage/Home';
// import LoginScreen from './loginScreen/LoginScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
