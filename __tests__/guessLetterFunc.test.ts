import { act } from '@testing-library/react'
import { clickHandler } from '../utils/guessLetterFunc'

describe('clickHandler', () => {
  it('it should call preventDefault on the event object', () => {
    const mockEvent = { preventDefault: jest.fn() }
    const guessedLetters = ''
    const word = ['example']
    const setGuessedLetters = jest.fn()
    const setGuessedList = jest.fn()
    clickHandler(
      mockEvent,
      guessedLetters,
      word,
      setGuessedLetters,
      setGuessedList,
    )
    expect(mockEvent.preventDefault).toHaveBeenCalled()
  })

  it('should add guessed word to list with matching letters count', () => {
    const setGuessedLetters = jest.fn()
    const setGuessedList = jest.fn()
    const word = ['apple']

    act(() => {
      clickHandler(
        { preventDefault: jest.fn() },
        'aelp',
        word,
        setGuessedLetters,
        setGuessedList,
      )
    })

    expect(setGuessedList).toHaveBeenCalledWith([
      {
        id: expect.any(Number),
        guess: 'aelp',
        matchingLetters: 4,
      },
    ])
  })

  it('should display an alert when guessed letters match the word', () => {
    const mockEvent = { preventDefault: jest.fn() }
    const setGuessedLetters = jest.fn()
    const setGuessedList = jest.fn()
    window.alert = jest.fn()

    clickHandler(
      mockEvent,
      'hello',
      ['hello'],
      setGuessedLetters,
      setGuessedList,
    )

    expect(setGuessedLetters).toHaveBeenCalledTimes(1)
    expect(setGuessedLetters).toHaveBeenCalledWith('')
    expect(setGuessedList).not.toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledTimes(1)
    expect(window.alert).toHaveBeenCalledWith('you win')
  })
})
