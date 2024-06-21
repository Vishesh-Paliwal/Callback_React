import './App.css';
import React from 'react';
import { useState , useCallback } from 'react';

function App() {
  const [input , setInput] = useState("");
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => setCount(count+1),[count]);
  return (
    <div className="App">
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>INCREMENT</button>
      <h3>Input Text : {input}</h3>
      <h3>Count : {count}</h3>
      <hr />
      <ChildComponent count={count} onClick={incrementCount}></ChildComponent>
    </div>
  );
}

const ChildComponent = React.memo( function({count}, onClick){
  console.log("rerender");
    return <div>
      <h2>count rerendered: {count}</h2>
    </div>
  })

export default App;
