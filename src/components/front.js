import React from 'react';
import '../App.css';
import logo from './assets/logo.svg';

const Front = () => {
  return (
      <h2 className="Front">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Hello World!
       </p>
       <a
         className="App-link"
         href="https://github.com/deliverydriver"
         target="_blank"
         rel="noopener noreferrer"
       >
          Check me out.
       </a>
     </h2>
  );
}

export default Front;
