import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import WindowNav from "../window";

import HongCunTryp from "../../assets/HongCunTri.jpg";
import HongCunClose from "../../assets/hongCunClose.png";
import HongCunLandscape from "../../assets/hongCunLandscape.png";

import Silence from "../stillness/silence";
import Breathe from "../stillness/breathe";
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
    background-color: ${props => (props.veil) ? colors.sunLight1 : colors.clearVeil};
    position: fixed;
    top: 0;
    right: 0;
`;

const History = styled.img`
    width: 100vw;
`;

const Crouching = styled.div`
    width: 50vw;
    font-size: 10px;
    line-height: 10px;
`;

const Research = styled.div`
    width: 50vw;
    text-align: right;
`;

const TextVeil = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    width: 95vw;
    line-height: 12px;
    margin: 0px 50px;
    color: ${props => props.veil ? colors.ink : colors.clearVeil};
`;

const Veil0 = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    margin: 0px 100px 0px 0px;

    text-align: center;
    color: ${props => props.veil ? colors.ink : colors.clearVeil};
`;

const Pattern = styled.div`
    display: flex;
    flex-direction: column;
`;


export class HongCun extends React.Component {
    constructor (props) {
        super(props);
        // this.zoom5 = props.zoom5;
        this.state = {
            layers: 0,
            img: HongCunTryp,
            veil0: true,
            veil1: false,
        };
        this.peel0 = this.peel0.bind(this);

    }

    peel0() {
        if (this.state.layers === 0) {
            this.setState({veil0: !this.state.veil0});
            this.setState({veil1: !this.state.veil1});
            this.setState({img: HongCunLandscape});
            this.setState({layers: 1});
        } else {
            this.setState({veil1: !this.state.veil1});
            this.setState({img: HongCunClose});
        }
    }

    render() {
        const MemStyle = {
            color: this.state.veil ? colors.ink1 : colors.clearVeil, 
            fontSize: "18px", 
            padding: "0px", 
            margin: "0px"
        }
        return (
            <div>
            <WindowNav onClick={this.props.windowNav}></WindowNav>
            <Window style = {this.props.style}>
            <Pattern>
                <History src={this.state.img}></History>
            </Pattern>
            <MagnifyingGlass veil={ this.state.veil0 || this.state.veil1 }>
            <TextVeil veil={this.state.veil1}>
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
                    <Guider onClick={this.props.zoom6}>Authenticity</Guider> in Hongcun is an implementation
                    <Silence/>
                    of the principle of material, static, and superficial
                    <Silence/>
                    style
                    <Silence/>
                    understandings,
                    <Breath/>
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
                    <Breath/>
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
                    <Breath/>
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
            <Veil0 veil={this.state.veil0}>
                In thinking about facial recognition and portraiture, and what it means to portray, to identify, to capture–
                <Silence/>I think of the blurry image and how it resists knowability. 
                <Silence/>A lack of knowability, can mean freedom, liberation, and the room to move and <Guider onClick={this.props.zoom6}>be (plural)</Guider>. 
                <Silence/>Privacy.
                <Silence/>But a <Guider onClick={this.props.zoom1}>lack of knowability</Guider> can also mean a lack of attention, a loss of pixels, stories, 
                <Silence/>clarities in understanding. 
                <Silence/>With a place like HongCun, I think of these small faded portraits of employees working at 
                <Silence/>the imaging (tourist) bureau and think of how this <Guider onClick={this.props.zoom1}>blur</Guider>, this lack of 
                <Silence/>focus and image quality comes from a privileging of a certain reality/portrayal of HongCun
                <Silence/>as a place. 
                <Silence/>
                <Silence/>HongCun is a UNESCO world heritage site, a movie set site for <Guider onClick={this.props.zoom5}>academy-award-winning</Guider>
                <Silence/>Crouching Tiger, Hidden Dragon. 
                <Silence/>It’s a place whose scenery is breathtaking, and a place where this scenery is privileged over the faces, 
                <Silence/>the people, the immaterial culture and reality of lives not captured in pixels, not circulated with popularity. 
                <Silence/>If you google search HongCun people, the first 30 results features only 3 people, revealing what (instead of who)
                <Silence/> is prioritized in the image circulation of this village. 
                <Silence/>
                <Silence/>Here, I wanted to reveal the many <Guider onClick={this.props.zoom0}>layers</Guider> of representation that construct a place, specifically here–HongCun. 
                <Silence/>There’s questions of authenticity, beauty, priority, attention, and value that rise with these layerings. 
                <Silence/>There’s images that take priority, images that are blurry from overlooking, and here I made with the leading question: 
                <Silence/>
                How do stories affect stories, information affect <Guider onClick={this.props.zoom2}>information</Guider>, pixels affect pixels? 
                <Silence/>
                <Silence/>
                : What stories and constructions of value and authenticity are creating blurry images, overlooked and de-prioritized faces? 
                <Silence/>How do privileged circulations of representation <Guider onClick={this.props.zoom3}>hide other representations</Guider>? 
                <Silence/>And specifically here, what are the unseen affects of certain constructions of authenticity and representation? 
                <Silence/><Peeler onClick={this.peel0}>PLEASE TOUCH.DISRUPT.DISPLACE.COVER.UNCOVER.FOCUS.BLUR.MOVE.SIT WITH.READ.QUESTION.DISCUSS.DESTABILIZE.REVEAL.HIDE.LOOK.LISTEN.AND PLEASE.PLEASE.</Peeler>
                <Breath/>
                <Silence/>NOTICE THE AFTERMATH
            </Veil0>
            </MagnifyingGlass>
        </Window>
        </div>
        )
    }
}
export default HongCun;