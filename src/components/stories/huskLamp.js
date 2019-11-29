import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import WindowNav from "../window";

import HuskStill0 from "../../assets/huskLamp0.jpg";
import HuskStill1 from "../../assets/huskLamp1.jpg";
import HuskStill2 from "../../assets/huskLamp2.jpg";
import HuskStill3 from "../../assets/huskLamp3.jpg";
import HuskStill4 from "../../assets/huskLamp4.jpg";
import HuskStill5 from "../../assets/huskLamp5.jpg";


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

export class HuskLamp extends React.Component {
    constructor (props) {
        super(props);
        // this.zoom5 = props.zoom5;
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
                        <Silence/>
                        <Breathe/>This piece centers around the repetition of an action and the facilitation of that action through both
                        <Breath/>the work’s participants and its visual form. Inspired by the redwood pine cone, which only 
                        <Breath/>opens up and starts growing when there’s a fire, the piece centers around these pine cone’s 
                        <Breath/><Guider onClick={this.props.zoom2}>unique behavioral pattern</Guider>. Unlike many other plants and beings, they embrace and grow from an
                        <Breath/>element that usually burns. Taking this action of opening up to something fearful, I prompt 
                        <Breath/>four people with one question: what is a fire your scared of but feel you should open up to? 
                        <Breath/>Their answers play as audio in the video along with cuts of a lantern made from the <Guider onClick={this.props.zoom7}>protective</Guider>
                        <Breath/>skins of husk cherries. I had the participants <Peeler onClick={this.peel}>peel open</Peeler> these little cherries as they opened 
                        <Breath/>up and spoke on the fear(s) consciously on their minds, creating conversations with and around 
                        <Breath/>these plants. Thus, the act of opening up is repeated in the work’s form as well as facilitated 
                        <Breath/>action.
                    </Memory>
                </MagnifyingGlass>    
                <Pattern>
                    <History src={HuskStill0}></History>
                    <History src={HuskStill1}></History>
                    <History src={HuskStill2}></History>
                    <History src={HuskStill3}></History>
                    <History src={HuskStill4}></History>
                    <History src={HuskStill5}></History>
                </Pattern>
            </Window>
        )
    }
}

export default HuskLamp;