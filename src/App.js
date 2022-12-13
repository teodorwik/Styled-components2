import React, {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./components/theme.js"
import {Button} from "./styles/Button.styled";

function App() {

  const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
  `;

  const [theme, setTheme] = useState("light");

  const themeToggler = () =>  {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
            <StyledApp>
                <h1>Styled-Components</h1>
                <Button onClick={() => themeToggler()}> Byt Tema</Button>
            </StyledApp>
    </ThemeProvider>
  );
}

export default App;
