import * as React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import pokemons from "@/data/clean_pokemon.json"
import type_color from "@/data/type_color.json"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";


const rows: GridRowsProp = pokemons;
type PokemonMoves = typeof pokemons[number]["moves"];
type PokemonTypes = typeof pokemons[number]["type"]

const columns: GridColDef[] = [
  { field: "id", width: 100 },
  {
    field: "sprite",
    renderCell: sprite_renderer
  },
  { field: "name" },
  { field: "height" },
  { field: "weight" },
  {
    field: "type",
    width: 200,
    renderCell: pokemon_type_renderer
  },
  {
    field: "moves",
    width: 700,
    renderCell: pokemon_move_renderer
  },
];

export default function PokemonTable() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />
    </div>
  );
}

function pokemon_type_renderer(params: GridRenderCellParams<any, PokemonTypes>) {
  const types = params.value;

  const chips = types?.map((type) => {
    const type_name = type.name as (keyof typeof type_color)
    return <Chip
      label={type_name}
      sx={{
        bgcolor: type_color[type_name]
      }}
    />
  })

  return (
    <Stack direction="row" spacing={1}>
      {chips}
    </Stack>
  )
}

function pokemon_move_renderer(params: GridRenderCellParams<any, PokemonMoves>) {
  const moves = params.value;

  const cards = moves?.map((move) => {
    const move_name = move.name;
    const type_name = move.type as (keyof typeof type_color)

    return (
      <Card
        sx={{
          height: 45,
          p: 1
        }}>
        <CardContent
          sx={{

            m: 0,
            p: 0
          }}>
          <Typography
            sx={{
              height: 20,
              m: 0.5,
              p: 0
            }}
          >
            {move_name}
          </Typography>
          <Chip
            label={type_name}
            sx={{
              bgcolor: type_color[type_name],
              height: 20
            }}
          />
        </CardContent>
      </Card>
    );
  })

  return (
    <Stack direction="row" spacing={1}>
      {cards}
    </Stack>
  )
}

function sprite_renderer(params: GridRenderCellParams<any, string>) {
  const sprite_url = params.value;

  return (
    <img src={sprite_url} alt="sprite" />
  )
}

