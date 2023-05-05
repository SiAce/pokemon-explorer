import type_color from "@/data/type_color.json";
import { PokemonMove, PokemonType } from "@/utils/model";
import { capitalize } from "@/utils/strings";
import { Card, CardContent, CardOverflow, Typography } from "@mui/joy";
import Chip from '@mui/joy/Chip';


export function type_to_chip(type: PokemonType, index: number) {
  const type_name = type.name as (keyof typeof type_color);
  return (
    <Chip
      key={index}
      sx={{
        bgcolor: type_color[type_name]
      }}>
      {capitalize(type_name)}
    </Chip>
  );
}

export function move_to_card(move: PokemonMove, index: number) {
  const move_name = move.name;
  const type_name = move.type as (keyof typeof type_color);

  return (
    <Card
      key={index}
      variant="outlined"
      sx={{ height: 15, bgcolor: 'background.body' }}
    >
      <CardOverflow
        variant="soft"
        sx={{
          textAlign: 'center',
          fontSize: 'xs',
          color: 'white',
          bgcolor: type_color[type_name],
          textTransform: 'uppercase',
        }}
      >
        {type_name}
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md">
          {capitalize(move_name)}
        </Typography>
      </CardContent>
    </Card>
  );
}
