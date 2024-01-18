import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import StepContext from './StepContext';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './redux Services/reducer/Count_reducer'
import bookData from './redux Services/reducer/Book_reducer'

import storetoolkit from './redux toolkit/Store_toolkit'


const store = createStore(counterReducer);
const bookStore = createStore(bookData);
ReactDOM.render(
  // <StepContext>
  //   {/* <React.StrictMode>
  //     <App />
  //   </React.StrictMode> */}
  // </StepContext>
  <Provider store={storetoolkit}>
    {/* <Provider store={bookStore}> */}
    <App />
    {/* </Provider> */}
  </Provider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
