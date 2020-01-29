import React, { useState,useContext } from 'react';
import WebDevelopment from "../CardComponents/WebDevelopment/WebDevelopment";
import DataScience from "../CardComponents/Data-Science/DataScience";
import Design from "../CardComponents/Design/Design";
import DigitalMarketing from "../CardComponents/DigitalMarketing/DigitalMarketing";
import CVnavbar from "./CVnavbar";
import Footer from "../Footer/Footer";
import "./CV.css";
import LinkedIn from "../CardComponents/LinkedIn";
import WeAreLaika from "../CardComponents/WeAreLaika";
import Tips from "../Tips";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const CV = props => {
    const [promenliva] = useState(props.match.params.name);
    const [removeButton, setRemoveButton] = useState(false);
    const [editPage, setEditPage] = useState(false);
    const [editBlog, setEditBlog] = useState("Here is where you get comments on each section of the CV, e.g. you click on the   photo and it gives you tips on how it should look like");
    const takeSugestion = (e) => { setEditBlog(e) };
    const tips = (e) => { setEditBlog(Tips[e.target.className]) };
    const hoverLinkedInLaika = (e) => { setEditBlog(Tips[e.target.className]) };

    const showButtons = () => {
        setRemoveButton(false);
        setEditBlog(Tips.blogText);
    };
    const hideButtons = () => {
        setRemoveButton(true);
        setEditBlog(Tips.LinkedInBlogText);
    };
    const getPDF = () => {
        if(editPage){
        var divToPrint = document.querySelector('#divToPrint');  
        window.scrollTo(0,0)
           
        var HTML_Width = divToPrint.clientWidth;
        var HTML_Height = divToPrint.clientHeight;
        var top_left_margin = 15;
        var PDF_Width = HTML_Width + (top_left_margin * 2);
        var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);       
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;       
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;    
         
        html2canvas(divToPrint, {
            allowTaint: true,   
            scale:5         
        }).then(function (canvas) {
            canvas.getContext('2d');
            var imgData = canvas.toDataURL("image/jpeg", 1.50);
            var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            for (var i = 1; i <= totalPDFPages; i++) {
                pdf.addPage(PDF_Width, PDF_Height);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            pdf.save("cv.pdf");

        });
    }
    };
    const edit = ()=> setEditPage(!editPage);
    const components = {
        "WebDevelopment": WebDevelopment,
        "Design": Design,
        "DigitalMarketing": DigitalMarketing,
        "DataScience": DataScience,
        "wearelaika": WeAreLaika,
        "linkedin": LinkedIn
    }
    const Tagname = components[props.match.params.name];
    return (
        <div className="CV">
            <div className="CVblog"> 
              <CVnavbar
                    name={promenliva}
                    hideButtons={hideButtons}
                    showButtons={showButtons} />
                {!removeButton && <button onClick={edit} className="edit">Edit</button>}
                {/* <div > */}
                    <Tagname 
                        tagname={promenliva}
                        tips={tips}
                        hoverLinkedInLaika={hoverLinkedInLaika}
                        editPage={editPage}
                        onDescriptionList={(e) => takeSugestion(e)}
                    />
                {/* </div> */}
                {!removeButton &&
                        <button className="download" onClick={getPDF} >Download</button>}
            </div>

            <div className="EditBlog">
                <p>{editBlog}</p>
            </div>
            <Footer />
        </div>

    );
}

export default CV;
