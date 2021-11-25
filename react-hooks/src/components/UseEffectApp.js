import React, { useEffect } from "react";

export default function UseEffectApp() {
  useEffect(() => {
    alert("useEffect running.!");
    console.log("useEffect runnig");
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
    </div>
  );
}
