import React from "react";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import '../Styles/Academic.css';

function Academic(){
    return (
        <div className="main">
            <div className="Header">
                <span id="Academic">Academic</span>
            </div>
            <VerticalTimeline lineColor="transparent">
                <VerticalTimelineElement 
                iconStyle={{backgroundColor:"transparent"}}>
                    <h3>Post-Graduation</h3>
                    <h2>Graphic Era University</h2>
                    <h2>M.C.A</h2>
                    <h2>Pursuing</h2>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                iconStyle={{backgroundColor:"transparent"}}>
                    <h3>Graduation</h3>
                    <h2>Uttarakhand Technical University</h2>
                    <h2>B.Tech</h2>
                    <h2>2016-2020</h2>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                iconStyle={{backgroundColor:"transparent"}}>
                    <h3>Intermediate</h3>
                    <h2>Hermann Gmeiner School</h2>
                    <h2>2015-2016</h2>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                iconStyle={{backgroundColor:"transparent"}}>
                    <h3>High School</h3>
                    <h2>G.A.V.M</h2>
                    <h2>2014-2015</h2>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Academic;