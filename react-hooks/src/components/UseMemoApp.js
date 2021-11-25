import React, { useState, useMemo, useRef, useEffect } from "react";

export default function UseMemoApp() {
  const [Fname, seTfname] = useState("");
  const [Lname, seTlname] = useState("");
  const [Age, seTage] = useState("");
  const [dark, setDark] = useState(true);
  const randomColor = () =>
    "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  const FNameRef = useRef();
  const LNameRef = useRef();
  const AgeRef = useRef();

  const themeStyles = useMemo(() => {
     return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  //   const themeStyles2= {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   }

  useEffect(() => {
    console.log("themeStyles ..");
  }, [themeStyles]);

  useEffect(() => {
    FNameRef.current.focus();
  }, []);

  function onFirstNameInputKey(e) {
    if (e.key === "Enter") {
      LNameRef.current.focus();
    }
  }

  function onLastNameInputKey(e) {
    if (e.key === "Enter") {
      AgeRef.current.focus();
    }
  }

  // const FullName = <h1 style={{
  //     color: randomColor()
  // }}>
  // {Fname} {Lname}
  // </h1>
  const FullName = useMemo(
    () => (
      <h1
        style={{
          color: randomColor(),
        }}
      >
        {Fname} {Lname}
      </h1>
    ),
    [Fname, Lname]
  );

  return (
    <div style={themeStyles}>
      <div
        style={{
          margin: 15,
          width: "100%",
        }}
      >
        <button
          onClick={() => {
            setDark((prevDark) => !prevDark);
          }}
        >
          Change theme
        </button>
      </div>
      FistName : {Fname}
      <br/>
      <input
        ref={FNameRef}
        value={Fname}
        placeholder="First Name"
        onChange={(e) => seTfname(e.target.value)}
        onKeyDown={onFirstNameInputKey}
      />
      <br />
      LastName : {Lname}
      <br />
      <input
        ref={LNameRef}
        value={Lname}
        placeholder="Last Name"
        onChange={(e) => seTlname(e.target.value)}
        onKeyDown={onLastNameInputKey}
      />
      <br />
      Age: {Age}
      <br />
      <input
        ref={AgeRef}
        type="number"
        value={Age}
        placeholder="Age "
        onChange={(e) => seTage(e.target.value)}
      />
      <br />
      FullName: {FullName}
    </div>
  );
}
