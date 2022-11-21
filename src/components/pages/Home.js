import React from 'react';
import {Description,Main,Deepak,Tag} from '../Styles/HomeStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import Skills from './Skills';

function Home(){

    return (
        <>
        <Main>
            <div>
                <Description>
                    <Deepak>Hey there, My Name is Deepak</Deepak>
                    <div><i><span>A Developer having passion for learning and designing websites</span></i></div>
                </Description>
                <Tag href='https://github.com/deepak31098?tab=repositories' >
                    <FontAwesomeIcon icon={faGithub} size='3x'/>
            </Tag>
            </div>
        </Main>
        <Skills/>
        </>
    )

}

export default Home;