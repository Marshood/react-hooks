import React, { useCallback } from "react";

export default function UseCallback() {
  const handleClick = useCallback(() => {
    // handle the click event
    console.log("useCallback");
  }, []);




  return(
    <button onClick={handleClick}>aa</button>
  );
}
