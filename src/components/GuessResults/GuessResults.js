function GuessResults({ newGuesses }) {
  return (
    <div className="guess-results">
      {newGuesses.map((newGuess, index) => (
        <p key={index} className="guess">
          {newGuess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
