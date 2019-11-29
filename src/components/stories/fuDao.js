import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import WindowNav from "../window";

import FuDaoObject from "../../assets/fuDao.png";

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
    width: 50%;
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

export class FuDao extends React.Component {
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
            margin: "0px 700px"
        }
        return (
            <Window style={this.props.style}>
                <MagnifyingGlass veil={this.state.veil}>
                    <WindowNav onClick={this.props.windowNav}></WindowNav>
                    <Memory style={MemStyle}>
                        <Breathe/>In Chinese, 福 (fu) is the character for good luck, good fortune. 
                        <Silence/>It’s a character that’s hung in gold and/or red for <Guider onClick={this.props.zoom7}>good luck</Guider>. 
                        <Silence/>And if hung upside down, it symbolizes good fortune that has arrived.
                        <Silence/> 倒 (dao) means upside down, but <Guider onClick={this.props.zoom1}>到 (dao)</Guider>, 
                        <Silence/>same pronunciation different tone, means to have arrived. 
                        <Silence/>So growing up, when we hung 福 upside down, it was an act of <Guider onClick={this.props.zoom4}>recognizing </Guider>
                        <Silence/>all the fortune we have right now, <Peeler onClick={this.peel}>right here</Peeler>, 
                        <Silence/>an act of gratitude.
                        <Silence/>And an object to hang to remind us, 
                        <Silence/>to materialize gratitiude into our visual language. 
                        <Breathe/>Thinking on <Guider onClick={this.props.zoom5}>embodiments</Guider> of joy, 
                        <Silence/>I wanted to create a 福 hanging that could embody my version and realities of joy. 
                        <Silence/>To symbolize is to recognize, and to insert my  <Guider onClick={this.props.zoom2}>own joy</Guider> into a symbol so familiar to me 
                        <Silence/>is to claim something of Chinese culture as my own–simultaneously claiming my 
                        <Silence/>version/existence of Chinese-American identity as valid and tangible, 
                        <Silence/>and honoring the act of gratitude and recognition alive in this character by applying 
                        <Silence/>it to the many embodiments of <Guider onClick={this.props.zoom3}>joy</Guider> in my life. 
                    </Memory>
                </MagnifyingGlass>
                <History src={FuDaoObject}></History>
            </Window>
        )
    }
}


export default FuDao;