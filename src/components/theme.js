import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    body: "#C1F7DC",
    fontColor: "#000",
    buttonColor: "#94B0DA"
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
    buttonColor: "#26547C"
};

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body};

    }

`

