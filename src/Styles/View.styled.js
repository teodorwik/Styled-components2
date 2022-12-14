import styled from "styled-components";

export const StyledView = styled.div`

`

export const Container = styled.nav`
    background-color: ${(props) => props.theme.Container};
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    justify-content: space-between;
    
    @media(max-width: 768px){
        flex-direction: column
    }
`
export const Card = styled.div`
    background-color: ${(props) => props.theme.CardBackground};
    align-items: center;
    justify-content: center;
    display: flex;
    margin:20px;
    height:400px;
    Width: 90%;
`

