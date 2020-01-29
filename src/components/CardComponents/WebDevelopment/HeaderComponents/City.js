import React, { useState} from 'react';


const City = (props) => {


    const [email, setEmail] = useState("city, country");
    const [emailInputVal, setemailInputVal] = useState("");
    const [hideInput,setHideInput] = useState(false);
        const emailStyle = {
            visibility:"visible",        
        }
       const hideEl = { visibility:"hidden"}

     
       const onInputChange = (e) => { setemailInputVal(e.target.value)}
        const onSubmit = (e)=>{
    
            if (e.keyCode === 13 && emailInputVal !== "" ){
            setEmail(emailInputVal);
            setemailInputVal("");
            setHideInput(!hideInput);
          
        }
    }
        const onBlur = () =>{setHideInput(!hideInput);}
        const onhideInput = () => {setHideInput(!hideInput);}

        return (
            <div style={{position:"relative"}} >
<label htmlFor="email"style={hideInput? hideEl : emailStyle} onClick={onhideInput}>{email}</label><i className="fa fa-map-marker" style={{paddingLeft:"5px"}}></i>
               {hideInput && <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    placeholder = "City, Country"
                    name="emailInputVal"
                    value={emailInputVal}
                    onChange={onInputChange}
                    onKeyUp={onSubmit}
                    style= {emailStyle}
                    onBlur ={onBlur}

                />}
           
           </div>

        );
    }


export default City;