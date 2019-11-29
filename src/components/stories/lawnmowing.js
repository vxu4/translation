import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import WindowNav from "../window";


import PerformanceShards from "../../assets/grass.svg";

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

const Lawn = styled.img`
    width: 100%;
    margin: 0px;
    padding: 0px;
`;

const Mower = styled.h1`
    color: #CE242B;
    display: block;
    margin: 0px;
    padding-left: 60px;
    font-family: Georgia, serif;
    font-size: 70px;
    text-align: center;
    align-self: right;
    justify-self: right;
`;

const Engine = styled(Mower)`
    font-size: 30px;
    padding-left: 80px;
`;

const MagnifyingGlass = styled.div`
    width: 100vw;
    // height: 100vh;
    background-color: ${props => props.veil ? colors.sunLight1 : colors.clearVeil};
    position: relative;
    top: 0;
    right: 0;
`;

export class LawnMowing extends React.Component {
    constructor (props) {
        super(props);
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
            margin: "0px 400px"
        }
        
        return (
            <Window style={this.props.style}>
                <MagnifyingGlass veil={this.state.veil}>
                    <Mower>Lawnmowing: </Mower>
                    <Engine>performance <Peeler onClick={this.peel}>shards</Peeler></Engine>
                    <Lawn src = {PerformanceShards}></Lawn>
                    <WindowNav onClick={this.props.windowNav}></WindowNav>
                    <Memory style={MemStyle}>
                        Shards of fresh cut grass peppered your nose like the freckles you dreamed of, <Silence/>
                        All American girl, blue popsicle stained teeth<Silence/>
                        <Beat/>	the flag was in your mouth	<Beat/>	and you said <Silence/>
                        Remember me like this<Silence/>
                        <Beat/>	The heat pours from the concrete 	<Beat/>	into your hands on the ground,<Silence/>
                        Activation technique you said		<Beat/> and stole the soccer ball from the boys<Silence/>
                        <Beat/>	we hoped we could 	<Beat/>be.		<Beat/>				beat. <Silence/>
                        <Beat style={{marginLeft: "580px"}}/>   <Guider onClick={this.props.zoom5}>be</Guider>. <Silence/>
                        Remember me like this	<Beat/>				army cargo pants and the <Silence/>
                        <Beat/>legs spread wide	  <Beat/>    copied stance		<Beat/>	that was our stand<Silence/>
                        Hold up your wet T-shirt, victory on the tennis courts<Silence/>
                        <Beat/>Dive into the pool fearless like all the boys	<Beat/>	Bam. <Silence/>
                        Remember me like this.<Silence/>
                        <Breath/>
                        Unbrushed ponytail, we crouched like leopards in the gravel trail woods behind your house<Silence/>
                        <Beat/>	World was ours 	<Beat/>	when a Travis beat became our anthem<Silence/>
                        Ride a song 	<Beat/>	to another world	<Beat/>	Find a place where I’m me, and<Silence/>
                        <Beat/>	And you’re you, 		<Beat/><Beat/><Beat/>		And<Silence/>
                        Remember us <Guider onClick={this.props.zoom2}>like that</Guider>. <Silence/>
                        <Beat/>	Let us pout, all grim faced, effortless arrogance	<Beat/>	born with all we wanted<Silence/>
                        Take <Beat/>  that photo.	Arrogant. Me. You. 		<Beat/>Self-possessed and careless and brilliant and <Silence/>
                        <Guider onClick={this.props.zoom7}>seen</Guider>.		<Beat/>Release the shutter and <Silence/>
                        Remember us like that.<Silence/>
                        <Breath/>
                        <Beat/>	Drive to a parking lot no one can see us		<Beat/>project the places of dreams<Silence/>
                        Onto the concrete pillars and chipping green paint	<Beat/>	Staircase to level two <Silence/>
                        <Beat/>	That was our way out.	<Beat/>		A red motorcycle.	<Silence/>
                        Remember us like that. 	<Beat/>				In the reality we founded around <Silence/>
                        <Beat/>		Empty cars, we lived for hours. <Beat/>			Hop on, this place was never ours. <Silence/>
                        <Beat/>	These homes never remembered our <Guider onClick={this.props.zoom4}>faces</Guider>. 		<Beat/>	We were fleeting. <Silence/>
                        <Beat/>remember me like that. Gone. <Silence/>
                        Shaggy bangs and a sore jaw,	<Beat/>	<Guider onClick={this.props.zoom6}>Red detailing</Guider> baked into my <Guider onClick={this.props.zoom1}>skin</Guider>, running<Silence/>
                        <Beat/>	running 	<Beat/>	running from nowhere and nothing to nowhere and everything<Silence/>
                        Close your eyes, hear my voice	<Beat/>	Breathe with me.<Silence/>
                        <Breath/>
                        Remember me like that.<Silence/>
                        <Breath/>
                        <Beat/>	Open your eyes, 	<Beat/>	see how my hand quivered in that red straight line <Silence/>
                        Pulsing <Guider onClick={this.props.zoom3}>pulsing</Guider> 	<Beat/>	Dancing <Guider onClick={this.props.zoom5}>dancing</Guider>	<Beat/>	living living. me. <Silence/>
                        <Breath/>
                        Remember me like this.<Silence/>
                        <Breathe/>
                        <Breathe/>

                        <Guider onClick={this.props.zoom7}>Breathing</Guider>.
                        <Breathe/>
                    </Memory>
                </MagnifyingGlass>
            </Window>
        )
    }
}

export default LawnMowing;






























