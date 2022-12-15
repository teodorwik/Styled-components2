import {StyledHeader, Nav, Logo, NavText, NavContainer} from "../Styles/Header.styled";

export function Header(){

    return(
        <StyledHeader>
            <Nav>
                <Logo src='./images/logo.logo.png' alt=''/>
                <h1>STYLED-COMPONENTS</h1>

            </Nav>
            <NavContainer>
                    <NavText href="#home">Home</NavText>
                    <NavText href="#news">News</NavText>
                    <NavText href="#contact">Contact</NavText>
                    <NavText href="#about">About</NavText>
            </NavContainer>

        </StyledHeader>
    )

}

