import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import { getTypes } from "../../utils/ReturnPokemonType"
import { getFlagColors } from "../../utils/ReturnFlagColors"
import { getCardColors } from "../../utils/ReturnCardColor"
import pngwing2 from "../../assets/images/pngwing2.svg"
import * as s from "./styles"
import axios from "axios"



const PokemonCard = (props) => {
    const { pokemonUrl, addToPokedex, removeFromPokedex } = props
    const [pokemon, setPokemon] = useState({})
    const [pokemonTypeName, setPokemonTypeName] = useState([])
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(pokemonUrl)
            setPokemon(response.data)
            setPokemonTypeName(response.data.types[0].type.name)
        } catch (error) {
            console.log("Erro ao buscar lista de pokemóns")
        }
    }


    return (
        <s.ContainerCard cardColor={getCardColors(pokemonTypeName)}>
            <s.PokemonId>#{pokemon.id}</s.PokemonId>
            <s.PokemonName>{pokemon.name}</s.PokemonName>
            <s.Type>
                {pokemon.types && pokemon.types.map((type, index) => {
                    const getTypeImg = getTypes(type.type.name)
                    const flagColor = getFlagColors(type.type.name)
                    return (
                        <s.TypeFlag pokemonTypes={type.type.name} flagColor={flagColor} key={index}>
                            <img src={getTypeImg} key={type} alt=""></img>
                            <p>{type.type.name}</p>
                        </s.TypeFlag>
                    )
                })}
            </s.Type>
            <s.PokeballImg src={pngwing2}/>
            <s.PokemonImg src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
            <s.FooterCard>
                {location.pathname === "/" ? (
                    <s.AddButton onClick={() => addToPokedex(pokemon)}>Capturar!</s.AddButton>
                ) : (
                    <s.RemoveButton onClick={() => removeFromPokedex(pokemon)}>Excluir</s.RemoveButton>
                )
                }
                <s.DetailsButton onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</s.DetailsButton>
            </s.FooterCard>
        </s.ContainerCard>
    )
}

export default PokemonCard