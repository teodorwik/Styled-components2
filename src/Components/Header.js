import {StyledHeader, Nav, Logo} from "../Styles/Header.styled";

export function Header(){

    return(
        <StyledHeader>
            <Nav>
                <Logo src='./images/logo.logo.png' alt=''/>
                <h1>STYLED-COMPONENTS</h1>
            </Nav>
        </StyledHeader>
    )

}

