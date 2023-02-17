import {BrowserRouter, Routes, Route} from "react-router-dom"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonsListPage/>} />
                <Route path="/pokedex" element={<PokedexPage/>} />
                <Route path="/details/:name" element={<PokemonDetailPage/>} />
                <Route path="/*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router