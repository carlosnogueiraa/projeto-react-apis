import { goToHomePage, goToPokedexPage } from "../../routes/coordinator"
import { useLocation, useNavigate } from "react-router-dom"
import { HeaderContainer } from "./styles"
import logoPokemon from "../../assets/images/logoPokemon.png"

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const renderHeader = () => {
        switch (location.pathname) {
            case "/":
                return(
                    <>
                        <span></span>
                        <img src={logoPokemon} alt="Logo"></img>
                        <button onClick={() => goToPokedexPage(navigate)}>Ver Pokédex</button>
                    </>
                )
            case "/pokedex":
                return(
                    <>
                        <span></span>
                        <img src={logoPokemon} alt="Logo"></img>
                        <button onClick={() => goToHomePage(navigate)}>Ver lista de pokémons</button>
                    </>
                )
            default:
                return(
                    <>
                        <span></span>
                        <img src={logoPokemon} alt="Logo"></img>
                        <button onClick={() => goToHomePage(navigate)}>Voltar para Home</button>
                    </>
                )
        }
    }

    return(
        <HeaderContainer>{renderHeader()}</HeaderContainer>  
    )
}

export default Header