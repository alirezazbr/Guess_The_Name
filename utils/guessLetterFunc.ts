export const clickHandler = (
  e: any,
  guessedLetters: string,
  word: Array<string>,
  setGuessedLetters: any,
  setGuessedList: any,
) => {
  e.preventDefault()

  const actualWordLetters = Array.from(new Set<string>(word[0]))
  const guessWordLetters = Array.from(new Set<string>(guessedLetters))

  if (guessedLetters === word[0]) {
    return setGuessedLetters('')
  }

  const commonElements = actualWordLetters.filter((element) =>
    guessWordLetters.includes(element),
  )

  if (guessedLetters.length)
    setGuessedList((prev: any) => [
      {
        id: Math.random(),
        guess: guessedLetters,
        matchingLetters: commonElements.length,
      },
      ...prev,
    ])
  setGuessedLetters('')
}
