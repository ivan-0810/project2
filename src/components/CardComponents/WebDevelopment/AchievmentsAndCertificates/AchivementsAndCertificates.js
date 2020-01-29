import React, { Fragment,useState } from 'react';
import uuid from "uuid";
import "./AchivmentesAndCertificates.css";
import Popup from "../Popup";

const AchivementsAndCertificates = props => {
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
        <div className="wd-achievments design">
            <label htmlFor="p" onClick={onFormInput}><h2>{props.name}</h2></label>
            <Popup text={`The input will be filled on pressing enter. To have more ${props.popup}, click again on the title.`} />
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

            {niza.map((el, key) => (
                <div key={key} id={el.id} className="achievments design-skils">
                    <span onClick={(e) => removeObj(e, el)} className="trash-achievments"><i className="far fa-trash-alt korpa"></i></span>
                    {!onFormHideInput &&
                        <p className="achievmentsP design-skils-p">{el.p}</p>
                    }
                </div>
            ))}

        </div>
    );
}
export default AchivementsAndCertificates;