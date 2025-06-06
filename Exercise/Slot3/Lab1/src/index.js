import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Employee from './Employee';
import ListEmployee from './ListEmployee';
import TableEmployee from './TableEmployee';
import DisplayAvg from './AverageAge';
import Menu from './Menu';
import FilterEmployee from './FilterEmployee';
import SortEmployee from './SortEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Employee /> */}
    {/* <ListEmployee /> */}
    <TableEmployee />
    {/* <DisplayAvg /> */}
    <Menu />
    {/* <FilterEmployee /> */}
    {/* <SortEmployee /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
