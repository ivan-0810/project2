import React, { useState } from 'react';
import { Fragment } from "react";


const Paragraph = (props) => {
    const [name, setName] = useState("Short Engaging About Your Self");
    const [nameInputVal, setNameInputVal] = useState("");
    const [hideInput, setHideInput] = useState(false);
    const hideEl = { display: "none" }
    const showEl = { display: "block" }
    const inputStyle = { position: "absolute", top: "0px", left: "0", }
    const onSubmit = (e) => {
        if (e.keyCode === 13 && nameInputVal !== "") {
            setName(nameInputVal);
            setNameInputVal("");
            setHideInput(!hideInput);
        }
    }
    const onhideInput = () => { setHideInput(!hideInput); }
    const onBlur = (e) => { setHideInput(!hideInput); }
    const deleteEl = (e) => {
        setName("");
        setHideInput(!hideInput);
    }
    return (

        <div className="shortEngage" style={{ position: "relative" }}>
            <label htmlFor="shortEngage"><p style={hideInput ? hideEl : showEl} onClick={onhideInput}>{name}</p></label>

            {hideInput && <Fragment><textarea
                type="text"
                id="shortEngage"
                name="nameInputVal"              
                placeholder="Short and engaging pitch about yourself."
                value={nameInputVal}
                onChange={(e) => setNameInputVal(e.target.value)}
                onBlur={onBlur}
                onKeyUp={onSubmit}
                style={inputStyle}
            /><span onClick={deleteEl}style={{position:"absolute",top:"-15px"}}><i className="far fa-trash-alt"></i></span></Fragment>}

        </div>
    );
}

export default Paragraph;