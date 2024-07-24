import { Suspense, useState } from "react";
import "./styles/index.scss";
import Router from "./providers/router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </div>
    </>
  );
}

export default App;
