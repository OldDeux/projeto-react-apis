import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container } from "./headerStyle";
import logo from "../../assets/logoPokemon.svg"
function Header() {
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <img src={logo} />
            <button onClick={() => goToPokedexPage(navigate)}>
              Pokedex
            </button>

          </>
        );
      case "/pokedex":
        return (
          <>
            <a onClick={() => goToHomePage(navigate)}>
              {`🠔`}  Todos Pokémons
            </a>
            <img src={logo} />
          </>
        );
      default:
        return (
          <>
            <a onClick={() => goToHomePage(navigate)}>
              {`🠔`} Todos Pokémons
            </a>
            <img src={logo} />
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
