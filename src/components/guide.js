import React from "react";
import styled from "styled-components";
import colors from "./styles/colors";

const Guider = styled.button`
    background: none;
    font-size: 15px;
    border: 1px solid ${colors.red1}; 
    font-family: Georgia, sans-serif;
    color: ${colors.red1}; 

    :hover {
        cursor: pointer;
        background-color: ${colors.red1}; 
        color: ${colors.white1}; 
    }
`;

export const Guide = ({ ...props }) => (
    <Guider 
        style={props.style}
        onClick={props.onClick}>
        {props.children}
    </Guider>
)

export default Guide;