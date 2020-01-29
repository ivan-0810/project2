import React, {useState} from 'react';
import {Fragment} from "react";


const H4 = (props) => {
    const [name,setName] = useState("profesional title");
    const [nameInputVal, setNameInputVal] = useState("");
    const [hideInput,setHideInput] = useState(false);


    const hideEl = { visibility:"hidden"}
    const showEl = { visibility:"visible"}

    const inputStyle = {position: "absolute",top: "0px",left:"0"}
 
        const onSubmit = (e)=>{
            if (e.keyCode === 13 && nameInputVal !== ""){
                setName(nameInputVal);
                setNameInputVal("");
                setHideInput(!hideInput);
            }
        }
        const onhideInput = () => {setHideInput(!hideInput);}
        const onBlur = (e) =>{setHideInput(!hideInput);}
        const deleteEl= (e) => {
            setName("");
            setHideInput(!hideInput);
        }
        return (
          
             <div style={{position:"relative"}}>
<label htmlFor="H4"><h4 style={hideInput ? hideEl : showEl} onClick={onhideInput}>{name}</h4></label>
            
              {hideInput && <Fragment><input
                    type="text"
                    id="H4"
                    name="nameInputVal"
                    placeholder="Profesional Title"
                    value={nameInputVal}
                    onChange={(e) => setNameInputVal(e.target.value)}
                    onBlur ={onBlur}
                    onKeyUp={onSubmit}
                    style={inputStyle}
                /><span onClick={deleteEl}><i className="far fa-trash-alt "></i></span></Fragment>}
          
             </div>
        );
}

export default H4;