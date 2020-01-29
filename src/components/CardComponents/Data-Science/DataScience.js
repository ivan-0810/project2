import React, { Fragment } from 'react';
import DataSciene from "../../../images/Data Scientist Resume.png";
import "../WebDevelopment/WebDevelopment.css";
import Contacts from './Contacts';
import "./DataScience.css";
import DataScienceWorkExpirience from "./DataScienceWorkExpirience/dataScienceWorkExpirience";
import DataScienceEducation from "../Data-Science/Education/DataScienceEducation"
import Skils from './Skils/Skils';
import ProjectAndPublications from "./ProjectAndPublications/ProjectAndPublications";
import Languages from './Languages/Languages';
import InformalEducation from "../Data-Science/Informaledication/InformalEducation";
import H1 from "../WebDevelopment/HeaderComponents/H1";
import H4 from "../WebDevelopment/HeaderComponents/h4";
import Img from "../WebDevelopment/HeaderComponents/Img"
import Paragraph from "../WebDevelopment/HeaderComponents/Paragraph";
import Tips from "../../Tips";

class DataScience extends React.Component {
    sendArray(e) {
        let tipsTitle = Tips[e.currentTarget.attributes['tag'].value];
        this.props.onDescriptionList(tipsTitle);
    }

    render() {
        const style = { width: "100%" }
        return (

            <div className="DataScience" id='divToPrint'>
                {!this.props.editPage ?
                    <div>
                        <img src={DataSciene} alt="" style={style} />
                        <div onClick={this.props.tips} className="DigitalMarketingtipsHeader"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsPhoto"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsInfos"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsWorkExpirience"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsSkils"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsEdication"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsLanguages"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsInformalEducation"></div>
                        <div onClick={this.props.tips} className="DataSciencetipsProjectsAndPublication"></div>

                    </div>
                    :
                    <Fragment >
                        <div className='DataScieneHeader'>
                            <div className="data-science-image">
                                <div tag="DataSciencetipsPhoto" onClick={(e) => this.sendArray(e)}>
                                    <Img />
                                </div>
                            </div>
                            <div className="dataScienceTitle"tag="DigitalMarketingtipsHeader" onClick={(e) => this.sendArray(e)}>                           
                                <H1 name="your name" placeholder="your name" />
                                <H4 />
                                <Paragraph />
                            </div>

                        </div>
                       
                        <div tag="DataSciencetipsInfos" onClick={(e) => this.sendArray(e)}>
                            <Contacts />
                        </div>

                        <div className="main-container">
                            <div className="left-main-block">
                                <div className="left-box1" >
                                    <div tag="DataSciencetipsWorkExpirience" onClick={(e) => this.sendArray(e)}>
                                    <DataScienceWorkExpirience />
                                    </div>
                                    <div tag="DataSciencetipsEdication" onClick={(e) => this.sendArray(e)}>
                                    <DataScienceEducation />
                                    </div>
                                </div>

                            </div>
                            <div className="DataScience-rightBlock">
                                <div className="right-box1">
                                    <div tag="DataSciencetipsSkils" onClick={(e) => this.sendArray(e)}>
                                    <Skils />
                                    </div>
                                    <div tag="DataSciencetipsProjectsAndPublication"onClick={(e) => this.sendArray(e)}>
                                    <ProjectAndPublications name="project and publicationss" />
                                    </div>
                                    <div tag="DataSciencetipsLanguages" onClick={(e) => this.sendArray(e)}>
                                    <Languages color={{ color: "#354457" }} />
                                    </div>
                                    <div tag="DataSciencetipsInformalEducation"  onClick={(e) => this.sendArray(e)} >
                                    <InformalEducation />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
        );
    }
}

export default DataScience;