import { useState } from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    // let the input empty when submit the word
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toLocaleUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
