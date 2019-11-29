import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import BurlapStory from "../../assets/burlapFamily.png";
import WindowNav from "../window";

import Silence from "../stillness/silence";
import Breath from "../stillness/breath";
import Beat from "../stillness/beat";
import Memory from "../holding";
import Peeler from "../peel";
import Guider from "../guide";

const Window = styled.div`
    margin: 0px;
`;

const MagnifyingGlass = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.veil ? colors.sunLight1 : colors.clearVeil};
    position: fixed;
    top: 0;
    right: 0;
`;

const History = styled.img`
    width: 100%;
`;

export class BurlapHistory extends React.Component {
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
        <Window style = {this.props.style}>
            <History src={BurlapStory}></History>
            <MagnifyingGlass veil={this.state.veil}>
                <WindowNav onClick={this.props.windowNav}></WindowNav>
                <Memory style={MemStyle}>
                    <Peeler onClick={this.peel}>Partial portraits</Peeler> for partial histories/infinite worlds <Silence/>
                    This week, I think of partialities.
                    <Silence/>
                    In this piece I think about my ancestors, grand-relatives, I think of how much to me is unknowable– 
                    <Beat/>how I only see a part of them, <Silence/> <Beat/>and how all portraiture is <Peeler onClick={this.peel}>a partial one. </Peeler>
                    <Silence/>
                    How painting a portrait is trying to grab <Guider onClick={this.props.zoom0}>a single plane from a sun/sphere</Guider>
                    <Silence/> <Peeler onClick={this.peel}>Each plane 1/infinite points. </Peeler>
                    <Beat/><Peeler onClick={this.peel}>infinite stories,</Peeler>
                    <Beat/><Peeler onClick={this.peel}>infinite livings.</Peeler>
                    <Breath/>
                    <Peeler onClick={this.peel}>Portraits of a sun</Peeler>, and each portrait just <Peeler onClick={this.peel}>a plane</Peeler> <Beat/> <Peeler onClick={this.peel}>point.</Peeler>
                    <Beat/>
                    I’ve been painting on burlap because it’s a material that knows it’s partialities, 
                    <Silence/> shows it’s missing stories/pixels. In thinking of the way individuals exist within <Peeler onClick={this.peel}>contexts</Peeler>, within memories, and other's minds, there's infinite versions/visions of a single person. 
                    <Silence/> A painting/portrait can only ever be one of them. To acknowledge this is why I paint on burlap. 
                    <Silence/> To embrace and paint <Guider onClick={this.props.zoom5}>the missing's</Guider>, the may be's, <Peeler onClick={this.peel}>the unknowable infinites</Peeler>, is why I want to paint on burlap. 
                    <Silence/> A way to paint the partial. 
                    <Silence/> 
                    <Silence/> With this piece, I paint my grandma and grand-aunt, I paint my ancestors' stories, my families' stories, which have always been very partial to me. 
                    <Silence/> Growing up in America while all of my extended family (except one cousin in NY) were across the globe, there's an impossibility of full knowing
                    <Silence/>  and understanding created by literal, physical distance. But even more than that, there's a reluctance to tell some stories–a reluctance to remember, 
                    <Silence/> <Guider onClick={this.props.zoom2}>relive, and retell.</Guider> I can understand that.
                    <Silence/> There's an erasure that happens in the passage of time and avoided memories, and heightened by generational and cultural jumps. 
                    <Silence/> And I know there are things to do to learn and remember, but how much cannot be held onto? 
                    <Silence/> Across my 20 years, I've been told stories, however partial and sparing, of my grandpa's life, my grandma's old habits, teachings, loves. 
                    <Silence/> I think of my ancestors, the places and family I come from, and I'm aware of the holes, aware of the many ways I'm missing information. 
                    <Silence/> I'm aware of the parts I must fill in from hazy childhood memories of the apartment my mom grew up in, 
                    <Silence/> <Beat/>of hazy pictures of the pond my dad grew up next to. I'm aware of the places I must try and see in the China I visit now, how it's so different now. 
                    <Silence/> Poet Michael Lee, has said "No history, no self. Know history, know self". But when there is only so much one can know, I know I must imagine the missing, 
                    <Silence/> imagine parts of my histories from blurry images and burlap/holed information. So here, I guess, is an ode to the partial histories, displaced stories.
                    <Silence/> Burlap is often used to keep plants warm and growing in the winter, 
                    <Silence/> and here, I hope, this burlap keeps these memories/worlds/people warm and growing. 
                </Memory>
            </MagnifyingGlass>
        </Window>
        )
    }
}

export default BurlapHistory;