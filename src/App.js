import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  // const [count, dispatch] = useReducer((state, action) => {
  //   switch (action) {
  //     case "increment":
  //       return state + 1;
  //     case "decrement":
  //       return state - 1;
  //     default:
  //       throw new Error();
  //   }
  // }, 0);

  // return (
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={() => dispatch("increment")}>+</button>
  //     <button onClick={() => dispatch("decrement")}>-</button>
  //   </div>
  // );

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default App;
