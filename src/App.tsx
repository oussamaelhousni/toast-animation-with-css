import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="toast-container">
        {Array.from({ length: count }, (_, index) => index).map((item) => {
          return <Card item={item} key={item} count={count} />;
        })}
      </div>
      <button onClick={() => setCount(count + 1)}>add Toast</button>
    </main>
  );
}

function Card({ item, count }: any) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div
      key={item}
      className="toast"
      style={{ "--index": count - 1 - item } as React.CSSProperties}
      data-mounted={isMounted}
    >
      {item}
    </div>
  );
}
export default App;
