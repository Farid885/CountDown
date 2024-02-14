import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayer, setEnteredPlayer] = useState(null);

  const playerName = useRef();

  function handleClick() {
    setEnteredPlayer(playerName.current.value);
    playerName.current.value = "";
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
