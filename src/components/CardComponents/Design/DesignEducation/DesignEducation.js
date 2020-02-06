import React, { useState } from 'react';
import uuid from "uuid"
import { Fragment } from "react";
import "../DesignWorkExpirience/DesignWorkExpirience.css";
import "./DesignEducation.css"
import Popup from '../../WebDevelopment/Popup';



const DesignEducation = (props) => {

    const [niza, setNiza] = useState([]); //glavna niza za zacuvuvanje

    const [isChecked, setIsChecked] = useState(false);
    const [onFormHideInput, setonFormHideInput] = useState(false);

    ////inputi///////
    const [education, setEducation] = useState("");
    const [datesMonth1InputVal, setDatesMonth1InputVal] = useState("");
    const [datesYear1InputVal, setDatesYear1InputVal] = useState("");
    const [datesMonth2InputVal, setDatesMonth2InputVal] = useState("");
    const [datesYear2InputVal, setDatesYear2InputVal] = useState("");
    const onFormInput = (e) => {
        setonFormHideInput(!onFormHideInput);
        if(!onFormHideInput){
            document.querySelector("body").style.backgroundColor="lightgray";
            }else {
                document.querySelector("body").style.backgroundColor="white"; 
            }
    };
    const onCloseBtn = (e) => { 
        setonFormHideInput(false);

        document.querySelector("body").style.backgroundColor="white"; 
    }
    const removeObj = (e, el) => {
        let filteredNiza = niza.filter(filter => filter.id !== el.id);
        setNiza([...filteredNiza]);
        setIsChecked(false);
    }

    const onSubmitForm = (e) => {
        if (e.keyCode === 13 &&
            education !== '' &&
            datesMonth1InputVal !== '' &&
            datesYear1InputVal !== ''
        ) {
            document.querySelector("body").style.backgroundColor="white";
            setNiza([...niza, {
                id: uuid(),
                education: education,
                datesMonth1: datesMonth1InputVal,
                datesYear1: datesYear1InputVal,
                datesMonth2: datesMonth2InputVal,
                datesYear2: datesYear2InputVal,
            }]);
 
            setonFormHideInput(!onFormHideInput);
            // site inputi se brishat
            setEducation("");
            setDatesMonth1InputVal("");
            setDatesYear1InputVal("");
            setDatesMonth2InputVal("");
            setDatesYear2InputVal("");

        }

    }


    return (
        <div className="DesignWorkExpirience ">
            <div className="onAdd">
                <h2>Education</h2>
                <button className="btnAdd" onClick={onFormInput}>add</button>
            </div>


            {niza.map((el, key) => (
                <div key={key} id={el.id} className="work-expirience design-education">

                    <span onClick={(e) => removeObj(e, el)} className="btnRemove"><i className="far fa-trash-alt "></i></span>
                    {!onFormHideInput &&
                        <Fragment>
                            <span className="design-span">{el.datesMonth1}</span>
                            <span className="design-span">.</span>
                            <span className="design-span">{el.datesYear1}</span>
                            <span className="design-span"> - </span>
                            {el.datesMonth2 !== "" && el.datesYear2 !== "" &&
                                <Fragment>
                                    <span className="design-span">{el.datesMonth2}</span>
                                    <span className="design-span">.</span>
                                    <span className="design-span">{el.datesYear2}</span>
                                </Fragment>
                            }
                            <p className="design-title">{el.education}</p>
                          

                        </Fragment>
                    }
                </div>
            ))}
            {onFormHideInput &&
                <div className="design-edu-popup" style={{ marginTop: "20px",backgroundColor:"white"}}>
                     <Popup text="Submit Form on Press Enter " />  
                    
                    <div className="date-div-style">
                        <input
                            type="text"
                            className="design-inputs-dates"
                            placeholder="mm"
                            name="datesMonth1InputVal"
                            value={datesMonth1InputVal}
                            onChange={(e) => setDatesMonth1InputVal(e.target.value)}
                            onKeyUp={onSubmitForm} />
                        <span style={{ color: "gray", padding: "0 5px" }}>.</span>
                        <input
                            type="text"
                            className="design-inputs-dates"
                            placeholder="yy"
                            name="datesYear1InputVal"
                            value={datesYear1InputVal}
                            onChange={(e) => setDatesYear1InputVal(e.target.value)}
                            onKeyUp={onSubmitForm} />
                        <span style={{ padding: "0 5px", color: "black" }}> - </span>
                        <input
                            type="text"
                            className="design-inputs-dates"
                            placeholder="mm"
                            name="datesMonth2InputVal"
                            value={datesMonth2InputVal}
                            onChange={(e) => setDatesMonth2InputVal(e.target.value)}
                            onKeyUp={onSubmitForm} />
                        <span style={{ color: "gray", padding: "0 5px" }}>.</span>
                        <input
                            type="text"
                            className="design-inputs-dates"
                            placeholder="yy"
                            name="datesYear2InputVal"
                            value={datesYear2InputVal}
                            onChange={(e) => setDatesYear2InputVal(e.target.value)}
                            onKeyUp={onSubmitForm} />
                    </div>
                    <input
                        placeholder="University/Courses"
                        type="text"
                        className="title-input"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        onKeyUp={onSubmitForm} />
               
               <button className="btn-close" onClick={onCloseBtn}>close</button>
                </div>
            }
        </div>
    );
}

export default DesignEducation;