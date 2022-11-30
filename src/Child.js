function Child({ data, onChildClick }) {
  return (
    <>
      <button onClick={onChildClick}>{data}</button>
    </>
  );
}

export default Child;
