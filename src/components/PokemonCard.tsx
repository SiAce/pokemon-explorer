import { Button, Card, CardActions, CardContent, CardMedia, List, Typography } from "@mui/material";
import { PokemonCardProps } from "../pages/pokemons/[id]";
import { move_to_card, type_to_chip } from "./pokemon-table";


export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <Card sx={{
            justifyContent: "center",
            width: 500,
            margin: "auto"
        }}>
            <CardMedia
                component="img"
                alt={pokemon.name}
                image={pokemon.sprite}
                sx={{
                    height: 200,
                    width: 200,
                    margin: "auto",
                }}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemon.name}
                </Typography>
            </CardContent>
            <CardActions>
                {pokemon.type.map(type_to_chip)}
            </CardActions>
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    Height: {pokemon.height}, Weight: {pokemon.weight}
                </Typography>
            </CardContent>
            <List>
                {pokemon.moves.map(move_to_card)}
            </List>
        </Card>

    );
}
