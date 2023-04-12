import React, { Suspense } from "react";
import RemoteApp from "app2/App";
import { useCount } from "app1/store";

const App = () => {
  const [count, setCount] = useCount();

  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>App1</h1>
        <p>{`count value is: ${count}`}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <Suspense fallback="loading...">
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
