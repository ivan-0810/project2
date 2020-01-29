import React, { useState, Fragment } from 'react';
import uuid from 'uuid';
import "./SkilsAndCompetenciens.css";
import Popup from '../Popup';

const SkilsAndCompetenciens = props => {
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
            setonFormHideInput(!onFormHideInput);
            // site inputi se brishat
            setInputVal("");
        }
    }

    return (
        <div className="wd-skils">
            <label htmlFor="p" onClick={onFormInput}><h2>{props.name}</h2></label>
            <Popup text="The input will be filled on pressing enter. To have more skils, click again on the title." />
            {onFormHideInput &&
               <Fragment>
                   
                <input
                    id="p"
                    type="text"
                    value={inputval}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyUp={onSubmitForm} />
               </Fragment>
            }
            <div className="Skils">
                {niza.map((el, key) => (
                    <div key={key} id={el.id} className="skils skils-dm">
                     
                        <span onClick={(e) => removeObj(e, el)} className="trash-skils"><i className="far fa-trash-alt korpa"></i></span>
                  
                            <p className="p-wd p-dm">{el.p}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
export default SkilsAndCompetenciens;