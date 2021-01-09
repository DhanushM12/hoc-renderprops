import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CounterComponent from './CounterComponent';
import Counter from './Counter';
import WithCounter from './WithCounter';


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

//ReactDOM.render(<CounterComponent render={props => <Counter {...props}/>} />, document.getElementById('root'));
const CounterEx = WithCounter(Counter);
ReactDOM.render(<CounterEx />, document.getElementById('root'));
