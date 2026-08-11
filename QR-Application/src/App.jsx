import { useState } from "react";
import QrCard from "./components/QrCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QrCard />
    </>
  );
}

export default App;
