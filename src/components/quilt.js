import React from "react";
import styled from "styled-components";

import colors from "./styles/colors";
import Frame from "./thumbnail";
import LawnMowing from "./stories/lawnmowing";
import DataMappings from "./stories/dataMappings";
import FuDao from "./stories/fuDao";
import Embodiment from "./stories/embodiment";
import HongCun from "./stories/hongCun";
import HuskLamp from "./stories/huskLamp";
import BodyArmour from "./stories/bodyArmour";
import BurlapHistory from "./stories/burlapHistory";


import LawnSrc from "../assets/lawnCover_2.svg";
import BurlapSrc from "../assets/burlapCover_1.svg";
import MapSrc from "../assets/dataCover_1.svg";
import HongcunSrc from "../assets/hongcunCover_1.svg";
import EmbodimentSrc from "../assets/embodimentCover_1.svg";
import FuSrc from "../assets/fuCover_1.svg";
import BodyArmourSrc from "../assets/quiltCover_1.svg";
import PineconeSrc from "../assets/conversationsCover_2.svg";

import BurlapFamily from "../assets/burlapFamily.png";
import MapStories from "../assets/map1.png";
import FuStory from "../assets/fuDao.png";
import HuskLamp0 from "../assets/huskLamp2.jpg";
import HongCunPiece from "../assets/HongCunTri.jpg";
import Embodiments from "../assets/embodimentsClose1.jpg";
import BodyArmourSketch from "../assets/LaceFull.svg";
import QuiltWIP from "../assets/quiltWIP.svg";


import frame1_1 from "../assets/1_1_frame2.svg";
import frame1_2 from "../assets/1_2_frame2.svg";
import frame1_3 from "../assets/1_3_frame2.svg";
import frame1_4 from "../assets/1_4_frame2.svg";
import frame2_1 from "../assets/2_1_frame2.svg";
import frame2_2 from "../assets/2_2_frame2.svg";
import frame2_3 from "../assets/2_3_frame2.svg";
import frame2_4 from "../assets/2_4_frame2.svg";


const Patterning = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-content: center;
  grid-template-rows: 6vh 25vw 25vw 6vh 500px;
  background-color: ${props => props.veil ? colors.sunLight1 : colors.clearVeil};
  position: fixed;
`;

const Fray = styled.h1`
    color: ${colors.red1};
    background-color: ${colors.sun1};
    margin: 0px;
    font-size: 19px;
    font-family: Georgia, sans-serif;
