import './App.css';
import { useState } from "react";
import './components/counter_label.js';
import CounterLabel from './components/counter_label.js';
import CounterButton from './components/counter_button.js';


function App() {
  const [currentCounter, setCounter] = useState(0);
  return (
    <div className="App">
      <CounterLabel currentCounter={currentCounter}></CounterLabel>
      <CounterButton currentCounter={currentCounter} setCounter={setCounter} forIncrement={true}></CounterButton>
      <CounterButton currentCounter={currentCounter} setCounter={setCounter} forIncrement={false}></CounterButton>
    </div>
  );
}

export default App;
