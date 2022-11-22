import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const express = require("express")

const app = express();

app.get('*', (request, response) => {console.log(request.query); response.send(request.query);})

app.listen(52273, () => {
  console.log('Serer running at http://27.0.0.1:52273');
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
