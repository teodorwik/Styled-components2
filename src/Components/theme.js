import {createGlobalStyle} from "styled-components";

export const lightTheme = {
//Inspiration
    darkteal:"#679B9B",
    lightteal:"#AACFCF",
    peach:"#FFB6B6",
    white:"#FDE2E2",

//Global
    body: "#FDE2E2",
    fontColor: "#000",
    fontColorHover: "#679B9B",

//Buttons
    buttonColor: "#679B9B",
    buttonColorSuccess: "#1d9d3b",
    buttonColorWarning: "#a91313",

//Header
    NavColor: "#FFB6B6",

//View
    Container: "#FFB6B6",
    CardBackground: "#FDE2E2",
    CardShadow: "#679B9B",

};

export const darkTheme = {
//Inspiration
    black:"#222831",
    grey: "#393E46",
    neonteal:"#00ADB5",
    white:"#EEEEEE",


//Global
    body: "#222831",
    fontColor: "#EEEEEE",
    fontColorHover: "#00ADB5",

//Buttons
    buttonColor: "#00ADB5",
    buttonColorSuccess: "#1d9d3b",
    buttonColorWarning: "#a91313",

//Header
    NavColor: "#393E46",

//View
    Container: "#393E46",
    CardBackground: "#222831",
    CardShadow: "#00ADB5",

};

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body};
    }

`

