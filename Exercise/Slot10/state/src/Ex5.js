import { useState } from "react";

export function ColorSwitcher() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ backgroundColor: color, height: 100, marginTop: 10 }}>
        Selected Color: {color}
      </div>
    </div>
  );
}