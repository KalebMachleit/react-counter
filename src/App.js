import logo from './logo.svg';
import './App.css';
import CounterButton from './components/CounterButton.jsx'
import CountDisplay from './components/CountDisplay.jsx';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  const subCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const randCount = () => {
    setCount(Math.floor(Math.random() * 100))
  }

  return (
    <div className="App">
      <CountDisplay num={count}></CountDisplay>
      <CounterButton func={addCount} text={'Add 1'}></CounterButton>
      <CounterButton func={subCount} text={'Subtract 1'}></CounterButton>
      <CounterButton func={resetCount} text={'Reset'}></CounterButton>
      <CounterButton func={randCount} text={'Random'}></CounterButton>
    </div>
  );
}

export default App;
