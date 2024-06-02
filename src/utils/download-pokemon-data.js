/*
Get's many details about a pokemon passed as argument (starmie as default).

It gets:
  - happiness
  - if legendary/mythical
  - generation
  - habitat
  - height
  - weight
  - ID
  - abilities
  - stats
  - types
  - learnable moves by leveling up
  - in how many locations it can be found
  - holdable items in Fire Red
  - flavor text
*/

const fetch = require("node-fetch")
const fs = require('fs')

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

async function fetchGraphQL(query, variables, operationName) {
  const result = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    {
      method: "POST",
      body: JSON.stringify({
        query: query,
        variables: variables,
        operationName: operationName
      })
    }
  )

  return await result.json()
}



function fetchPokemon_details() {
  const query = `
  query samplePokeAPIquery {
    pokemon_v2_pokemon {
      id
      name
      height
      weight
      pokemon_v2_pokemonmoves(limit: 5) {
        pokemon_v2_move {
          name
          pokemon_v2_type {
            name
          }
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }  
  `

  return fetchGraphQL(
    query,
    null,
    "samplePokeAPIquery"
  )
}

async function main() {
  const { errors, data } = await fetchPokemon_details()
  if (errors) {
    console.error(errors)
  }
  storeData(data, "./pokemon.json")
}

main()