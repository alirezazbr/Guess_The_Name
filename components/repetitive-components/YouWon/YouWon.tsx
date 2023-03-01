import { Box, Container } from '@mui/material'
import { TypographyElement } from '@/components'

const YouWon = () => (
  <Container fixed>
    <Box className="z-50 absolute bg-gray-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-300 flex items-center content-center rounded-[15px] p-2">
      <TypographyElement variant="h1">YOU WON!</TypographyElement>
    </Box>
  </Container>
)

export default YouWon
