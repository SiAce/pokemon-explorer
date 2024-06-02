import pokemons from "./pokemon.json" assert { type: "json" };
import { writeFileSync } from "fs";

const data = pokemons.pokemon_v2_pokemon.map(
  (pokemon) => {
    const { pokemon_v2_pokemonmoves, pokemon_v2_pokemontypes, ...others } = pokemon;
    return {
      ...others,
      moves: pokemon_v2_pokemonmoves.map(
        (move) => {
          return {
            name: move.pokemon_v2_move.name,
            type: move.pokemon_v2_move.pokemon_v2_type.name
          }
        }
      ),
      type: pokemon_v2_pokemontypes.map(
        (type) => {
          return {
            name: type.pokemon_v2_type.name
          }
        }
      ),
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${others.id}.png`
    }
  }
)

writeFileSync("clean_pokemon.json", JSON.stringify(data));