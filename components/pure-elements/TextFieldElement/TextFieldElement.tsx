import { ForwardedRef, forwardRef, RefObject } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'

const TextFieldElement = forwardRef(
  (
    props: TextFieldProps,
    ref:
      | ((instance: HTMLDivElement | null) => void)
      | RefObject<HTMLDivElement>
      | null
      | undefined,
  ) => <TextField ref={ref} {...props} />,
)

export default TextFieldElement
