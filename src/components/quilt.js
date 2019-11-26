import React from "react";
import styled from "styled-components";
import Frame from "./thumbnail";
import LawnMowing from "./lawnmowing";
import BurlapHistory from "./burlapHistory";
import DataMappings from "./dataMappings";
import FuDao from "./fuDao";
import Embodiment from "./embodiment";
import HongCun from "./hongCun";
import HuskLamp from "./huskLamp";

import LawnSrc from "../assets/lawnmowing.svg";
import BurlapSrc from "../assets/burlap.svg";
import MapSrc from "../assets/dataMappings.svg";
import HongcunSrc from "../assets/hongcun.svg";
import EmbodimentSrc from "../assets/embodiment.svg";
import FuSrc from "../assets/fu.svg";
import BodyArmour from "../assets/bodyArmour.svg";
import PineconeSrc from "../assets/pinecone.svg";

import BurlapFamily from "../assets/burlapFamily.png";
import MapStories from "../assets/map1.png";
import FuStory from "../assets/fuDao.png";
import HuskLamp0 from "../assets/huskLamp2.jpg";
import HongCunPiece from "../assets/HongCunTri.jpg";
import Embodiments from "../assets/embodimentsClose1.jpg";


import frame1_1 from "../assets/1_1.svg";
import frame1_2 from "../assets/1_2.svg";
import frame1_3 from "../assets/1_3.svg";
import frame1_4 from "../assets/1_4.svg";
import frame2_1 from "../assets/2_1.svg";
import frame2_2 from "../assets/2_2.svg";
import frame2_3 from "../assets/2_3.svg";
import frame2_4 from "../assets/2_4.svg";


const Fray = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-content: center;
  grid-template-rows: auto auto 500px;
  background-color: rgba(254, 214, 175, 0.6);
`;

const quilt = [
  {frame: frame1_1, cover: LawnSrc},
  {frame: frame1_2, cover: BurlapSrc},
  {frame: frame1_3, cover: MapSrc},
  {frame: frame1_4, cover: PineconeSrc},
  {frame: frame2_1, cover: HongcunSrc},
  {frame: frame2_2, cover: EmbodimentSrc},
  {frame: frame2_3, cover: FuSrc},
  {frame: frame2_4, cover: BodyArmour}
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
    }

    quilt = () => {
        this.setState({story: -1});
    }

    zoom = (event) => {
        this.setState({zoom: event.target.id});
    }

    render () {
        return (
            <div>
            <Fray>
                {
                    this.state.story == 0 ? 
                    <LawnMowing 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}>
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
                        src={BurlapFamily}>
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
                        src={MapStories}>
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
                        src={HuskLamp0}>
                    </HuskLamp> : null
                }
                {
                    this.state.story == 4 ? 
                    <HongCun 
                        style={{
                            zIndex: "-100", 
                            display: "grid", 
                            position: "absolute", 
                            top: "0px",  
                            left: "0px"}}
                        src={HongCunPiece}>
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
                        src={Embodiments}>
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
                        src={FuStory}>
                    </FuDao> : null
                }
                {
                    this.state.zoom === -1 ?
                    quilt.map((image, i) => (
                        <Frame 
                            key={i} 
                            window={image.frame} 
                            id={i} 
                            hoverSrc={image.cover}
                            onMouseOver={this.storyteller}
                            onMouseOut={this.quilt}
                            onClick={this.zoom}/>
                    )) : null
                }
            </Fray>
            <Fray>
            </Fray>
            </div>
        );
    }
}

export default Quilt;