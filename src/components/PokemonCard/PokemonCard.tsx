import { Card, CardContent } from "@mui/material";
import { PokemonCardProps } from "./pokemonCard.types";

export const PokemonCard = ({ pokemonData }: PokemonCardProps) => {
  return (
    <Card key={pokemonData.id} sx={{
      width: '350px',
      height: 'min-content'
    }}>
      <CardContent>
        <h2>{`#${pokemonData.id} - ${pokemonData.name}`}</h2>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      </CardContent>
    </Card>
  );
};
