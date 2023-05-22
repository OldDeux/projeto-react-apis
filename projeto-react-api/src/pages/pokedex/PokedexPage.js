import { BASE_URL } from "../../constants/url";
import { Container } from "./pokedexStyle";
import Card from "../../components/cards/Card";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function PokedexPage({setDetails}) {
  const context = useContext(GlobalContext)
  const { pokedex } = context;
  

  return (
    <Container>
      
        {pokedex.map((pokemonDex) => (
          <Card
            key={pokemonDex.name}
            pokemon={pokemonDex}
            name={pokemonDex.name}
            setDetails={setDetails}
          />
        ))}
      
    </Container>
  );
}

export default PokedexPage;
