import React, { Fragment, useState } from 'react';
import Laika1 from "../../images/Laika/Laika1.png";
import Laika2 from "../../images/Laika/Laika2.png";
import Laika3 from "../../images/Laika/laika3.png";
import Laika4 from "../../images/Laika/Laika4.png";
import Laika5 from "../../images/Laika/Laika5.png";
import {Modal,ButtonToolbar, Button} from "react-bootstrap";
import popup from "../../images/Pop-up.png"



const WeAreLaika = (props) => {
    // console.log(props.tagname);
    const [lgShow, setLgShow] = useState(false);
    const LaikaEmail = {
        width: "100%",
        height: "53vh",
        position: "absolute",
        top: "11vh",
        left: '0px',
        //backgroundColor: "green"
    }


    const LaikaPortofolio = {
        width: "100%",
        height: "104vh",
        position: "absolute",
        top: "69vh",
        right: 0,
        // backgroundColor: "gray"
    }

    const LaikaWorkExpirience = {
        width: "100%",
        height: "41vh",
        position: "absolute",
        top: "250vh",
        left: "0",
        //backgroundColor: "yellow"
    }
    const LaikaSkils = {
        width: "100%",
        height: "54vh",
        position: "absolute",
        top: '184vh',
        right: "0",
        //backgroundColor: "blue"
    }


    const LaikaEducation = {
        width: "100%",
        height: "44vh",
        position: "absolute",
        top: "301vh",
        left: "0px",
        // backgroundColor: "red"
    }
    const LaikaSalary = {
        width: "100%",
        height: "101vh",
        position: "absolute",
        top: "392vh",
        left: "0px",
    }
    const paneDidMount = (node) => {
        if (node) {
            node.addEventListener("scroll", handleScroll);
        }
    }
    const handleScroll = (event) => {
        var node = event.target;
        const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
        if (bottom) {
            setLgShow(true)
        }
    }

    const imgWidth = { width: "100%" }
    return (
        <Fragment>
            <ButtonToolbar>
    <Button onClick={() => setLgShow(true)} style={{display:"none"}}>Large modal</Button> 
  
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
         
          <Modal.Body>
              <img src={popup} alt="" style={{width:"100%"}}/>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
            <div ref={paneDidMount} style={{ height: "79vh", overflowY: "auto", marginBottom: "100px", position: "relative" }}>


                <img src={Laika1} alt="" style={imgWidth} />
                <img src={Laika2} alt="" style={imgWidth} />
                <img src={Laika3} alt="" style={imgWidth} />
                <img src={Laika4} alt="" style={imgWidth} />
                <img src={Laika5} alt="" style={imgWidth} />
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaEmail} className="LaikaEmail"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaPortofolio} className="LaikaPortofolio"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaWorkExpirience} className="LaikaWorkExpirience"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaSkils} className="LaikaSkils"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaEducation} className="LaikaEducation"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaSalary} className="LaikaSalary"></div>

            </div>
        </Fragment>
    );
}
export default WeAreLaika;