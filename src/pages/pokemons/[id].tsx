import Header from '@/components/header'
import PokemonTable from '@/components/pokemon-table'
import Title from '@/components/title'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'

import pokemons from "@/data/clean_pokemon.json";
import PokemonCard from '@/components/PokemonCard'

type Params = {
    params: {
        id: string
    }
}

type Pokemon = typeof pokemons[number];
export type PokemonCardProps = { pokemon: Pokemon }

export default function PokemonDetailPage({ pokemon }: PokemonCardProps) {
    return (
        <Box>
            <Header />
            <Title></Title>
            <Container maxWidth="xl">
                <PokemonCard pokemon={pokemon}/>
            </Container>
        </Box>
    );
}

export async function getStaticPaths() {
    const paths = pokemons.map(
        (pokemon) => (
            {
                params: {
                    id: pokemon.id.toString()
                }
            }
        ));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: Params) {
    const id = params.id;
    const pokemon = pokemons.find(pokemon => pokemon.id.toString() === id);

    return {
        props: {
            pokemon,
        },
    };
}
