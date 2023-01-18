import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={""}>Focus Input test</button>
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}

export default App;
