import React, { useState } from 'react';
import uuid from "uuid"
import { Fragment } from "react";
import "./DesignWorkExpirience.css";
import Popup from '../../WebDevelopment/Popup';


const DesignWorkExpirience = (props) => {

    const [niza, setNiza] = useState([]); //glavna niza za zacuvuvanje

    const [isChecked, setIsChecked] = useState(false);
    const [onFormHideInput, setonFormHideInput] = useState(false);
    const [editId,setEditId] =useState("");
    const [editMode, setEditMode] = useState(false);

    ////inputi///////
    const [H4InputVal, setH4InputVal] = useState("");
    const [pInputVal, setpInputVal] = useState("");
    const [datesMonth1InputVal, setDatesMonth1InputVal] = useState("");
    const [datesYear1InputVal, setDatesYear1InputVal] = useState("");
    const [datesMonth2InputVal, setDatesMonth2InputVal] = useState("");
    const [datesYear2InputVal, setDatesYear2InputVal] = useState("");
    const [textAreaInputVal, setTextAreaInputVal] = useState("");
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
        setEditMode(false);
        document.querySelector("body").style.backgroundColor="white"; 
    }
    const removeObj = (e, el) => {
        let filteredNiza = niza.filter(filter => filter.id !== el.id);
        setNiza([...filteredNiza]);
        setIsChecked(false);
        setonFormHideInput(false);
    }
    const onEditInputs=(e,el) => {
        document.querySelector("body").style.backgroundColor="lightgray"; 
        setEditId(niza.indexOf(el))
        setEditMode(!editMode);
        niza.forEach((element) => {
            if(element.id === el.id){
            setH4InputVal(element.H4);
            setpInputVal(element.p);
            setDatesMonth1InputVal(element.datesMonth1);
            setDatesYear1InputVal(element.datesYear1);
            setDatesMonth2InputVal(element.datesMonth2);
            setDatesYear2InputVal(element.datesYear2);
            setTextAreaInputVal(element.paragraph);
            }
        });   
    }

    const onSubmitForm = (e) => {
        if(editMode){
            let obj= {
                 id: uuid(),
                 H4: H4InputVal,
                 p: pInputVal,
                 datesMonth1: datesMonth1InputVal,
                 datesYear1: datesYear1InputVal,
                 datesMonth2: datesMonth2InputVal,
                 datesYear2: datesYear2InputVal,
                 paragraph: textAreaInputVal,
             }
             if(e.keyCode == 13) {
                document.querySelector("body").style.backgroundColor="white";
                setEditMode(false)
                niza.splice(editId,1,obj)
                setonFormHideInput(false);
                setonFormHideInput(false);
                setIsChecked(false);
                setH4InputVal("");
                setpInputVal("");
                setDatesMonth1InputVal("");
                setDatesYear1InputVal("");
                setDatesMonth2InputVal("");
                setDatesYear2InputVal("");
                setTextAreaInputVal("")
             }
     }else {
        if (e.keyCode === 13) {
            document.querySelector("body").style.backgroundColor="white";
            setNiza([...niza, {
                id: uuid(),
                H4: H4InputVal,
                p: pInputVal,
                datesMonth1: datesMonth1InputVal,
                datesYear1: datesYear1InputVal,
                datesMonth2: datesMonth2InputVal,
                datesYear2: datesYear2InputVal,
                paragraph: textAreaInputVal
            }]);
            setonFormHideInput(!onFormHideInput);
            setH4InputVal("");
            setpInputVal("");
            setDatesMonth1InputVal("");
            setDatesYear1InputVal("");
            setDatesMonth2InputVal("");
            setDatesYear2InputVal("");
            setTextAreaInputVal("");
            setIsChecked(false);
        }
    }
    }

    return (
        <div className="DesignWorkExpirience">
            <div className="onAdd">
                <h2>Work Expirience</h2>
                <button className="btnAdd" onClick={onFormInput}>add</button>
            </div>


            {niza.map((el, key) => (
                <div key={key} id={el.id} className="work-expirience ">

<div className="add-edit-remove">
                        <button className="btn-add-edit" onClick={(e)=>onEditInputs(e,el)}>Edit</button>
                        <span onClick={(e) => removeObj(e, el)} className="btn-add-edit"><i className="far fa-trash-alt "></i></span>
                     </div>
                    {(!onFormHideInput || !editMode) &&
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
                            <p className="design-title">{el.H4}</p>
                            <p className="design-title">{el.p}</p>
                            <p className="desgin-pargraph">{el.paragraph}</p>

                        </Fragment>
                    }
                </div>
            ))}
            {(onFormHideInput || editMode)&&
                <div className="forma-style">
                     <Popup text="Submit Form on Press Enter. It's not required to fill all the fields.
                    If you don't want to fill some of the inputs, just leave empty.If you leave
                     'Achievements/Tasks' empty it will be automaticly filled with 'Accomplishments' " />  
                     
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
                        placeholder="Workplace/Company"
                        type="text"
                        className="title-input"
                        value={pInputVal}
                        onChange={(e) => setpInputVal(e.target.value)}
                        onKeyUp={onSubmitForm} />
                    <input
                        placeholder="title/position"
                        type="text"
                        className="title-input"
                        value={H4InputVal}
                        onChange={(e) => setH4InputVal(e.target.value)}
                        onKeyUp={onSubmitForm} />
                    <textarea
                        type="text"
                        id="shortEngage"

                        placeholder="Short and engaging pitch about yourself."
                        value={textAreaInputVal}
                        onChange={(e) => setTextAreaInputVal(e.target.value)}
                        onKeyUp={onSubmitForm}
                    />
                     <button className="btn-close" onClick={onCloseBtn}>close</button>
                </div>
            }
        </div>
    );
}

export default DesignWorkExpirience;