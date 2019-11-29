import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import WindowNav from "../window";

import HongCunTryp from "../../assets/HongCunTri.jpg";
import Silence from "../stillness/silence";
import Breathe from "../stillness/breathe";
import Breath from "../stillness/breath";
import Beat from "../stillness/beat";
import Memory from "../holding";
import Peeler from "../peel";
import Guider from "../guide";

const Window = styled.div`
    margin: 0px;
    overflow: scroll;

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

const Crouching = styled.div`
    width: 50%;
`;

const Research = styled.div`
    width: 50%;
    text-align: right;
`;

const TextVeil = styled.div`
    display: flex;
    margin: 0px 100px;
`;


export class HongCun extends React.Component {
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
            margin: "0px"
        }
        return (
        <Window style = {this.props.style}>
            <History src={HongCunTryp}></History>
            <MagnifyingGlass veil={this.state.veil}>
            <WindowNav onClick={this.props.windowNav}></WindowNav>
                <TextVeil>
                    <Crouching>
                        “If the sky opened up for me
                        <Silence/>
                        And the mountains disappeared
                        <Silence/>
                        If the seas ran dry, turned to dust
                        <Silence/>
                        And the <Guider onClick={this.props.zoom3}>sun</Guider> refused to rise
                        <Breath/>
                        I would still find my way
                        <Silence/>
                        By the light I see in your eyes
                        <Silence/>
                        The world I know fades away
                        <Silence/>
                        But you stay
                        <Breath/>
                        As the earth reclaims its due
                        <Silence/>
                        And the cycle starts anew
                        <Silence/>
                        We'll stay always in the love that we have
                        <Silence/>
                        Shared before time
                        <Breath/>
                        If the years take away
                        <Silence/>
                        Every memory that I have
                        <Silence/>
                        I would still know the way
                        <Silence/>
                        That would lead me back to your side
                        <Breath/>
                        The north star may die
                        <Silence/>
                        But the light that I see in your eyes
                        <Silence/>
                        Will burn there always
                        <Silence/>
                        Lit by the love we have
                        <Breath/>
                        Shared before time
                        <Silence/>
                        When the forest turns to jade
                        <Silence/>
                        And the stories that we've made
                        <Silence/>
                        Dissolve away
                        <Breath/>
                        One shining light will still remain
                        <Silence/>
                        When we shed our earthly skin
                        <Silence/>
                        And when our real life begins
                        <Silence/>
                        There'll be no shame
                        <Breath/>
                        Just the love that we have made before time”
                        <Silence/>
                        Title Song from Crouching Tiger, Hidden Dragon,
                        <Silence/>
                        changed, not just translated
                    </Crouching>
                    <Research>  
                        <Breathe/>
                        “Both the heritage management system
                        <Silence/>
                        and its authenticity principles
                        <Silence/>
                        are not indigenous, but were developed
                        <Breath/>
                        in western society,
                        <Silence/>
                        and exported from western countries.
                        <Silence/>
                        Authenticity in Hongcun is an implementation
                        <Silence/>
                        of the principle of material, static, and superficial
                        <Silence/>
                        style
                        <Silence/>
                        understandings,
                        <Breathe/>
                        while less attention is paid to the
                        <Silence/>
                        non-material cultural heritage protection, which
                        <Silence/>
                        is especially reflected in the neglect and
                        <Silence/>
                        the development restrictions
                        <Silence/>
                        on local craft and folk art.”
                        <Silence/>
                        -HongGang Xu
                        <Breathe/>
                        Since 2012, the Chinese Government has
                        <Silence/>
                        proposed the preservation concept
                        <Silence/>
                        of the “Traditional Village”
                        <Silence/>
                        the heritage of historic centres at the
                        <Silence/>
                        village-scale throughout China, which are being profoundly
                        <Silence/>
                        influenced by modernization…
                        <Breathe/>
                        ...there is a lack of focus
                        <Silence/>
                        on equally valuable cultural landscapes,
                        <Silence/>
                        open spaces
                        <Silence/>
                        and environments.”
                        <Silence/>
                        -TingShen Li
                    </Research>
                </TextVeil>
            </MagnifyingGlass>
        </Window>
        )
    }
}
export default HongCun;