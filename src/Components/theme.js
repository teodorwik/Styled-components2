import {createGlobalStyle} from "styled-components";

export const lightTheme = {
//Inspiration
    darkblue:"#26547C",
    pink:"#C0BCC4",
    white:"#C1F7DC",
    yellow:"#ECC8AE",
    lightblue:"#94B0DA",

//Global
    body: "#C1F7DC",
    fontColor: "#000",
    buttonColor: "#94B0DA",
//Header
    NavColor: "#C0BCC4",

};

export const darkTheme = {
//Inspiration
    darkgrey:"#222831",
    grey: "#393E46",
    neonblue:"#00ADB5",
    white:"#EEEEEE",


//Global
    body: "#222831",
    fontColor: "#EEEEEE",
    buttonColor: "#00ADB5",

//Header
    NavColor: "#393E46",

};

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body};

    }

`

