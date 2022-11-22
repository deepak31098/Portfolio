import React from 'react';
import { Link } from 'react-router-dom';
import {Description,Main,Deepak,Tag,Info,Image} from '../Styles/HomeStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,faDochub
} from '@fortawesome/free-brands-svg-icons'
import Skills from './Skills';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

function Home(){

    return (
        <>
        <Main id="Home">
            <div>
                <Description>
                    <Deepak>Hey there, My Name is Deepak</Deepak>
                    <div><i><span>A Developer having passion for learning and designing websites</span></i></div>
                </Description>
                <Info>My Githib</Info>
                <Tag target="_blank" href='https://github.com/deepak31098?tab=repositories' >
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
            
            </Tag>
            <Tag href='resume/Resume.pdf' target="_blank" download='resume/Resume.pdf'>
                        <FontAwesomeIcon icon={faReceipt} size='2x'/>
            </Tag>
            <Info>Resume</Info>
            </div>
            {/* <Image src="images/prof.png"/> */}
        </Main>
        
        </>
    )

}

export default Home;