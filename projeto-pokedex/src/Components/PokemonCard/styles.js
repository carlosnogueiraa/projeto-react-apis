import styled from "styled-components"


export const ContainerCard = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 4px;

    width: 440px;
    height: 210px;
    left: 0px;
    top: 0px;
    
    background-color: ${({ cardColor }) => cardColor};
    color: #ffffff;

    border-radius: 12px;
    padding: 16px;
    margin: 20px;
`;

export const PokemonId = styled.p`
    font-weight: 700;
    font-size: 16px;
`

export const PokemonName = styled.h2`
    font-weight: 700;
    font-size: 32px;
    text-transform: capitalize;
`

export const PokemonImg = styled.img`
    position: absolute;
    width: 190px;
    height: 184px;
    left: 248px;
    top: -50px;
    z-index: 1;
`

export const PokeballImg = styled.img`
    position: absolute;
    width: 240px;
    height: 200px;
    top: 0px;
    left: 200px;
`

export const FooterCard = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50px;
    padding: 30px 10px;
    margin-top: 10px;
`

export const AddButton = styled.button`
    padding: 4px 10px;
    border: none;
    
    width: 146px;
    height: 38px;
    
    border-radius: 8px;
    background-color: #ffffff;
    color: #0f0f0f;

    font-weight: 400;
    font-size: 16px;
    z-index: 1;
`

export const RemoveButton = styled.button`
    padding: 4px 10px;
    border: none;
    
    width: 146px;
    height: 38px;
    
    border-radius: 8px;
    background-color: #ff6262;
    color: #ffffff;

    font-weight: 400;
    font-size: 16px;
    z-index: 1;
`

export const DetailsButton = styled.button`
    background: none;
    border: none;

    font-weight: 700;
    font-size: 16px;
    text-decoration: underline;

    color: #ffffff;
`

export const Type = styled.div`
    display: flex;
    gap: 10px;
`

export const TypeFlag = styled.div`
    display: flex;
    gap: 17px;
    justify-content: center;

    border: 1px dashed rgba(255, 255, 255, 47%);
    border-radius: 8px;
    padding: 5px 8px;

    width: 99px;
    height: 31px;

    background-color: ${({ flagColor }) => flagColor};

    p{
        font-weight: 400;
        font-size: 14px;
        text-transform: capitalize;
    }
`