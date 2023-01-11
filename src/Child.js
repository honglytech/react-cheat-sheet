import { useMemo } from "react";

function Child({ number }) {
  // Use the useMemo hook to memoize the result of the expensive calculation
  const memoizedDoubleNumber = useMemo(() => {
    console.log("calculating doubleNumber");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h1>Number: {number}</h1>
      <h1>Double Number: {memoizedDoubleNumber}</h1>
    </div>
  );
}
export default Child;
