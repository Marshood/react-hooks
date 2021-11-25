import React, { useState, useRef, useEffect } from "react";

export default function UseRefApp() {
  const [Fname, seTfname] = useState("");
  const [Lname, seTlname] = useState("");
  const FNameRef = useRef();
  const LNameRef = useRef();
  const ButtRef = useRef();

  function run() {
    console.log(Fname, Lname);
  }

  useEffect(() => {
    FNameRef.current.focus();
  }, []);

  function onFirstInputKey(e) {
    if (e.key === "Enter") {
      LNameRef.current.focus();
    }
  }
  function onSecondInputKey(e) {
    if (e.key === "Enter") {
      ButtRef.current.focus();
    }
  }
  return (
    <div>
      <input
        ref={FNameRef}
        value={Fname}
        placeholder="First Name"
        onChange={(e) => seTfname(e.target.value)}
        onKeyDown={onFirstInputKey}
      />
      <input
        ref={LNameRef}
        value={Lname}
        placeholder="Last Name"
        onChange={(e) => seTlname(e.target.value)}
        onKeyDown={onSecondInputKey}
      />

      <button ref={ButtRef} onClick={run}>
        Save
      </button>
    </div>
  );
}
