import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import PerformanceShards from "../assets/grass.svg"

const Window = styled.div`
    margin: 0px;
`;

const Brk = styled.p`
    margin: 10px;
    padding: 0px;
`;

const Breathe = styled.div`
    height: 400px;
`;

const Breath = styled.div`
    height: 40px;
`;

const Tab = styled.span`
    margin-left: 100px;
`;

const Memory = styled.pre`
    margin: 50px;
    font-family: Georgia, serif;
    font-size: 30px;
`;

const Lawn = styled.img`
    width: 90%;
    margin: 0px;
    padding: 0px;
`;

const Mower = styled.h1`
    color: #CE242B;
    display: inline;
    margin: 0px;
    padding-right: 60px;
    font-family: Georgia, serif;
    font-size: 70px;
    align-self: right;
    justify-self: right;
`;

const Engine = styled(Mower)`
    font-size: 30px;
    padding-right: 80px;
    margin-top: -200px;
`;

const History = styled.img`
    width: 100%;
`;

export const HongCun = ({ ...props }) => (
    <Window style = {props.style}>
        {/* <Mower>Lawnmowing: </Mower> */}
        {/* <Engine>performance shards</Engine> */}
        <History src={props.src}></History>
    </Window>
)

export default HongCun;