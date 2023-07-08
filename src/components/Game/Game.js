import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/";
import { useState } from "react";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [newGuesses, setNewGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...newGuesses, tentativeGuess];
    setNewGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults newGuesses={newGuesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={newGuesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
