import { useState } from "react";
import { PokemonData } from "../../../pokemon.types";
import axios, { AxiosResponse } from "axios";

export const usePokemonListWidget = () => {  
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
    const [newID, setNewID] = useState(1);
  
    const getPokemonData = (id: number) => {
      // 1º hacer la peti
      axios
        .get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(({ data }: AxiosResponse<PokemonData>) => {
          // 2º meterlo en la lista
          setPokemonList([...pokemonList, data]);
          setNewID(newID + 1);
          console.log(pokemonList);
        });
    };

    return { getPokemonData, newID, pokemonList }
}
