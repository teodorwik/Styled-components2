import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    body: "#C1F7DC",
    fontColor: "#000",
    NavColor: "#C0BCC4",

    buttonColor: "#94B0DA"
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
    NavColor: "#26547C",
    buttonColor: "#26547C"
};

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body};

    }

`

