import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <BatteryDown></BatteryDown>
    </div>
  );
}

function BatteryDown() {
  const [number, setNumber] = useState("100");

  const batteryDown = () => setNumber(number - 10);
  return (
    <div>
      <p>battery status:{number}</p>
      <button onClick={batteryDown} disabled={number === 0 ? true : false}>
        battery down
      </button>
    </div>
  );
}

export default App;
