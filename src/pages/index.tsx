import Header from '@/components/header'
import PokemonTable from '@/components/pokemon-table'
import Title from '@/components/title'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'

export default function Home() {
  return (
    <Box>
      <Header/>
      <Title></Title>
      <Container maxWidth="xl">
        <PokemonTable />
      </Container>
    </Box>
  )
}
