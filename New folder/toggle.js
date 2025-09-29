import React, { useState } from "react";

export default function ToggleContent() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Content
      </button>
      {show && <p>This is the content that can be toggled!</p>}
    </div>
  );
}

