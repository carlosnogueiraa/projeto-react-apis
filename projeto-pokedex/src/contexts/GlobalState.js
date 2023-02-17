import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/url"
import axios from "axios"

const GlobalState = (props) => {
    const [pokelist, setPokelist] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        fetchPokelist()
    }, [])

    const urlLimit = `${BASE_URL}?limit=151`

    const fetchPokelist = async () => {
        try {
            const response = await axios.get(urlLimit)
            setPokelist(response.data.results)
        } catch (error) {
            console.log("Erro ao buscar lista de pokemóns")
        }
    }

    const addToPokedex = (addPokemon) => {
        const isOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === addPokemon.name
        )

        if (!isOnPokedex) {
            const newPokedex = [...pokedex, addPokemon]
            setPokedex(newPokedex)
        }
    }

    const removeFromPokedex = (removePokemon) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== removePokemon.name
        )
        setPokedex(newPokedex)
    }

    const data = {
        pokelist,
        pokedex,
        addToPokedex,
        removeFromPokedex,
        erro: "Página não encontrada"
    }


    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState