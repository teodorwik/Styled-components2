import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 40px 0;
    
`

export const Nav = styled.nav`
    background-color: ${(props) => props.theme.NavColor};
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    
    @media(max-width: 768px){
        flex-direction: column
    }
`
export const Logo = styled.img`
    
    @media(max-width: 768px){
        margin-bottom: 15px;
    }
    max-width: 15%;
`
