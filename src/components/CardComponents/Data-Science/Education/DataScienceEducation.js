import React, { useState,Fragment } from 'react';
import uuid from "uuid";
import "../DataScienceWorkExpirience/DataScienceWorkExpirience.css";
import Popup from '../../WebDevelopment/Popup';


   

const DataScienceEducation = props => {
    const [niza,setNiza] = useState([]); //glavna niza za zacuvuvanje
 

    const [isChecked, setIsChecked] = useState(false);
    const [onFormHideInput, setonFormHideInput] = useState(false);
    const [editMode, setEditMode] = useState(false)

    const [editId, setEditId] = useState("")


    const [institution, setInstitution] = useState(""); 
    const [datesMonth1InputVal, setDatesMonth1InputVal] = useState("");
    const [datesYear1InputVal, setDatesYear1InputVal] = useState("");
    const [datesMonth2InputVal, setDatesMonth2InputVal] = useState("");
    const [datesYear2InputVal, setDatesYear2InputVal] = useState("");
    const [span2InputVal, setspan2InputVal] = useState("");
    
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
        let filteredNiza = niza.filter(filter => filter.id !== el.id );
        setNiza([...filteredNiza]); 
        setIsChecked(false);
        setonFormHideInput(false);
    }
    const onEditInputs = (e, el) => {
        document.querySelector("body").style.backgroundColor="lightgray"; 
        setEditId(niza.indexOf(el));
        setEditMode(!editMode);
        niza.forEach((element) => {
            if (element.id === el.id) {
                setInstitution(element.H4);
                setDatesMonth1InputVal(element.p);
                setDatesMonth1InputVal(element.datesMonth1);
                setDatesYear1InputVal(element.datesYear1);
                setDatesMonth2InputVal(element.datesMonth2);
                setDatesYear2InputVal(element.datesYear2);
                setspan2InputVal(element.span2);
            }
        });
    }

    const onSubmitForm = (e) => {
        if (editMode) {
            let obj = {
                id: uuid(),
                H4: institution,
                datesMonth1: datesMonth1InputVal,
                datesYear1: datesYear1InputVal,
                datesMonth2: datesMonth2InputVal,
                datesYear2: datesYear2InputVal,
                span2: span2InputVal,
            }
            if (e.keyCode == 13) {
                document.querySelector("body").style.backgroundColor="white"; 
                setEditMode(false)
                niza.splice(editId, 1, obj)
                setonFormHideInput(false);
                setonFormHideInput(false);
                setInstitution("");
                setDatesMonth1InputVal("");
                setDatesYear1InputVal("");
                setDatesMonth2InputVal("");
                setDatesYear2InputVal("");
                setspan2InputVal("");
                setIsChecked(false);
            }

        } else {

        if (e.keyCode === 13 ) {    
            document.querySelector("body").style.backgroundColor="white"; 
            setNiza([...niza,{
                                id: uuid(),
                                H4:institution,
                                datesMonth1: datesMonth1InputVal,
                                datesYear1: datesYear1InputVal,
                                datesMonth2: datesMonth2InputVal,
                                datesYear2: datesYear2InputVal,
                                span2: span2InputVal,
                            } ]);           
            setonFormHideInput(!onFormHideInput);                
    
            setInstitution("");
            setDatesMonth1InputVal("");
            setDatesYear1InputVal("");
            setDatesMonth2InputVal("");
            setDatesYear2InputVal("");
            setspan2InputVal("");
            setIsChecked(false);                           
        } 
    }    
    }
    const radioColor = () => {
        setDatesMonth2InputVal("");
        setDatesYear2InputVal("");
        setIsChecked(!isChecked);

    }
    return (

        <div className ="education">
            <div className="add-DataScience-workExpirience">
                <h2>Education</h2>
                <button className="btnAdd" onClick={onFormInput}>add</button>
            </div>


            {niza.map((el, key) => (
                <div key={key} id={el.id} className="Data-Science-work-expirience work-expirience" >
                             
                             <div className="add-edit-remove">
                        <button className="btn-add-edit" onClick={(e) => onEditInputs(e, el)}>Edit</button>
                        <span onClick={(e) => removeObj(e, el)} className="btn-add-edit"><i className="far fa-trash-alt "></i></span>
                    </div>
                    {(!onFormHideInput || !editMode) &&
                        <Fragment>
                            <h4 >{el.H4}</h4>
                       
                            <span className="span-left" >{el.datesMonth1}</span>
                            <span className="span-left">/</span>
                            <span className="span-left" >{el.datesYear1}</span>
                            <span className="span-left"> - </span>
                            <Fragment>
                                { el.datesMonth2 !=""  && el.datesYear2 !="" ?
                                    <Fragment>
                                        <span className="span-left" >{el.datesMonth2}</span>
                                        <span className="span-left">/</span>
                                        <span className="span-left" >{el.datesYear2}</span>
                                    </Fragment>

                                    :
                                    <span className="span-left" >present</span> 
                                }
                            </Fragment>
                            <span id="span2" className="span-right" >{el.span2}</span>
                            <h5 id="Accomplishments" >{el.Accomplishments}</h5>
                            <ul>
                                {el.ul > -1 && el.ul.map((el, key) => (

                                    <li key={key}><i class="fas fa-square-full"></i>{el}</li>

                                ))}
                            </ul>

                        </Fragment>
                    }
                </div>
            ))}
            {(onFormHideInput || editMode) &&
                <div className="data-science-inputs" >
                   
                   <div style={{ marginTop: "28px", paddingBottom: "25px", position:"relative" }}>
                   <Popup text="Submit the Form on pressing Enter. All the fields must be filled in."/>
                   <input
                        placeholder="Institution/Place of Education"
                        type="text"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        onKeyUp={onSubmitForm} />

                    <div className="date-div-style">
                        <input
                            type="text"
                            className="inputs-dates"
                            placeholder="mm"
                            name="datesMonth1InputVal"
                            value={datesMonth1InputVal}
                            onChange={(e) => setDatesMonth1InputVal(e.target.value)}
                            onKeyUp={onSubmitForm} />
                        <span style={{ color: "gray", padding: "5px 0 4px 5px" }}>/</span>
                        <input
                            type="text"
                            className="inputs-dates"
                            placeholder="yy"
                            name="datesYear1InputVal"
                            value={datesYear1InputVal}
                            onChange={(e) => setDatesYear1InputVal(e.target.value)}
                            onKeyUp={onSubmitForm} />
                        <span style={{ padding: "5px" }}> - </span>
                        {!isChecked ?
                            <Fragment>
                                <input
                                    type="text"

                                    className="inputs-dates"
                                    placeholder="mm"
                                    name="datesMonth2InputVal"
                                    value={datesMonth2InputVal}
                                    onChange={(e) => setDatesMonth2InputVal(e.target.value)}
                                    onKeyUp={onSubmitForm} />
                                <span style={{ color: "gray", padding: "5px 0 4px 5px" }}>/</span>
                                <input
                                    type="text"

                                    className="inputs-dates"
                                    placeholder="yy"
                                    name="datesYear2InputVal"
                                    value={datesYear2InputVal}
                                    onChange={(e) => setDatesYear2InputVal(e.target.value)}
                                    onKeyUp={onSubmitForm}
                                />
                            </Fragment>
                            :
                            <span className="span-left" style={{margin:"9px"}} >present</span>
                        }
                        <div className="radio-checkbox1" onClick={radioColor}>
                            <div className={isChecked ? "radio-checkbox radio-ds" : ""} >
                            </div>
                        </div>
                        <span className="span-left"  style={{margin:"9px"}}>present</span>
                    </div>
                   </div>

                

                    <div>
                        <input
                            type="text"
                            id="span2"
                            name="span2InputVal"
                            placeholder="City, Country"
                            value={span2InputVal}
                            onChange={(e) => setspan2InputVal(e.target.value)}
                            onKeyUp={onSubmitForm} />
                    </div>

                    <button className="btn-close" onClick={onCloseBtn}>close</button>
                </div>
            }



        </div>
    );
}
export default DataScienceEducation;