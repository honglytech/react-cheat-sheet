import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <p>You've clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>Click me</button>
  //   </div>
  // );

  useEffect(() => {
    console.log("Initialised");

    // clean up function runs before the component is unmounted
    return () => {
      console.log("Cleaned up");
    };
  }, []); // empty array: run during mount only

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log(`You clicked ${count} times`);
  }, [count]);
  // array with count: run every time `count` changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
