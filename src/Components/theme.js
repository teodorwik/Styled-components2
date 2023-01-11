import {createGlobalStyle} from "styled-components";

export const lightTheme = {
//Inspiration


//Global
    body: "#F4F8F3",
    fontColor: "#000",
    fontColorHover: "#CDAC79",
    GlobalBorder: "#CDAC79",

//Buttons
    buttonColor: "#eedcd7",
    buttonColorSuccess: "#53b768",
    buttonColorWarning: "#b23e3e",
    buttonBorder: "#CDAC79",

//Header
    NavHeader: "#eedcd7",

//Home
    Container: "#eedcd7",
    CardBackground: "#F4F8F3",
    CardShadow: "#836559",
    CardBorder: "#CDAC79",

//Footer
    NavFooter: "#eedcd7",

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
    GlobalBorder: "#00ADB5",

//Buttons
    buttonColor: "#00ADB5",
    buttonColorSuccess: "#1d9d3b",
    buttonColorWarning: "#a91313",
    buttonBorder: "#00ADB5",

//Header
    NavHeader: "#393E46",

//Home
    Container: "#393E46",
    CardBackground: "#222831",
    CardShadow: "#222831",
    CardBorder: "#00ADB5",

//Footer
    NavFooter: "#393E46",

};

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body};
    }

`

