import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import WindowNav from "../window";


import Embodiment0 from "../../assets/embodimentsClose1.jpg";
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
    width: 33%;
    display: inline block;
`;

const Pattern = styled.div`
    display: flex;
    flex-direction: row;
`;

const MagnifyingGlass = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.veil ? colors.sunLight1 : colors.clearVeil};
    position: fixed;
    top: 0;
    right: 0;
`;

export class Embodiment extends React.Component {
    constructor (props) {
        super(props);
        // this.zoom5 = props.zoom5;
        this.state = {
            veil: true,
        };
        this.peel = this.peel.bind(this);
    }

    peel() {
        this.setState({veil: !this.state.veil});
    }

    render() {
        const MemStyle = {
            color: this.state.veil ? colors.ink1 : colors.clearVeil, 
            fontSize: "18px", 
            padding: "0px", 
            margin: "0px"
        }
        return (
            <Window style={this.props.style}>
                <MagnifyingGlass veil={this.state.veil}>
                    <WindowNav onClick={this.props.windowNav}></WindowNav>
                    <Memory style={MemStyle}>
                        <Breathe/> 
                        <Breathe/> 
                        <Beat/><Beat/><Beat/><Guider onClick={this.props.zoom1}>Me</Guider> in the movies/<Peeler onClick={this.peel}>my body</Peeler>/
                        <Breathe/> 
                        <Breathe/> 
                        <Silence/>
                        <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Guider onClick={this.props.zoom0}>Performance shards.</Guider>
                        <Breathe/> 
                        <Beat/><Beat/><Beat/><Beat/>In <Guider onClick={this.props.zoom4}>frames</Guider> and windows. 
                        <Breathe/>
                        <Breathe/>
                        <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Guider onClick={this.props.zoom6}>Little Falling Dances.</Guider> 
                    </Memory>
                </MagnifyingGlass>    
                <Pattern>
                    <History src={Embodiment0}></History>
                    <History src={Embodiment0}></History>
                    <History src={Embodiment0}></History>
                </Pattern>
            </Window>
        )
    }
}

export default Embodiment;