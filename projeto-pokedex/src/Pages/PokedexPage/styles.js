import styled from "styled-components"


export const Container = styled.div`
    section{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 18px;
        margin-top: 32px;

        place-items: center;
    }
`

export const NoPokemons = styled.div`
    display: flex;
    width: 100vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 48px;


    h1{
        font-family: Poppins;
        color: white;
    }
`
