import styled from "styled-components";

export const StyledHome = styled.div`

`

export const Container = styled.nav`
    background-color: ${(props) => props.theme.Container};
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    justify-content: space-between;
    border: solid 3px ${(props) => props.theme.GlobalBorder};
    border-radius: 10px;
    
    @media(max-width: 768px){
        flex-direction: column
    }
`
export const Card = styled.div`
    background-color: ${(props) => props.theme.CardBackground};
    box-shadow: 2px 2px ${(props) => props.theme.CardShadow};
    align-items: center;
    justify-content: center;
    display: flex;
    margin:20px;
    height:400px;
    Width: 90%;
    border: solid 3px ${(props) => props.theme.CardBorder};
    border-radius: 20px;
    flex-direction: column
`
export const Img= styled.img`
    width: 250px;
    height:200px;
    margin-bottom: 30px;
    border: solid 3px ${(props) => props.theme.CardBorder};
    border-radius: 70px 0 70px 0;
`
