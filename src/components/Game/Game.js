import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/";
import { useState } from "react";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [newGuesses, setNewGuesses] = useState([]);

  return (
    <>
      <GuessInput newGuesses={newGuesses} setNewGuesses={setNewGuesses} />
      <Guess />
      <GuessResults newGuesses={newGuesses} />
    </>
  );
}

export default Game;
