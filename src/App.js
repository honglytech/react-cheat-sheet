import { useState } from "react";
import Child from "./Child";

function App() {
  const [num, setNum] = useState(1);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>increment</button>
      <Child number={num} />
    </div>
  );
}

export default App;
