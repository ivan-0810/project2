import React from 'react';
import Bill1 from "../../images/bill1.png";
import Bill2 from "../../images/bill2.png";
import Bill3 from "../../images/bill3.png";
import Bill4 from "../../images/bill4.png";

class LinkedIn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const promenliva = this.props.tagname
        
        const LinkedInHeader= { 
            width: "90%",
            height: "51vh",
            position: "absolute",
            top:"0",
            left: '38px',
         //backgroundColor: "green"
        }

      
        const LinledInAbout = {
            width: "100%", 
            height: "29vh",
            position:"absolute",
            top:"58vh",
            right:0,
           // backgroundColor: "gray"
        }
        const LinkedInWorkexpirience = {
            width:"89%",
            height: "35vh",
            position: "absolute",
            top: "155vh",
            left:"48px",
           //backgroundColor: "yellow"
        }
        const LinkedInArtikels ={
            width: "100%", 
            height: "57vh",
            position:"absolute",
            top:'89vh',
            right:"0",
           //backgroundColor: "blue"
        }
  

        const LinkedInEducation ={
            width: "89%", 
            height: "30vh",
            position:"absolute",
            top:"198vh",
            left:"46px",
          // backgroundColor: "red"
        }
      
   
    

        return (
            <div style={{ height: "79vh", overflowY: "auto", marginBottom: "100px", position: "relative" }}>
                <img src={Bill1} alt="" />
                <img src={Bill2} alt="" />
                <img src={Bill3} alt="" />
                <img src={Bill4} alt="" />
                <div  onMouseOver={this.props.hoverLinkedInLaika} style= {LinkedInHeader} className ={`${promenliva}LinkedInHeader`}></div>
                <div  onMouseOver={this.props.hoverLinkedInLaika} style= {LinledInAbout} className ="LinledInAbout"></div>
                <div onMouseOver={this.props.hoverLinkedInLaika} style ={LinkedInWorkexpirience} className="LinkedInWorkexpirience"></div>
                <div onMouseOver={this.props.hoverLinkedInLaika} style ={LinkedInArtikels} className="LinkedInArtikels"></div>
                <div onMouseOver={this.props.hoverLinkedInLaika} style ={LinkedInEducation} className="LinkedInEducation"></div>
                
            </div>
        );
    }
}

export default LinkedIn;