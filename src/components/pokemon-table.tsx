import pokemons from "@/data/clean_pokemon.json";
import { capitalize } from "@/utils/strings";
import { Link } from "@mui/joy";
import Stack from '@mui/material/Stack';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from "@mui/x-data-grid";
import Image from "next/image";
import { move_to_card, type_to_chip } from "../utils/data_to_display";
import { PokemonMoves, PokemonTypes } from "../utils/model";


const rows: GridRowsProp = pokemons;
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "sprite",
    headerName: "Image",
    renderCell: sprite_renderer
  },
  {
    field: "name",
    headerName: "Name",
    renderCell: (params) =>
      <Link href={`/pokemons/${params.row.id}`}>{capitalize(params.value)}</Link>,
  },
  {
    field: "height",
    headerName: "Height",
  },
  {
    field: "weight",
    headerName: "Weight",
  },
  {
    field: "type",
    headerName: "Types",
    width: 200,
    renderCell: pokemon_type_renderer
  },
  {
    field: "moves",
    headerName: "Moves",
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
        sx={{
          boxShadow: 2,
          border: 2,
          backgroundColor: '#f9ffe6',
          borderColor: 'gray',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
}

function pokemon_type_renderer(params: GridRenderCellParams<any, PokemonTypes>) {
  const types = params.value;

  const chips = types?.map(type_to_chip)

  return (
    <Stack direction="row" spacing={1}>
      {chips}
    </Stack>
  )
}

function pokemon_move_renderer(params: GridRenderCellParams<any, PokemonMoves>) {
  const moves = params.value;

  const cards = moves?.map(move_to_card)

  return (
    <Stack direction="row" spacing={1}>
      {cards}
    </Stack>
  )
}

function sprite_renderer(params: GridRenderCellParams<any, string>) {
  const sprite_url = params.value;

  return (
    <Image src={sprite_url!} alt="sprite" width={70} height={70} />
  )
}

