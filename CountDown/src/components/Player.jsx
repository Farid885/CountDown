import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayer, setEnteredPlayer] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  const playerName = useRef();
  console.log(playerName);

  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayer(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayer(playerName.current.value);
    if (!playerName.current.value ) {
      return "";
    }
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ? enteredPlayer : "unknown entity"}</h2>
      {/* <h2>Welcome {enteredPlayer ??   "unknown entity"}</h2> */}
      {/* line 21 and 22 is same syntax  */}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