`;

const quilt = [
  {frame: frame1_1, cover: LawnSrc},
  {frame: frame1_2, cover: BurlapSrc},
  {frame: frame1_3, cover: MapSrc},
  {frame: frame1_4, cover: PineconeSrc},
  {frame: frame2_1, cover: HongcunSrc},
  {frame: frame2_2, cover: EmbodimentSrc},
  {frame: frame2_3, cover: FuSrc},
  {frame: frame2_4, cover: BodyArmourSrc}
];

const story = [
    LawnMowing,
    frame1_2,
    frame1_3,
    frame2_1,
    frame2_2,
    frame2_3,
  ];

class Quilt extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            story: -1,
            zoom: -1,
        };
        this.storyteller = this.storyteller.bind(this);
        this.quilt = this.quilt.bind(this);
        this.zoom = this.zoom.bind(this);
      }

    storyteller = (event) => {
        this.setState({story: event.target.id});
        if (event.target.id == 8)  {
            this.setState({story: event.target.id});
        }
    }

    quilt = () => {
        this.setState({story: -1});
    }

    zoom = (event) => {
        this.setState({zoom: event.target.id});
    }

    zoom0 = () => {
        this.setState({story: 0});
    }

    zoom1 = () => {
        this.setState({story: 1});
    }

    zoom2 = () => {
        this.setState({story: 2});
    }

    zoom3 = () => {
        this.setState({story: 3});
    }

    zoom4 = () => {
        this.setState({story: 4});
    }

    zoom5 = () => {
        this.setState({story: 5});
    }

    zoom6 = () => {
        this.setState({story: 6});
    }


    zoom7 = () => {
        this.setState({story: 7});
    }

    navToWindow = () => {
        this.setState({zoom: -1});
        this.setState({story: -1});

    }

    render () {
        return (
            <div>
                {
                    this.state.story == 0 ? 
                    <LawnMowing 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}
                        windowNav={this.navToWindow}
                        zoom1={this.zoom1}
                        zoom2={this.zoom2}
                        zoom3={this.zoom3}
                        zoom4={this.zoom4}
                        zoom5={this.zoom5}
                        zoom6={this.zoom6}
                        zoom7={this.zoom7}>
                    </LawnMowing> : null
                }
                {
                    this.state.story == 1 ? 
                    <BurlapHistory 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}
                        zoom0={this.zoom0}
                        zoom2={this.zoom2}
                        zoom5={this.zoom5}
                        windowNav={this.navToWindow}>
                    </BurlapHistory> : null
                }
                {
                    this.state.story == 2 ? 
                    <DataMappings 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}
                        src={MapStories}
                        zoom5={this.zoom5}
                        zoom6={this.zoom6}
                        zoom3={this.zoom3}
                        zoom4={this.zoom4}
                        zoom1={this.zoom1}
                        windowNav={this.navToWindow}>
                    </DataMappings> : null
                }
                {
                    this.state.story == 3 ? 
                    <HuskLamp 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}
                        zoom2={this.zoom2}
                        zoom7={this.zoom7}
                        windowNav={this.navToWindow}>
                    </HuskLamp> : null
                }
                {
                    this.state.story == 4 ? 
                    <HongCun 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "fixed", 
                            top: "0px",
                            overflow: "hidden",  
                            left: "0px"}}
                        zoom2={this.zoom2}
                        zoom1={this.zoom1}
                        zoom0={this.zoom0}
                        zoom5={this.zoom5}
                        zoom6={this.zoom6}
                        windowNav={this.navToWindow}>
                    </HongCun> : null
                }
                {
                    this.state.story == 5 ? 
                    <Embodiment 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}
                        zoom0={this.zoom0}
                        zoom1={this.zoom1}
                        zoom4={this.zoom4}
                        zoom6={this.zoom6}
                        zoom3={this.zoom3}
                        windowNav={this.navToWindow}>
                    </Embodiment> : null
                }
                {
                    this.state.story == 6 ? 
                    <FuDao 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}
                        src={FuStory}
                        zoom1={this.zoom1}
                        zoom2={this.zoom2}
                        zoom3={this.zoom3}
                        zoom4={this.zoom4}
                        zoom5={this.zoom5}
                        zoom7={this.zoom7}
                        windowNav={this.navToWindow}>
                    </FuDao> : null
                }
                {
                    this.state.story == 7 ? 
                    <BodyArmour 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}
                        src={BodyArmourSketch}
                        zoom0={this.zoom0}
                        zoom1={this.zoom1}
                        zoom2={this.zoom2}
                        zoom3={this.zoom3}
                        zoom4={this.zoom4}
                        zoom5={this.zoom5}
                        zoom6={this.zoom6}
                        windowNav={this.navToWindow}>
                    </BodyArmour> : null
                }
                {
                     this.state.zoom === -1 ?
                    <Patterning veil={this.state.story === -1}>
                        <Fray style={{gridColumn: "1 / 5", gridRow: "1 / 2", padding: "4vh 3vh 0vh", alignSelf: "flex-end"}}>
                        Translation lacework: rivers growing, branches flowing. Windows of a Quilt: stories living. Recollections for foundation: translation fertilizer.
                        </Fray> 
                        {
                            quilt.map((image, i) => (
                                <Frame 
                                    key={i} 
                                    window={image.frame} 
                                    id={i} 
                                    hoverSrc={image.cover}
                                    onMouseOver={this.storyteller}
                                    onMouseOut={this.quilt}
                                    onClick={this.zoom}/>
                                ))
                        }
                        <Fray style={{gridColumn: "1 / 5", gridRow: "4 / 5", padding: "0vh 3vh 4vh"}}>
                            Fertilizer translation: foundation for recollections. Living stories: quilt of windows. Flowing branches, Growing rivers: lacework translation.
                        </Fray> 
                </Patterning> : null
            }

            </div>
        );
    }
}

export default Quilt;