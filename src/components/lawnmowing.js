import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import PerformanceShards from "../assets/grass.svg"

const Window = styled.div`
    margin: 0px 50px 0px 50px;
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

`;

export const LawnMowing = ({ ...props }) => (
    <Window style = {props.style}>
        {/* <Mower>Lawnmowing: </Mower>
        <Engine>performance shards</Engine>
        <Lawn src = {PerformanceShards}></Lawn> */}
        <Memory>
        Shards of fresh cut grass peppered your nose like the freckles you dreamed of, <Brk/>
All American girl, blue popsicle stained teeth<Brk/>
<Tab/>	the flag was in your mouth	<Tab/>	and you said <Brk/>
Remember me like this<Brk/>
<Tab/>	The heat pours from the concrete 	<Tab/>	into your hands on the ground,<Brk/>
Activation technique you said		<Tab/> and stole the soccer ball from the boys<Brk/>
<Tab/>	we hoped we could 	<Tab/>be.		<Tab/>				beat. <Brk/>
<Tab style={{marginLeft: "580px"}}/>   be. <Brk/>
Remember me like this	<Tab/>				army cargo pants and the <Brk/>
<Tab/>legs spread wide	  <Tab/>    copied stance		<Tab/>	that was our stand<Brk/>
Hold up your wet T-shirt, victory on the tennis courts<Brk/>
<Tab/>Dive into the pool fearless like all the boys	<Tab/>	Bam. <Brk/>
Remember me like this.<Brk/>
<Breath/>
Unbrushed ponytail, we crouched like leopards in the gravel trail woods behind your house<Brk/>
<Tab/>	World was ours 	<Tab/>	when a Travis beat became our anthem<Brk/>
Ride a song 	<Tab/>	to another world	<Tab/>	Find a place where I’m me, and<Brk/>
<Tab/>	And you’re you, 		<Tab/><Tab/><Tab/>		And<Brk/>
Remember us like that. <Brk/>
<Tab/>	Let us pout, all grim faced, effortless arrogance	<Tab/>	born with all we wanted<Brk/>
Take <Tab/>  that photo.	Arrogant. Me. You. 		<Tab/>Self-possessed and careless and brilliant and <Brk/>
seen.		<Tab/>Release the shutter and <Brk/>
Remember us like that.<Brk/>
<Breath/>
<Tab/>	Drive to a parking lot no one can see us		<Tab/>project the places of dreams<Brk/>
Onto the concrete pillars and chipping green paint	<Tab/>	Staircase to level two <Brk/>
<Tab/>	That was our way out.	<Tab/>		A red motorcycle.	<Brk/>
Remember us like that. 	<Tab/>				In the reality we founded around <Brk/>
<Tab/>		Empty cars, we lived for hours. <Tab/>			Hop on, this place was never ours. <Brk/>
<Tab/>	These homes never remembered our faces. 		<Tab/>	We were fleeting. <Brk/>
<Tab/>remember me like that. Gone. <Brk/>
Shaggy bangs and a sore jaw,	<Tab/>	Red detailing baked into my skin, running<Brk/>
<Tab/>	running 	<Tab/>	running from nowhere and nothing to nowhere and everything<Brk/>
Close your eyes, hear my voice	<Tab/>	Breathe with me.<Brk/>
<Breath/>
Remember me like that.<Brk/>
<Breath/>
<Tab/>	Open your eyes, 	<Tab/>	see how my hand quivered in that red straight line <Brk/>
Pulsing pulsing 	<Tab/>	Dancing dancing	<Tab/>	living living. me. <Brk/>
<Breath/>
Remember me like this.<Brk/>
<Breathe/>
Breathing.
<Breathe/>










































-Victoria Xu

        </Memory>
    </Window>
)

export default LawnMowing;