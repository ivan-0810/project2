import React, { Fragment } from 'react';
import "./WebDevelopment.css";
import H1 from './HeaderComponents/H1';
import H4 from "./HeaderComponents/h4";
import Paragaph from './HeaderComponents/Paragraph';
import Img from "./HeaderComponents/Img";
import WorkExpirience from './WorkExpirience';
import Education from "./Education/Education";
import SkilsAndCompetenciens from './SkilsAndCompetenciens/SkilsAndCompetenciens';
import AchivementsAndCertificates from './AchievmentsAndCertificates/AchivementsAndCertificates';
import Interests from './Interests/Interests';
import WebImg from "../../../images/Web Development Resume.png";
import Tips from "../../Tips";
import Email from './HeaderComponents/Email';
import Phone from './HeaderComponents/Phone';
import City from './HeaderComponents/City';
import Twiter from './HeaderComponents/Twiter';

const WebDevelopment = (props) => {
    const sendArray = (e) => {
        let tipsTitle = Tips[e.currentTarget.attributes['tag'].value];
        props.onDescriptionList(tipsTitle);
    }

    return (
        <div className="WebDevelopment" id="divToPrint">
            {!props.editPage ?

                <div>
                    <img src={WebImg} alt="" />
                    <div onClick={props.tips} className="WebtipsHeader"></div>
                    <div onClick={props.tips} className="WebtipsPhoto"></div>
                    <div onClick={props.tips} className="WebtipsInfos"></div>
                    <div onClick={props.tips} className="WebtipsWorkExpirience"></div>
                    <div onClick={props.tips} className="WebtipsSkils"></div>
                    <div onClick={props.tips} className="WebtipsEdication"></div>
                    <div onClick={props.tips} className="WebtipsAchivmentsInterests"></div>
                    <div onClick={props.tips} className="DataSciencetipsLanguages"></div>
                </div>

                :
                <div >
                    <header>
                        <div className="left">
                            <div className="web-header-textdiv" tag="WebtipsHeader" onClick={(e) => sendArray(e)}>
                                <div className="rectangle-black"></div>
                                <H1 name="your name" placeholder="your name" />
                                <H4 h4name="professional title" />
                                <Paragaph pText="Short Engaging About Your Self" />
                            </div>
                            <div tag="WebtipsPhoto" onClick={(e) => sendArray(e)}>
                                <Img />
                            </div>

                        </div>
                        <div className="right">
                            <div tag="WebtipsInfos" className="header-contacts" onClick={(e) => sendArray(e)}>
                                <Email />
                                <Phone />
                                <City />
                                <Twiter name="your twiter" placeholder="you twitter(not obligate)" />
                            </div>
                        </div>
                    </header>
                    <div className="main-container">
                        <div className="left-main-block">


                            <div tag="WebtipsWorkExpirience" onClick={(e) => sendArray(e)}>
                                <WorkExpirience />
                            </div>
                            <div tag="WebtipsEdication" onClick={(e) => sendArray(e)}>
                                <Education />
                            </div>

                        </div>
                        <div className="right-main-block">

                            <div tag="WebtipsSkils" onClick={(e) => sendArray(e)}>
                                <SkilsAndCompetenciens name="Skils & Competenciens" />
                            </div>
                            <div tag="WebtipsAchivmentsInterests" onClick={(e) => sendArray(e)}>
                                <AchivementsAndCertificates popup="Achievments" name="Achievments & Certificate" />
                                <Interests />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            }
        </div>
    );

}


export default WebDevelopment;
