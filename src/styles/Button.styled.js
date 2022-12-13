import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.fontColor}; 
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,o.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`