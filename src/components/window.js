import React from "react";
import styled from "styled-components";
import colors from "./styles/colors";

const Nav = styled.button`
    background: none;
    font-size: 15px;
    border: 1px solid ${colors.red1}; 
    font-family: Georgia, sans-serif;
    color: ${colors.red1}; 
    position: fixed;
    right: 0;
    top: 0;

    :hover {
        cursor: pointer;
        background-color: ${colors.red1}; 
        color: ${colors.white1}; 
    }
`;

export const Window = ({ ...props }) => (
    <Nav 
        style={props.style}
        onClick={props.onClick}>
        []
    </Nav>
)

export default Window;