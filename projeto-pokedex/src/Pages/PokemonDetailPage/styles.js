import styled from "styled-components"


export const ContainerMain = styled.div`
    padding: 0px 20px;
    `

export const PageTitle = styled.div`
    display: flex;
    align-items: center;

    padding: 20px;
    height: 90px;

    font-family: Poppins;
    font-size: 22px;

    color: white;
    `

export const ContainerDetails = styled.div`
    display: flex;
    justify-content: space-around;

    padding: 20px;
    height: 663px;
    border-radius: 20px;

    background-color: ${({cardColor}) => cardColor};
`

export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
    padding: 20px;
`

export const ContainerImgFront = styled.div`
    display: flex;
    justify-content: center;

    width: 282px;
    height: 282px;
    border-radius: 8px;
    
    background-color: #ffffff;
`

export const ContainerImgBack = styled.div`
    display: flex;
    justify-content: center;

    width: 282px;
    height: 282px;
    border-radius: 8px;

    background-color: #ffffff;
`

export const ContainerStats = styled.div`
    padding: 20px;
    border-radius: 8px;

    background-color: #ffffff;
`

export const Stats = styled.div`
    display: flex;
    justify-content: space-evenly;

    width: 480px;
    
    table{
        text-transform: capitalize;
        gap: 10px;
    }

    td{
        padding: 0px 10px;
        border-bottom: 1px solid lightgray;
    }
`

export const Bar = styled.div`
    width: 280px;
    padding: 10px;
`

export const Graph = styled.div`
    width: ${({size}) => size}px;
    background-color: #FF7C2E;
    height: 10px;

    border-radius: 30px;

    background-color: ${({size}) => 
        (size < 40 && "#e55b6b") ||
        ((size >= 40) && (size <= 55) && "#f99c1b") ||
        ((size >= 56) && (size <= 69) && "#f4d41f") ||
        ((size >= 70) && (size <= 89) && "#98b646") ||
        ((size >= 90) && (size <= 200) && "#36b669")
    };
`

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

export const ContainerNameId = styled.div`
    padding: 20px;
`

export const PokemonId = styled.p`
    font-weight: 700;
    font-size: 16px;

    color: #ffffff;
`

export const PokemonName = styled.h2`
    line-height: 58px;
    font-weight: 700;
    font-size: 54px;
    text-transform: capitalize;

    color: #ffffff;
`

export const Type = styled.div`
    display: flex;

    gap: 10px;
    margin-top: 20px;

    color: #ffffff;
`

export const TypeFlag = styled.div`
    display: flex;
    justify-content: center;
    
    border: 1px dashed rgba(255, 255, 255, 47%);
    border-radius: 8px;
    padding: 5px 8px;
    gap: 17px;
    width: 99px;
    height: 31px;

    background-color: ${({flagColor}) => flagColor};

    p{
        font-weight: 400;
        font-size: 14px;
        text-transform: capitalize;
    }
`

export const ContainerMoves = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 20px;
    gap: 10px;
    width: 348px;
    height: 453px;
    border-radius: 8px;

    background-color: #ffffff;
`

export const Move = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;

    height: 42px;
    border: 1px dashed rgba(0, 0, 0, 14%);
    border-radius: 12px;
    padding: 10px;

    background-color: #ECECEC;
`

export const PokemonImg = styled.img`
    position: absolute;
    width: 350px;
    height: 350px;
    left: 1478px;
    top: 128px;
`

export const PokeballImg = styled.img`
    position: absolute;
    width: 800px;
    height: 700px;
    top: 230px;
    left: 1090px;
`