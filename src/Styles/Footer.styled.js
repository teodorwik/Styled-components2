import styled from "styled-components";

export const StyledFooter = styled.footer`
    
`
export const NavFooter = styled.nav`
    background-color: ${(props) => props.theme.NavFooter};
    display: flex;
    align-items: center;
    justify-content:center;
    border: solid 3px ${(props) => props.theme.GlobalBorder};
    border-radius: 10px;
`