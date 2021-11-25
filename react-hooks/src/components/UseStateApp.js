import React, { useState } from "react";

export default function UseStateApp() {
  const [count, seTcount] = useState(0);
  return (
    <div>
      <h1>{count} </h1>
      <button
        onClick={() => {
          seTcount(count + 1);
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
          seTcount(count - 1);
        }}
      >
        DEC
      </button>
    </div>
  );
}
