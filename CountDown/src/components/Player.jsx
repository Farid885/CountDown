import { useState } from "react";
export default function Player() {
  const [enteredPlayer, setEnteredPlayer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayer(event.target.value);
  }
  console.log(enteredPlayer);
  console.log(submitted);

  function handleClick() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayer : "unknown entity"}</h2>
      <p>
        <input onChange={handleChange} value={enteredPlayer} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
