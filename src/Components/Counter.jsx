import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <p>Count : {count}</p>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)} className="btn"></button>
        <button onClick={() => setCount(count + 1)} className="btn"></button>
      </div>
    </div>
  );
};

export default Counter;
