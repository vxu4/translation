import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import WindowNav from "../window";


import Map0 from "../../assets/map1.png";

import Silence from "../stillness/silence";
import Breathe from "../stillness/breathe";
import Breath from "../stillness/breath";
import Beat from "../stillness/beat";
import Memory from "../holding";
import Peeler from "../peel";
import Guider from "../guide";

const Window = styled.div`
    // margin: 0px 50px 0px 50px;
    display: flex;
    flex-direction: row;
`;

const History = styled.img`
    width: 100%;
`;

const Pattern = styled.div`
    display: flex;
    flex-direction: column;
`;

const MagnifyingGlass = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.veil ? colors.sunLight1 : colors.clearVeil};
    position: fixed;
    top: 0;
    right: 0;
`;

export class DataMap extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            veil: true,
        };
        this.peel = this.peel.bind(this);
    }

    peel() {
        this.setState({veil: false});
    }

    render() {
        const MemStyle = {
            color: this.state.veil ? colors.ink1 : colors.clearVeil, 
            fontSize: "18px", 
            padding: "0px", 
            margin: "0px 400px"
        }
        return (
            <Window style={this.props.style}>
                <MagnifyingGlass veil={this.state.veil}>
                    <WindowNav onClick={this.props.windowNav}></WindowNav>
                    <Memory style={MemStyle}>
                    <Breathe/>
                    <Breathe/>With this project I was interested in the way many companies are mapping and analyzing the 
                    <Silence/>individual with data. While on apps or carrying around our phones we are constantly 
                    <Silence/>generating data but aren’t intentional or aware of how that data is being perceived 
                    <Silence/>or created. I wanted to create a piece inserting one’s own consciously constructed 
                    <Silence/>data and reality into the databases <Guider onClick={this.props.zoom4}>“capturing”</Guider> so many of us on the daily. So here,
                    <Silence/> I thought of data as a medium for content creation, with the <Guider onClick={this.props.zoom1}>data as paint</Guider>, the map 
                    <Silence/>as canvas, and the google maps servers as <Peeler onClick={this.peel}>exhibition space</Peeler>. I drew two paths through 
                    <Silence/>Prospect park with google’s map-making tool and called the resultant map “How to 
                    <Silence/><Guider onClick={this.props.zoom3}>touch noses</Guider> in Prospect Park” (there are two faces touching noses!). In doing so, I 
                    <Silence/>had to <Guider onClick={this.props.zoom5}>intentionally dance</Guider> with their efficiency algorithms which made it hard to draw 
                    <Silence/>paths as inefficient as the ones I drew. Although I didn’t walk this route, the idea 
                    <Silence/>would be if you did walk the route, this image would be the intentional data content 
                    <Silence/>you <Guider onClick={this.props.zoom6}>choose to generate</Guider> and display to and in google maps.
                    </Memory>
                </MagnifyingGlass>
                <History src={Map0}></History>
            </Window>
        )
    }
}


export default DataMap;