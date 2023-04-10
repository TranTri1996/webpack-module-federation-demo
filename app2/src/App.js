import React from "react";
import moment from "moment";
import { useCount } from "app1/store";

const App = () => {
  const [count, setCount] = useCount();

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
      <p>{`Today is: ${moment().format("MMMM Do YYYY, h:mm:ss a")}`}</p>
      <p>{`count value is: ${count}`}</p>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default App;
