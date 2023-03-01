import { ForwardedRef, forwardRef } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

const ButtonElement = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement> | null) => (
    <Button ref={ref} {...props} />
  ),
)

export default ButtonElement
