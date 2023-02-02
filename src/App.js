import { useState, useDeferredValue } from "react";
import Child from "./Child.js";

function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Child text={deferredText} />
    </>
  );
}

export default App;
