import React, { Fragment } from 'react';
import DesignPic from "../../../images/Graphic Design Resume.png";
import H1 from '../WebDevelopment/HeaderComponents/H1';
import H4 from '../WebDevelopment/HeaderComponents/h4';
import "./Design.css";
import Paragraph from '../WebDevelopment/HeaderComponents/Paragraph';
import DesingWorkExpirience from "./DesignWorkExpirience/DesignWorkExpirience";
import DesignContacts from "./DesignContacts/DesignContacts";
import DesignEducation from "./DesignEducation/DesignEducation";
import AchivementsAndCertificate from "../WebDevelopment/AchievmentsAndCertificates/AchivementsAndCertificates";
import Tips from "../../Tips";
import Phone from '../WebDevelopment/HeaderComponents/Phone';
import Email from '../WebDevelopment/HeaderComponents/Email';
import Twiter from '../WebDevelopment/HeaderComponents/Twiter';
import City from '../WebDevelopment/HeaderComponents/City';

class Design extends React.Component {

    sendArray(e) {
        let tipsTitle = Tips[e.currentTarget.attributes['tag'].value]
        this.props.onDescriptionList(tipsTitle);
    }

    render() {
      
        const style = { width: "100%" }
        return (
            <div className="Design">
                {!this.props.editPage ?
                    <Fragment>
                        <img src={DesignPic} alt="" style={style} />
                        <div onClick={this.props.tips}  className="DesigntipsPhoto"></div>
                        <div onClick={this.props.tips}  className="DesigntipsInfos"></div>
                        <div onClick={this.props.tips}  className="DesigntipsWorkExpirience"></div>
                        <div onClick={this.props.tips}  className="DesigntipsSkils"></div>
                        <div onClick={this.props.tips}  className="DesignEdication"></div>
                    </Fragment>
                    :
                    <div id="divToPrint" style={{marginLeft:"25px"}}>
                        <div className="design-header">
                            <div className="design-header-padding" tag="DesigntipsPhoto" onClick={(e) => this.sendArray(e)}>
                                <H1 name="Name" placeholder="your name" />
                                <H1 name="Last Name" placeholder="your last name" />
                                <H4 />
                            </div>

                        </div>
                        <div className="design-main-container">
                            <div className="paragraph" tag="DesigntipsPhoto" onClick={(e) => this.sendArray(e)}>
                                <Paragraph />
                            </div>
                            <div className="left-main-block">
                                <div tag="DesignWorkExpirience" onClick={(e) => this.sendArray(e)}>
                                    <DesingWorkExpirience />
                                </div>
                                <div tag="DesigntipsInfos" className="design-contacts" onClick={(e) => this.sendArray(e)}>
                                    <h2>contacts</h2>
                                    
                                    <Phone />
                                    <Email />
                                    <Twiter name= "your linkedin" placeholder="your linkedin(not obligate)"/>
                                    <City />
                                </div>
                            </div>
                            <div className="right-main-block">
                                <div tag="DesignEdication" onClick={(e) => this.sendArray(e)}>
                                    <DesignEducation />
                                </div>
                                <div tag="DesigntipsSkils" onClick={(e) => this.sendArray(e)}>
                                    <AchivementsAndCertificate popup="skils" name="skils" />
                                </div>

                            </div>

                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Design;