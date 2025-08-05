import React, {useState} from "react";

import './Counter.css';

function Counter() {
  const [ count, setCount ] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} className="counter-button">
      クリック数: {count}
    </button>
  );
}

export default Counter;
