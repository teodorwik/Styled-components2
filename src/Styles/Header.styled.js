import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 10px 0;
`

export const NavHeader = styled.nav`
    background-color: ${(props) => props.theme.NavHeader};
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    
    
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
export const NavText = styled.a`
    float: left;
    color: ${(props) => props.theme.fontColor};
    text-align: center;
    padding: 15px 30px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        opacity: 0.9;
        transform: scale(1.1);
        color: ${(props) => props.theme.fontColorHover}
    }
    
`

export const NavContainer= styled.div`
    background-color: ${(props) => props.theme.NavHeader};
    display: flex;
    
    
`

