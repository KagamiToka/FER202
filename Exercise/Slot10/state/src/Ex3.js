import { useState } from "react";

export function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <p>This is the toggle text.</p>}
    </div>
  );
}