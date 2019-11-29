import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import help from '../assets/lawnmowing.svg';



const Window = styled.div`
    width: 25vw;
    height: 25vw;
    // margin: 1vw;
    background: url(${props => props.src});

    :hover {
        cursor: pointer;
        background: url(${props => props.hoverSrc});
    }
`;

function see() {
    
}

export const Frame = ({ ...props }) => (
    <Window 
        style={props.style}
        src={props.window}
        id={props.id}
        hoverSrc={props.hoverSrc}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseOut}
        onClick={props.onClick}>
    </Window>
)

export default Frame;