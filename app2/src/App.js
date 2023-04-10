import React from "react";
import moment from "moment";

const App = () => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <h1>App 2</h1>
      <p>{`Today is: ${moment().format()}`}</p>
    </div>
  );
};

export default App;
