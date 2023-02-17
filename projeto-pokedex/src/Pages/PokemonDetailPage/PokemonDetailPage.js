import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { useParams } from "react-router-dom";
import { getFlagColors } from "../../utils/ReturnFlagColors"
import { getCardColors } from "../../utils/ReturnCardColor"
import { getTypes } from "../../utils/ReturnPokemonType";
import pngwing2 from "../../assets/images/pngwing2.svg"
import Header from "../../Components/Header";
import axios from "axios";
import * as s from "./styles"



function PokemonDetailPage() {
    const [pokemonDetails, setPokemonDetails] = useState(null)
    const { name } = useParams()

    useEffect(() => {
        fetchPokemon(name)
    }, [name])

    const fetchPokemon = async (pokemonName) => {
        try {
            const response = await axios.get(`${BASE_URL}/${pokemonName}`)
            setPokemonDetails(response.data)
        } catch (error) {
            console.log("Erro ao buscar lista de pokemóns")
        }
    }

    const statsAbbreviations = {
        "hp": "HP",
        "special-attack": "Sp. Atk",
        "special-defense": "Sp. Def",
    }

    const stats = pokemonDetails?.stats
    let statsTotal = 0

    if(stats) {
        for(let i = 0; i < stats.length; i++){
            statsTotal += stats[i].base_stat
        }
    }

    return (
        <>
            <Header />
            <s.ContainerMain>
                <s.PageTitle>
                    <h1>Detalhes</h1>
                </s.PageTitle>
                <s.ContainerDetails cardColor={getCardColors(pokemonDetails?.types[0].type.name)}>
                    <s.ContainerImage>
                        <s.ContainerImgFront>
                            <img src={pokemonDetails?.sprites.front_default} alt={name}></img>
                        </s.ContainerImgFront>
                        <s.ContainerImgBack>
                            <img src={pokemonDetails?.sprites.back_default} alt={name}></img>
                        </s.ContainerImgBack>
                    </s.ContainerImage>
                    <s.ContainerStats>
                        <h1>Base stats</h1>
                        <s.Stats>
                            <table>
                                <tbody>
                                {
                                    pokemonDetails?.stats &&
                                    pokemonDetails?.stats.map((stat, index) => {
                                        const statsName = statsAbbreviations[stat.stat.name.toLowerCase()] || stat.stat.name
                                        return (
                                            <tr key={index}>
                                                <td>{statsName}</td>
                                                <td><b>{stat.base_stat}</b></td>
                                                <td>
                                                    <s.Bar>
                                                        <s.Graph size={stat.base_stat} />
                                                    </s.Bar>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td>Total</td>
                                    <td><b>{statsTotal}</b></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </s.Stats>
                    </s.ContainerStats>
                    <s.ContainerInfos>
                        <s.ContainerNameId>
                            <s.PokemonId>#{pokemonDetails?.id}</s.PokemonId>
                            <s.PokemonName>{name}</s.PokemonName>
                            <s.Type>
                                {
                                    pokemonDetails?.types.map((type, index) => {
                                        const getTypeImg = getTypes(type.type.name)
                                        const flagColor = getFlagColors(type.type.name)
                                        return (
                                            <s.TypeFlag
                                                pokemonTypes={type.type.name}
                                                flagColor={flagColor}
                                                key={index}
                                            >
                                                <img src={getTypeImg} key={type} alt={type}></img>
                                                <p>{type.type.name}</p>
                                            </s.TypeFlag>
                                        )
                                    })
                                }
                            </s.Type>
                            <s.PokeballImg src={pngwing2}/>
                            <s.PokemonImg src={pokemonDetails?.sprites?.other["official-artwork"].front_default} alt={pokemonDetails?.name}></s.PokemonImg>
                        </s.ContainerNameId>
                        <s.ContainerMoves>
                            <h1>Moves:</h1>
                            {
                                pokemonDetails?.moves &&
                                pokemonDetails?.moves.splice(5) &&
                                pokemonDetails?.moves.map((move, index) => {
                                    return (
                                        <s.Move key={index}>
                                            <p>{move.move.name}</p>
                                        </s.Move>
                                    )
                                })
                            }
                        </s.ContainerMoves>
                    </s.ContainerInfos>
                </s.ContainerDetails>
            </s.ContainerMain>
        </>
    );
}

export default PokemonDetailPage;