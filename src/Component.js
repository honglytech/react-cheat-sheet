import React from "react";

// function Component(props) {
//     return (
//       <>
//         <h1>
//           Name: {props.name} Age: {props.age}
//         </h1>
//       </>
//     );
//   }

// Destructured props
// function Component({name, age}) {
//   return (
//     <>
//       <h1>
//         Name: {name} Age: {age}
//       </h1>
//     </>
//   )
// }

// children
// function Component({ children }) {
//   return (
//     <>
//       <h1>
//         Name: {children}
//       </h1>
//     </>
//   )
// }

// Default props - JavaScript
// function Component({ name = "Mike" }) {
//   return (
//     <>
//       <h1>
//         Name: {name}
//       </h1>
//     </>
//   )
// }

// Default props - React
function Component({ name }) {
  return (
    <>
      <h1>
        Name: {name}
      </h1>
    </>
  )
}

Component.defaultProps = {
  name: "Hong"
}
  
export default Component;