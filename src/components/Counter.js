import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let initialCount = 0;
  function addCount(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  function takeCount(e) {
    e.preventDefault();
    setCount(count - 1);
  }

  function reset(e) {
    e.preventDefault();
    setCount(initialCount);
  }
  return (
    <div>
      <h3> Count: {count} </h3>
      <button onClick={addCount}>add</button>
      <button onClick={takeCount}>take</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
