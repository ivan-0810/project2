import React, { useState } from 'react';


const Twiter = (props) => {


    const [email, setEmail] = useState(props.name);
    const [emailInputVal, setemailInputVal] = useState("");
    const [hideInput, setHideInput] = useState(false);
    const [hideDiv, setHideDiv] = useState(false);
    const emailStyle = {
        visibility: "visible",
    }
    const hideEl = { visibility: "hidden" }


    const onInputChange = (e) => { setemailInputVal(e.target.value) }
    const onSubmit = (e) => {

        if (e.keyCode === 13 && emailInputVal !== "") {
            setEmail(emailInputVal);
            setemailInputVal("");
            setHideInput(!hideInput);
        }
    }
    const hide = (e) => {
        setHideDiv(!hideDiv)
    
    }
    const onBlur = () => { setHideInput(!hideInput); }
    const onhideInput = () => { setHideInput(!hideInput); }

    return (
        <div className="hide-twiter" style={hideDiv ? {display:"none"}: { position: "relative" }} >
            <span onClick={(e) => hide(e)} className="trash-twiteer"><i className="far fa-trash-alt korpa-twiter"></i></span>
            <label htmlFor="email" style={hideInput ? hideEl : emailStyle} onClick={onhideInput}>{email}</label><i className="fa fa-twitter" style={{paddingLeft:"5px"}}></i>
            {hideInput && <input
                type="text"
                id="email"
                autoComplete="off"
                placeholder={props.placeholder}
                name="emailInputVal"
                value={emailInputVal}
                onChange={onInputChange}
                onKeyUp={onSubmit}
                style={emailStyle}
                onBlur={onBlur}

            />}

        </div>

    );
}


export default Twiter;