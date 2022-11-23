import "./App.css";
import Component from "./Component";

const people = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Jack", age: 20 },
  { id: 3, name: "Jim", age: 35 },
];

function App() {
  // Display a list of data
  // return people.map((person) => <div key={person.id}>{person.name}</div>);

  // Pass a list of data to another component
  return people.map(({ id, ...person }) => <Component key={id} {...person} />);
}

export default App;
