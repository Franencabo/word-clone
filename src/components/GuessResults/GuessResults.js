import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess";

function GuessResults({ newGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={newGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
