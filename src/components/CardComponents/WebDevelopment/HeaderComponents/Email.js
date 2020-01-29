import React, { useState,Fragment} from 'react';
import Popup from "../Popup";

const Email = (props) => {


    const [email, setEmail] = useState("your email");
    const [emailInputVal, setemailInputVal] = useState("");
    const [hideInput,setHideInput] = useState(false);
        const emailStyle = {
            visibility:"visible",        
        }
       const hideEl = { visibility:"hidden"}

     
       const onInputChange = (e) => { setemailInputVal(e.target.value)}
        const onSubmit = (e)=>{
    
            if (e.keyCode === 13 && emailInputVal !== "" && emailInputVal.includes("@")){
            setEmail(emailInputVal);
            setemailInputVal("");
            setHideInput(!hideInput);
          
        }
    }
        const onBlur = () =>{setHideInput(!hideInput);}
        const onhideInput = () => {setHideInput(!hideInput);}

        return (
            <div style={{position:"relative"}} >
<label htmlFor="email"style={hideInput? hideEl : emailStyle} onClick={onhideInput}>{email}</label><i className="fa fa-envelope" style={{paddingLeft:"5px"}}></i>
               {hideInput &&
                <Fragment>
                    <Popup text=" 
                email must have @"/>
               <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    placeholder = "Your Email"
                    name="emailInputVal"
                    value={emailInputVal}
                    onChange={onInputChange}
                    onKeyUp={onSubmit}
                    style= {emailStyle}
                    onBlur ={onBlur}
                />
                </Fragment>
                }
           
           </div>

        );
    }


export default Email;