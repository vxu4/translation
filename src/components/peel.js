import React from "react";
import styled from "styled-components";
import colors from "./styles/colors";

const Peeler = styled.button`
    background: none;
    font-size: 15px;
    font-family: Georgia, sans-serif;
    color: ${colors.red1}; 

    :hover {
        cursor: pointer;
        border: 1px solid ${colors.red1}; 
    }
`;

export const Peel = ({ ...props }) => (
    <Peeler 
        style={props.style}
        onClick={props.onClick}>
        {props.children}
    </Peeler>
)

export default Peel;