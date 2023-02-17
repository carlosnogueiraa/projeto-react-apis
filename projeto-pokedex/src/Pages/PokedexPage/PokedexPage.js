import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react"
import { Container, NoPokemons } from "./styles"
import { BASE_URL } from "../../constants/url"
import PokemonCard from "../../Components/PokemonCard"
import Header from "../../Components/Header"


const PokedexPage = () => {
    const context = useContext(GlobalContext)
    const { pokedex, removeFromPokedex } = context


    return (
        <Container>
            <Header />
            <section>
                {pokedex.length ?
                    pokedex.map((pokemon) => {
                        return (
                            <PokemonCard
                                key={pokemon.name}
                                pokemonUrl={`${BASE_URL}/${pokemon.name}`}
                                removeFromPokedex={removeFromPokedex}
                            />
                        )
                    })
                    :
                    <NoPokemons>
                        <h1>Nenhum pokémon adicionado a Pokédex</h1>
                    </NoPokemons>
                }
            </section>
        </Container>
    )
}

export default PokedexPage