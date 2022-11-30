import { useState } from "react";
import Child from "./Child";

function App() {
  const [name, setName] = useState("");

  const clickHandler = () => alert("You clicked me!");

  const passArgument = (message) => alert(message);

  const eventObject = (event) => console.log(event.target.value);

  console.log(name);
  return (
    <>
      <h1>Hello</h1>
      <button onClick={clickHandler}>onClick Event</button>

      <button onClick={() => alert("Inline onClick!")}>Inline</button>

      <button
        onClick={() => passArgument("Passing text via argument to the handler")}
      >
        Click me
      </button>

      <button value={"test"} onClick={eventObject}>
        event Object
      </button>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Child
        data="Pass data from Parent to Child (button)"
        onChildClick={() => alert("Parent to Child")}
      />
    </>
  );
}

export default App;
