import { useState, useEffect } from 'react'
import randomWords from 'random-words'
import { GridColDef } from '@mui/x-data-grid'

import {
  ButtonElement,
  DataGridElement,
  TextFieldElement,
  TypographyElement,
  YouWon,
} from '@/components'
import { clickHandler } from '@/utils/guessLetterFunc'
import { IGuessedList } from '@/model/utils/home.model'

const columns: GridColDef[] = [
  { field: 'id', hide: true },
  { field: 'guess', headerName: 'Guess', flex: 1, minWidth: 150 },
  {
    field: 'matchingLetters',
    headerName: 'Matching Letters',
    flex: 1,
    minWidth: 150,
  },
]

export default function Home() {
  const [word, setWord] = useState<string[]>([])
  const [isWon, setIsWon] = useState<boolean>(false)
  console.log('🚀 ~ file: index.tsx:28 ~ Home ~ word:', word)
  const [guessedLetters, setGuessedLetters] = useState('')
  const [guessedList, setGuessedList] = useState<Array<IGuessedList>>([])

  useEffect(() => {
    setWord(randomWords(1))
  }, [])

  return (
    <div className="w-full p-8">
      {isWon && <YouWon />}

      <div className={`w-full ${isWon && 'opacity-50'}`}>
        <TypographyElement variant="h5">Guess The Word!</TypographyElement>
        <div
          className={`flex flex-row w-full ${isWon && 'pointer-events-none'}`}
        >
          <TextFieldElement
            className="w-1/2 flex mr-6"
            value={guessedLetters}
            onChange={({ target }: any) => setGuessedLetters(target.value)}
          />
          <ButtonElement
            variant="contained"
            className="w-[150px]"
            onClick={(e) => [
              !!(guessedLetters === word[0]) && setIsWon(true),

              clickHandler(
                e,
                guessedLetters,
                word,
                setGuessedLetters,
                setGuessedList,
              ),
            ]}
          >
            Submit
          </ButtonElement>
        </div>

        {guessedList.length ? (
          <>
            <TypographyElement variant="h5" className="my-5">
              Gussed Words!
            </TypographyElement>
            <DataGridElement columns={columns} rows={guessedList} />
          </>
        ) : null}
      </div>
    </div>
  )
}
