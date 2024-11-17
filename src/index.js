import React from "react";

import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';

import App from "./App";
import "./index.css";

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// REACT 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
let targetSumNoConsecutiveElements = function (array, targetSum) {
  function backtrack(currSum, i) {
    if (currSum === targetSum) return true;

    if (backtrack(currSum + array[i], i + 2)) return true;

    if (currSum > targetSum || i >= array.length) return false;

    return backtrack(currSum, i + 1);
  }

  return backtrack(0, 0);
};
