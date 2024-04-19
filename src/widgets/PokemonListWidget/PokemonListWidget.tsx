import { Box, Button } from "@mui/material";
import { usePokemonListWidget } from "./hooks/usePokemonListWidget";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";

export const PokemonListWidget = () => {
  const { getPokemonData, newID, pokemonList } = usePokemonListWidget();

  return (
    <>
      <Button onClick={() => getPokemonData(newID)} variant="contained">
        Get new pokemon data
      </Button>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: 'row', flexWrap: 'wrap', gap: 3, marginTop: 4 }}>
        {pokemonList.map((pokemonItem) => (
          <PokemonCard key={pokemonItem.id} pokemonData={pokemonItem} />
        ))}
      </Box>
    </>
  );
};
