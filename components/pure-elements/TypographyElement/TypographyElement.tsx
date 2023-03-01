import MuiTypography, { TypographyProps } from '@mui/material/Typography'

interface IProps {
  className?: string
  children: React.ReactNode
}

const TypographyElement = (props: IProps & TypographyProps) => {
  const { children, className, ...rest } = props

  return (
    <MuiTypography {...rest} className={className}>
      {children}
    </MuiTypography>
  )
}

export default TypographyElement
