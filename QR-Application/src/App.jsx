import { useState } from "react";
import QrCard from "./QrCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="Bg">
      <QrCard />
    </section>
  );
}

export default App;
