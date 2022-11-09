import React from "react";
import styles from "./Component.module.css";

function Component() {
    return (
      <>
        <div style={{ color: "yellow" }}>
          <p>Line one</p>
        </div>
        <div style={{ color: "red" }}>
          <p>Line two</p>
        </div>

        <div className={styles.greenText}>
          <h1>CSS Modules</h1>
        </div>
    </>
    );
  }
  
  export default Component;