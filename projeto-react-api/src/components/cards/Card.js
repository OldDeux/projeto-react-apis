import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { BtnDetails, Container, BtnCard, ImgCard, Div1, Div2, Type, Types, Info, BtnCardEx } from "./cardStyle";
import { GlobalContext } from "../../context/GlobalContext";

function Card({ pokemon, name, setDetails }) {
  const context = useContext(GlobalContext)
  const { addToPokedex, removeFromPokedex, backgroundColor, typeColor,imageByType } = context

  const location = useLocation();
  const navigate = useNavigate();

  //const [pokemon, setPokemon] = useState({});
  const [id, setId] = useState('')
  const [img, setImage] = useState('')
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');

  useEffect(() => {
    getPokemon();

  }, []);

  const getPokemon = async () => {
    try {
      const response = await axios.get(pokemon.url);
      setImage(response.data.sprites.other["official-artwork"].front_default)
      setId(response.data.id)
      setType1(response.data.types[0]?.type.name)
      setType2(response.data.types[1]?.type.name)
    } catch (error) {

      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  const detailPage = () => {
    setDetails(pokemon);
    goToDetailsPage(navigate)
  }

  return (
    <Container color={backgroundColor(type1)} >
      <Div1>
        <Info>
          <h2>#{id}</h2>
          <h1>{name}</h1>
          <Types>
            <Type color={typeColor(type1)}><img src={imageByType(type1)} /> {type1}</Type>
            {type2 && <Type color={typeColor(type2)}><img src={imageByType(type1)} /> {type2}</Type>}
          </Types>
        </Info>
        <ImgCard src={img} alt={pokemon.name} />
      </Div1>
      <Div2>

        <BtnDetails onClick={() => detailPage()}>
          Ver detalhes
        </BtnDetails>

        {location.pathname === "/" ? (
          <BtnCard onClick={() => addToPokedex(pokemon)}>
            Capturar!
          </BtnCard>
        ) : (
          <BtnCardEx onClick={() => removeFromPokedex(pokemon)}>
            Excluir!
          </BtnCardEx>
        )}


      </Div2>
    </Container>
  );
}

export default Card;
