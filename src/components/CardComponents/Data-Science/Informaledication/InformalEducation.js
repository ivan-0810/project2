import React, { useState } from 'react';
import uuid from "uuid";
import "../../WebDevelopment/Interests/Interests.css";
import "./InformalEducation.css";
import Popup from '../../WebDevelopment/Popup';

let nadvor = [];

const InformalEducation = props => {
    const [niza, setNiza] = useState([]); //glavna niza za zacuvuvanje
    const [onFormHideInput, setonFormHideInput] = useState(false);
    const [inputval, setInputVal] = useState("");
    const onFormInput = (e) => {
        setonFormHideInput(!onFormHideInput);
    };
    const removeObj = (e, el) => {
        let filteredNiza = niza.filter(filter => filter.id !== el.id);
        setNiza([...filteredNiza]);
    }
    const onSubmitForm = (e) => {
        if (e.keyCode === 13 && inputval !== ''
        ) {
            //nizata se polni so vrednostite od inputite
            setNiza([...niza,
            {
                id: uuid(),
                p: inputval
            }
          
            ]);
            nadvor = [...nadvor, niza]
            console.log("vleze vo nadvor " + nadvor);
            
            setonFormHideInput(!onFormHideInput);
            // site inputi se brishat
            setInputVal("");
        }
    }

    
    return (
        <div className="informal-education wd-skils">
            <label htmlFor="p" onClick={onFormInput}><h2>Interests</h2></label>
            <Popup text="Press enter to fill and fill the input. To have more interests, click again on the title." />
            {onFormHideInput &&
                <input
                    id="p"
                    type="text"
                    value={inputval}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyUp={onSubmitForm} />
            }
            <div >
                {niza.map((el, key) => (

                   <div  key={key} id={el.id} className="interests">
                        <span  onClick={(e) => removeObj(e, el)} className="trash-interests "><i className="far fa-trash-alt korpa trash-informEdu"></i></span>
                        <p className="interestsP informalEducationP">{el.p}</p>
                   </div>
   
        
    ))}
            </div>

        </div>
    );
}
export default InformalEducation;