import React, { useState } from 'react';
import uuid from "uuid"
import { Fragment } from "react";
import Popup from './Popup';





const WorkExpirience = (props) => {

    const [niza, setNiza] = useState([]); //glavna niza za zacuvuvanje
    const [ulLista, setUlLista] = useState([]); // niza za listite
    const [editId,setEditId] =useState("")
    const [isChecked, setIsChecked] = useState(false);
    const [onFormHideInput, setonFormHideInput] = useState(false);
    const [editMode, setEditMode] = useState(false);

    ////inputi///////
    const [H4InputVal, setH4InputVal] = useState("");
    const [pInputVal, setpInputVal] = useState("");
    const [datesMonth1InputVal, setDatesMonth1InputVal] = useState("");
    const [datesYear1InputVal, setDatesYear1InputVal] = useState("");
    const [datesMonth2InputVal, setDatesMonth2InputVal] = useState("");
    const [datesYear2InputVal, setDatesYear2InputVal] = useState("");
    const [span2InputVal, setspan2InputVal] = useState("");
    const [AccomplishmentsInputVal, setAccomplishmentsInputVal] = useState("");
    const [AccomplishmentsResponsibilityTaskValue, setAccomplishmentsResponsibilityTaskValue] = useState("");
    const onFormInput = (e) => {  setonFormHideInput(!onFormHideInput);
    };

    const removeObj = (e, el) => {
        let filteredNiza = niza.filter(filter => filter.id !== el.id);
        setNiza([...filteredNiza]);
        setIsChecked(false);
        setonFormHideInput(false);
    }
    const onEditInputs=(e,el) => {
        
        setEditId(niza.indexOf(el))
        //console.log(editId);
        //console.log(el);
        setEditMode(!editMode);
        niza.forEach((element) => {
            if(element.id === el.id){
            setH4InputVal(element.H4);
            setpInputVal(element.p);
            setDatesMonth1InputVal(element.datesMonth1);
            setDatesYear1InputVal(element.datesYear1);
            setDatesMonth2InputVal(element.datesMonth2);
            setDatesYear2InputVal(element.datesYear2);
            setspan2InputVal(element.span2);
            setAccomplishmentsInputVal(element.Accomplishments);
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
                    span2: span2InputVal,
                    Accomplishments: AccomplishmentsInputVal,
                    ul: ulLista
                }
            if(e.keyCode == 13) {
                setEditMode(false)
                console.log(editId);
               // console.log(niza);
                
                niza.splice(editId,1,obj)
                setonFormHideInput(false);
                setonFormHideInput(false);
                setH4InputVal("");
                setpInputVal("");
                setDatesMonth1InputVal("");
                setDatesYear1InputVal("");
                setDatesMonth2InputVal("");
                setDatesYear2InputVal("");
                setspan2InputVal("");
                setAccomplishmentsInputVal("")
                setUlLista([]);
                setIsChecked(false);
            } 
        
            
        }else {
            if (e.keyCode === 13) {
                setNiza([...niza, {
                    id: uuid(),
                    H4: H4InputVal,
                    p: pInputVal,
                    datesMonth1: datesMonth1InputVal,
                    datesYear1: datesYear1InputVal,
                    datesMonth2: datesMonth2InputVal,
                    datesYear2: datesYear2InputVal,
                    span2: span2InputVal,
                    Accomplishments: AccomplishmentsInputVal,
                    ul: ulLista
                }])
                setonFormHideInput(!onFormHideInput);
                setH4InputVal("");
                setpInputVal("");
                setDatesMonth1InputVal("");
                setDatesYear1InputVal("");
                setDatesMonth2InputVal("");
                setDatesYear2InputVal("");
                setspan2InputVal("");
                setAccomplishmentsInputVal("")
                setUlLista([]);
                setIsChecked(false);
                
            }
        }
  
    }
    const onListSubmit = (e) => {
        if (e.keyCode === 13 &&
            AccomplishmentsResponsibilityTaskValue !== "") {
            setUlLista([...ulLista, AccomplishmentsResponsibilityTaskValue]);
            setAccomplishmentsResponsibilityTaskValue("");
        }
    }
    const radioColor = () => {
        setDatesMonth2InputVal("");
        setDatesYear2InputVal("");
        setIsChecked(!isChecked);
    }
    return (
        <div className="WorkExpirience">
            <div className="onAdd">
                <h2>Work Expirience</h2>
                <button className="btnAdd" onClick={onFormInput}>Add</button>       
            </div>
            {niza.map((el, key) => (
                <div key={key} id={el.id} className="work-expirience">
                     <div className="add-edit-remove">
                        <button className="btn-add-edit" onClick={(e)=>onEditInputs(e,el)}>Edit</button>
                        <span onClick={(e) => removeObj(e, el)} className="btn-add-edit"><i className="far fa-trash-alt "></i></span>
                     </div>

                    
                    {(!onFormHideInput || !editMode) &&
                        <Fragment>
                             
                            <div className="rectangle"></div>
                            <label htmlFor="prvInput"><h4 >{el.H4}</h4></label>
                            <p>{el.p}</p>
                            <span className="span-left" >{el.datesMonth1}</span>
                            <span className="span-left">/</span>
                            <span className="span-left" >{el.datesYear1}</span>
                            <span className="span-left"> - </span>
                            <Fragment>
                                {el.datesMonth2 != "" && el.datesYear2 != "" ?
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
                            <h5 id="Accomplishments" >{el.Accomplishments != "" ?el.Accomplishments : "Accomplishments"}</h5>
                            <ul>
                                {el.ul.length > -1 && el.ul.map((el, key) => (

                                    <li key={key}>{el}</li>

                                ))}
                            </ul>

                        </Fragment>
                    }
                </div>
            ))}
            {(onFormHideInput || editMode)&&
                         
                <div className="forma-style" >
                     <Popup text="Submit Form on Press Enter. It's not required to fill all the fields.
                    If you don't want to fill some of the inputs, just leave empty.If you leave
                     'Achievements/Tasks' empty it will be automaticly filled with 'Accomplishments' " />  
                    <input
                        placeholder="title/position"
                        type="text"
                        id="prvInput"
                        name="H4InputVal"
                        value={H4InputVal}
                        onChange={(e) => setH4InputVal(e.target.value)}
                        onKeyUp={onSubmitForm} />

                    <input
                        placeholder="Workplace/Company"
                        type="text"
                        id="p"
                        name="pInputVal"
                        value={pInputVal}
                        onChange={(e) => setpInputVal(e.target.value)}
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
                            <span style={{ margin: "10px 5px 5px 5px", borderBottom: "1px solid #2dbbad", marginBottom: "1px" }} className="span-left" >present</span>
                        }
                        <div className="radio-checkbox1" onClick={radioColor}>
                            <div className={isChecked ? "radio-checkbox" : ""} >
                            </div>
                        </div>
                        <span style={{ margin: "10px 5px 5px 5px" }} className="span-left">present</span>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Achievements/Tasks"
                            id="Accomplishments"
                            name="AccomplishmentsInputVal"
                            value={AccomplishmentsInputVal}
                            onChange={(e) => setAccomplishmentsInputVal(e.target.value)}
                            onKeyUp={onSubmitForm} />
                    </div>
                    <input
                        type="text"
                        placeholder="- Accomplishments/Responsibility/Task"
                        id="AccomplishmentsResponsibilityTaskValue"
                        name="AccomplishmentsResponsibilityTaskValue"
                        value={AccomplishmentsResponsibilityTaskValue}
                        onChange={(e) => setAccomplishmentsResponsibilityTaskValue(e.target.value)}
                        onKeyUp={onListSubmit} />
                    <ul>
                        {ulLista.map((el, key) => (

                            <li key={key}>{el}</li>

                        ))}
                    </ul>

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


                </div>
            }


        </div>



    );
}

export default WorkExpirience;