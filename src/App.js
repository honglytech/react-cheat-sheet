import React, { useState, useTransition } from "react";

function App() {
  const [name, setName] = useState("");
  const [lists, setLists] = useState([]);
  const [isPending, startTransition] = useTransition();
  const LIST_SIZE = 10000;

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);

    startTransition(() => {
      const dataList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        dataList.push(value);
      }
      setLists(dataList);
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        lists.map((list) => {
          return <div key={list}>{list}</div>;
        })
      )}
      {/* {lists.map((list) => {
        return <div key={list}>{list}</div>;
      })} */}
    </div>
  );
}

export default App;
