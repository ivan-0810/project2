import React from 'react';
import "./StepInsideCV.css";
import firstPage from "../../images/firstPage.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const StepInsideCV = props => {
    return (
        <div className='StepInsideCV'>
            <div className="textDiv">
                <div>
                    <h1>The Ultimate<br />CV & Portofolio Check - List</h1>
                    <p>Are you Web Developer, Data Scientist, Digital Marketer or a Designer?<br />Have your CV and portofolio in check and create a 5-star representation<br /> of your skills with this guide.</p>
                    <Link to="/category" >step inside</Link>
                </div>
            </div>

            <div className="imgDiv">
                <img src={firstPage} alt="" />
            </div>
            <Footer />
        </div>
    );
}
export default StepInsideCV;