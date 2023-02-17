import { GlobalContext } from "../../contexts/GlobalContext"
import { ContainerHome, PageTitle, ContainerMain } from "./styles"
import { useContext } from "react"
import PokemonCard from "../../Components/PokemonCard"
import Header from "../../Components/Header"


const PokemonsListPage = () => {
    const context = useContext(GlobalContext)
    const { pokelist, addToPokedex, pokedex } = context

    const filteredPokelist = () => pokelist.filter((pokemonInList) =>
        !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
    )


    return (
        <>
            <Header />
            <ContainerMain>
                <PageTitle>
                    <h1>Lista de Pokémons</h1>
                </PageTitle>
                <ContainerHome>
                    {filteredPokelist().map((pokemon) => {
                        return(
                            <PokemonCard
                                key={pokemon.url}
                                pokemonUrl={pokemon.url}
                                addToPokedex={addToPokedex}
                            />
                        )
                    }
                    )}
                </ContainerHome>
            </ContainerMain>
        </>
    )
}

export default PokemonsListPage