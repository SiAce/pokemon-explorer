import pokemons from "@/data/clean_pokemon.json";

export type PokemonMoves = typeof pokemons[number]["moves"];
export type PokemonMove = PokemonMoves[number];
export type PokemonTypes = typeof pokemons[number]["type"];
export type PokemonType = PokemonTypes[number];
