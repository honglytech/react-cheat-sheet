import React from "react";

// function Component(props) {
//   return (
//     <>
//       <h1>
//         Name: {props.name} - Age: {props.age}
//       </h1>
//     </>
//   );
// }

// Prop Destructuring
function Component({ name, age }) {
  return (
    <>
      <h1>
        Name: {name}, Age: {age}
      </h1>
    </>
  );
}

export default Component;
