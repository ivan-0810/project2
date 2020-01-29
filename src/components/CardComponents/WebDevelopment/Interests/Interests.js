import React, { useState, Fragment } from 'react';
import uuid from "uuid";
import "./Interests.css";
import Popup from '../Popup';


const Interests = props => {
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
        <div className="wd-interests">
            <label htmlFor="p" onClick={onFormInput}><h2>Interests</h2></label>
          
            <Popup text="The input will be filled on pressing enter. To have more interests, click again on the title." />
            
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
            <div >
                {niza.map((el, key) => (

                   <div  key={key} id={el.id} className="interests">
                        <span  onClick={(e) => removeObj(e, el)} className="trash-interests"><i className="far fa-trash-alt korpa"></i></span>
                        <p className="interestsP">{el.p}</p>
                   </div>
   
        
    ))}
            </div>

        </div>
    );
}
export default Interests;