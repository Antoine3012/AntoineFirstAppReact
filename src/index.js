import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MIS from './App';
import reportWebVitals from './reportWebVitals';


// var style = {
//   backgroundColor: '#2e3192',
//   color: 'white',
//   fontFamily: 'Arial'
// }

// const title = React.createElement(
//   'h1',
//   { id: 'title', className: 'header',style: style },
//   'Hello World'
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MIS />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
