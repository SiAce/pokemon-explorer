import { capitalize } from "@/utils/strings";
import { AspectRatio, Box, Card, Divider, List, Sheet, Stack, Typography, styled } from "@mui/joy";
import { PokemonCardProps } from "../pages/pokemons/[id]";
import { move_to_card, type_to_chip } from "../utils/data_to_display";

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <Card variant="outlined" sx={{
            justifyContent: "center",
            width: 400,
            margin: "auto",
            gap: 1.5
        }}>
            <Typography level="h2" fontSize="xl">
                {capitalize(pokemon.name)}
            </Typography>
            <Stack direction="row" spacing={5}>
                <Item>
                    <Typography level="body3">Height:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {pokemon.height}
                    </Typography>
                </Item>
                <Item>
                    <Typography level="body3">Weight:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {pokemon.weight}
                    </Typography>
                </Item>
            </Stack>
            <AspectRatio ratio="1/1" sx={{ my: 2 }}>
                <img
                    src={pokemon.sprite}
                    loading="lazy"
                    alt={pokemon.name}
                />
            </AspectRatio>
            <Box>
                <Typography level="h3" fontSize="lg" sx={{ mb: 0.5 }}>
                    Types:
                </Typography>
                <Stack direction="row" spacing={5}>
                    {pokemon.type.map(type_to_chip)}
                </Stack>
            </Box>
            <Divider inset="none"/>
            <Box>
                <Typography level="h3" fontSize="lg" sx={{ mb: 0.5 }}>
                    Moves:
                </Typography>
                <List>
                    {pokemon.moves.map(move_to_card)}
                </List>
            </Box>
        </Card>
    );
}
