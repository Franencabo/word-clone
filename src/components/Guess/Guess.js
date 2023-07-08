import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess() {
  const rows = new Array(NUM_OF_GUESSES_ALLOWED).fill(null);
  const columns = new Array(5).fill(null);

  return rows.map((guess, index) => (
    <p key={index} className="guess">
      {columns.map((letters, jndex) => (
        <span key={`${index}-${jndex}`} className="cell">
          {letters}
        </span>
      ))}
    </p>
  ));
}

export default Guess;
