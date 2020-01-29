import React, { Fragment } from 'react';
import DigitalPic from "../../../images/Digital Marketing Resume.png";
import Contacts from "../Data-Science/Contacts";
import H1 from "../WebDevelopment/HeaderComponents/H1";
import H4 from "../WebDevelopment/HeaderComponents/h4";
import Img from "../WebDevelopment/HeaderComponents/Img";
import Paragraph from "../WebDevelopment/HeaderComponents/Paragraph";
import Languages from "../Data-Science/Languages/Languages";
import "./DigitalMarketing.css";
import DMWorkExpirience from "./DMWorkexpirience/DMWorkExpirience";
import DMEducation from "./DMEducation/DMEducation";
import SkilsAndCompetenciens from '../WebDevelopment/SkilsAndCompetenciens/SkilsAndCompetenciens';
import AchivementsAndCertificates from '../WebDevelopment/AchievmentsAndCertificates/AchivementsAndCertificates';
import Tips from "../../Tips";
class DigitalMarketing extends React.Component {
    sendArray(e) {
        let tipsTitle = Tips[e.currentTarget.attributes['tag'].value];
        this.props.onDescriptionList(tipsTitle);
    }
    render() {
        const style = { width: "100%" }
        return (

            <div className="DigitalMarketing" id="divToPrint">
                {!this.props.editPage ?
                    <Fragment>
                        <img src={DigitalPic} alt="" style={style} />
                        <div onClick={this.props.tips} className="DigitalMarketintipsHeader"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsPhoto"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsInfos"></div>
                        <div onClick={this.props.tips} className="DigitalMarketingtipsWorkExpirience"></div>
                        <div onClick={this.props.tips} className="DigitalMarketingtipsSKils"></div>
                        <div onClick={this.props.tips} className="DigitalMarketingtipsAchievmens"></div>
                        <div onClick={this.props.tips} className="DigitalMarketingtipsEducation"></div>
                        <div onClick={this.props.tips} className="DigitalMarketingtipsLanguages"></div>
                    </Fragment>
                    :
                    <Fragment>

                        <div className='DataScieneHeader'>
                            <div className="data-science-image">
                                <div tag="DataSciencetipsPhoto" onClick={(e) =>this.sendArray(e)}>
                                    <Img />
                                </div>
                            </div>
                            <div className="dataScienceTitle" tag="DigitalMarketintipsHeader" onClick={(e) =>this.sendArray(e)}>
                                <H1 name="your name" placeholder="your name" />
                                <H4 />
                                <Paragraph />
                            </div>

                        </div>
                        <div tag="DataSciencetipsInfos" onClick={(e) => this.sendArray(e)}>
                            <Contacts />
                        </div>


                        <div className="mainContainer-dm">
                            <div className="left-main-block-dm">
                               <div tag="DigitalMarketingtipsWorkExpirience"  onClick={(e) => this.sendArray(e)}>
                               <DMWorkExpirience />
                               </div>
                               <div tag="DigitalMarketingtipsEducation"onClick={(e) => this.sendArray(e)}>
                               <DMEducation />
                               </div>
                            </div>
                            <div className="right-main-block-dm">

                               <div tag="DigitalMarketingtipsSkils" onClick={(e) => this.sendArray(e)}>
                               <SkilsAndCompetenciens name="Skils" />
                               </div>
                                <div tag="DigitalMarketingAchievmens"  onClick={(e) => this.sendArray(e)}>
                                <AchivementsAndCertificates name="Achievments" />
                                </div>
                                <div tag="DigitalMarketingtipsLanguages" onClick={(e) => this.sendArray(e)}>
                                <Languages color={{ color: "#468f98" }} />
                                </div>

                            </div>
                        </div>

                    </Fragment>
                }
            </div>
        );
    }
}

export default DigitalMarketing;