import React, { useState }from 'react';
import uuid from "uuid";
import "./DMAchievments.css";

const DMAchievments = props => {
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
    <div className="DMAchievments">
    <label  htmlFor="p" onClick={onFormInput}><h2>Achievements</h2></label>

    {onFormHideInput &&
            <input
                id= "p"
                type="text"
                value={inputval}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyUp={onSubmitForm} />               
    }

    {niza.map((el, key) => (
        <div key={key} id={el.id} className="achievments">
            <span onClick={(e) => removeObj(e, el)} className="trash-achievments"><i className="far fa-trash-alt korpa"></i></span>
            {!onFormHideInput &&
                <p className="achievmentsP">{el.p}</p>
            }
        </div>
    ))}

</div>
);
}
export default DMAchievments;