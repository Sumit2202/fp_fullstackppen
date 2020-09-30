import React from 'react';
//import logo from './logo.svg';
import './App.css';
const R = require('ramda');

var curriedProps = R.curry(1, Hello);

var Hello = (props) => 
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>

var App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;