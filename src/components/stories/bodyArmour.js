import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import WindowNav from "../window";

import BodyArmourSrc from "../../assets/quiltWIP.svg";
import Quilt8 from "../../assets/quilt8.svg";

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
    width: 100vw;
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

export class BodyArmour extends React.Component {
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
            margin: "0px 100px"
        }
        return (
            <Window style={this.props.style}>
                <MagnifyingGlass veil={this.state.veil}>
                    <WindowNav onClick={this.props.windowNav}></WindowNav>
                    <Memory style={MemStyle}>
                    <Breathe/>
                    Here–a blueprint for a body armour.<Silence/>
                    <Beat/>        dancing suit, <Silence/>
                    <Beat/><Beat/>                <Guider onClick={this.props.zoom1}>living quilt</Guider>. <Silence/>
                    <Silence/>
                    Stories in <Guider onClick={this.props.zoom4}>lost pixels</Guider>, <Silence/>
                    <Beat/>    <Guider onClick={this.props.zoom6}>frames of joy</Guider>,<Silence/>
                    <Beat/><Beat/>        windows of dancing,<Silence/>
                    <Beat/><Beat/><Beat/>                falling,<Silence/>
                    <Silence/>
                    <Beat/>Reaching <Silence/>
                    <Beat/><Beat/>   and Growing. <Silence/>
                    <Breathe/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/>A <Guider onClick={this.props.zoom0}>lacework</Guider> and visual wordbook I want people <Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/>To embody (multiple), to be able to wrap themselves in–<Silence/>
                    <Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/>For protection, dancing–<Guider onClick={this.props.zoom3}>warmth</Guider>. <Silence/>
                    <Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/>In thinking of ways objects, artifacts, can create <Guider onClick={this.props.zoom5}>spaces</Guider><Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/>and inform perceptions, I wanted to make a piece that <Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/>you could wrap yourself in. That could live with <Guider onClick={this.props.zoom2}>bodies</Guider>,<Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/>not just minds. <Silence/>
                    <Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/>Stories to warm you, <Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Guider onClick={this.props.zoom4}>suns and lotuses</Guider> to move with you.<Silence/>
                    <Silence/>
                    <Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Beat/><Peeler onClick={this.peel}>Inhabit</Peeler>. <Silence/>
                    </Memory>

                </MagnifyingGlass>
                <History src={BodyArmourSrc}></History>
                <div style={{height: "350px"}}></div>

                <img src={Quilt8}></img>

            </Window>
        )
    }
}


export default BodyArmour;