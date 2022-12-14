import React, {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./Components/theme.js"
import {LightDarkButton} from "./Styles/Button.styled";
import {Header} from "./Components/Header";
import {View} from "./Components/View"

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
                <LightDarkButton onClick={() => themeToggler()}> BYT TEMA</LightDarkButton>
                <Header/>
                <View/>
            </StyledApp>
    </ThemeProvider>
  );
}

export default App;
