import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.fontColor}; 
    border-radius: 50px 0 50px 0;
    border: solid 2px ${(props) => props.theme.buttonBorder};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`
export const WarningButton = styled.button`
    background-color: ${(props) => props.theme.buttonColorWarning};
    color: ${(props) => props.theme.fontColor}; 
    border-radius: 50px 0 50px 0;
    border: solid 2px ${(props) => props.theme.buttonBorder};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`
export const SuccessButton = styled.button`
    background-color: ${(props) => props.theme.buttonColorSuccess};
    color: ${(props) => props.theme.fontColor}; 
    border-radius: 50px 0 50px 0;
    border: solid 2px ${(props) => props.theme.buttonBorder};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`
export const LightDarkButton = styled.button`
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.fontColor}; 
    border-radius: 50px 0 50px 0;
    border: solid 2px ${(props) => props.theme.buttonBorder};
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 10px;
    
    &:hover {
        opacity: 0.9;
        transform: scale(1.1);
    }
`