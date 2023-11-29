import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import PartyCalcApp from "./app/PartyCalcApp";
import {Provider} from "react-redux";
// import store from './app/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//              <PartyCalcApp/>
//          </Provider>
//      </React.StrictMode>,
//      document.getElementById('root')
//  );
root.render(<PartyCalcApp/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
