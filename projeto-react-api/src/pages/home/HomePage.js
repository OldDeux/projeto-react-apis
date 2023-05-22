import { useContext } from "react";
import Card from "../../components/cards/Card";
import { Body, Container } from "./homeStyle";
import { GlobalContext } from "../../context/GlobalContext";

function HomePage({setDetails}) {

  const context = useContext(GlobalContext)
  const { filteredPokelist } = context
  
  return (
    <Container>
      
        {filteredPokelist()?.map((pokemonList) => (
          <Card
            key={pokemonList.url}
            pokemon={pokemonList}
            name={pokemonList.name}
            id={pokemonList.id}
            setDetails={setDetails}
          />
        ))}
      
    </Container>
  );
}

export default HomePage;
