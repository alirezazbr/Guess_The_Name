import { useState, useEffect } from "react";
import randomWords from "random-words";

export default function Home() {
  const [word, setWord] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState('');
  const [numIncorrectGuesses, setNumIncorrectGuesses] = useState(0);
  const [isWon, setISWon] = useState<boolean>(false);

  useEffect(() => {
    setWord(randomWords(1));
  }, []);

  useEffect(() => {
    if (isWon) alert('you win');
  }, [isWon]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const actualWordLetters = Array.from(new Set<string>(word[0]));
    const guessWordLetters = Array.from(new Set<string>(guessedLetters));

    if (guessedLetters === word[0]) return setISWon(true);

    const commonElements = actualWordLetters.filter((element) => guessWordLetters.includes(element));

    console.log('commonElements', commonElements)
    //TODO: 
  }

  // const clickHandler = (e: any) => {
  //   e?.preventDefault();

  //   const letter = e.target.value.toLowerCase();
  //   if (word)
  // }

  // const handleGuess = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   const guessedLetter = event.target.elements.guess.value.toLowerCase();
  //   if (!guessedLetters.includes(guessedLetter)) {
  //     setGuessedLetters([...guessedLetters, guessedLetter]);
  //     if (!word.includes(guessedLetter)) {
  //       setNumIncorrectGuesses(numIncorrectGuesses + 1);
  //     }
  //   }
  //   event.target.reset();
  // };

  // const hiddenWord = word
  //   .split("")
  //   .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
  //   .join(" ");

  // const gameOver = numIncorrectGuesses >= 6 || !hiddenWord.includes("_");

  return (
    <div className="container">
      <h1>Guess the Word</h1>

      <form onSubmit={handleSubmit}>
        <label>guess a letter: </label>
        <input value={guessedLetters} onChange={({ target }) => setGuessedLetters(target.value)} />
        <button type="submit">submit</button>
      </form>

      {/* <p>{hiddenWord}</p>
      <p>Incorrect guesses: {numIncorrectGuesses}</p>
      {gameOver && (
        <p>{numIncorrectGuesses >= 6 ? "Game over!" : "You win!"}</p>
      )}
      {!gameOver && (
        <form onSubmit={handleGuess}>
          <label>
            Guess a letter:
            <input type="text" name="guess" maxLength="1" />
          </label>
          <button type="submit">Guess</button>
        </form>
      )} */}
    </div>
  );
}