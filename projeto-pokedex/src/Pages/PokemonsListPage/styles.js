import styled from "styled-components"


export const ContainerMain = styled.div`
    padding: 20px;
`

export const ContainerHome = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
    margin-top: 16px;
    justify-items: center;
`

export const PageTitle = styled.div`
    display: flex;
    margin-top: 16px;
    height: 100px;
    padding: 20px;
    color: white;
    font-family: Poppins;
    font-size: 22px;
`