import React from "react";
import styled from "styled-components";
import WindowNav from "../window";

import PerformanceShards from "../../assets/grass.svg";

import Silence from "../stillness/silence";
import Breathe from "../stillness/breathe";
import Breath from "../stillness/breath";
import Beat from "../stillness/beat";
import Memory from "../holding";

const Window = styled.div`
    margin: 0px 50px 0px 50px;
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

`;

export const LawnMowing = ({ ...props }) => (
    <Window style = {props.style}>
        <Mower>Lawnmowing: </Mower>
        <Engine>performance shards</Engine>
        <Lawn src = {PerformanceShards}></Lawn>
        <Memory>
        <WindowNav onClick={props.windowNav}></WindowNav>
        Shards of fresh cut grass peppered your nose like the freckles you dreamed of, <Silence/>
All American girl, blue popsicle stained teeth<Silence/>
<Beat/>	the flag was in your mouth	<Beat/>	and you said <Silence/>
Remember me like this<Silence/>
<Beat/>	The heat pours from the concrete 	<Beat/>	into your hands on the ground,<Silence/>
Activation technique you said		<Beat/> and stole the soccer ball from the boys<Silence/>
<Beat/>	we hoped we could 	<Beat/>be.		<Beat/>				beat. <Silence/>
<Beat style={{marginLeft: "580px"}}/>   be. <Silence/>
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
Remember us like that. <Silence/>
<Beat/>	Let us pout, all grim faced, effortless arrogance	<Beat/>	born with all we wanted<Silence/>
Take <Beat/>  that photo.	Arrogant. Me. You. 		<Beat/>Self-possessed and careless and brilliant and <Silence/>
seen.		<Beat/>Release the shutter and <Silence/>
Remember us like that.<Silence/>
<Breath/>
<Beat/>	Drive to a parking lot no one can see us		<Beat/>project the places of dreams<Silence/>
Onto the concrete pillars and chipping green paint	<Beat/>	Staircase to level two <Silence/>
<Beat/>	That was our way out.	<Beat/>		A red motorcycle.	<Silence/>
Remember us like that. 	<Beat/>				In the reality we founded around <Silence/>
<Beat/>		Empty cars, we lived for hours. <Beat/>			Hop on, this place was never ours. <Silence/>
<Beat/>	These homes never remembered our faces. 		<Beat/>	We were fleeting. <Silence/>
<Beat/>remember me like that. Gone. <Silence/>
Shaggy bangs and a sore jaw,	<Beat/>	Red detailing baked into my skin, running<Silence/>
<Beat/>	running 	<Beat/>	running from nowhere and nothing to nowhere and everything<Silence/>
Close your eyes, hear my voice	<Beat/>	Breathe with me.<Silence/>
<Breath/>
Remember me like that.<Silence/>
<Breath/>
<Beat/>	Open your eyes, 	<Beat/>	see how my hand quivered in that red straight line <Silence/>
Pulsing pulsing 	<Beat/>	Dancing dancing	<Beat/>	living living. me. <Silence/>
<Breath/>
Remember me like this.<Silence/>
<Breathe/>
Breathing.
<Breathe/>










































-Victoria Xu

        </Memory>
    </Window>
)

export default LawnMowing;