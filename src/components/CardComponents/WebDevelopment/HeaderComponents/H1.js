import React, { useState} from 'react';




const H1 = (props) => {
  

    const [nameH1, setName] = useState(props.name);
    const [nameInputVal, setNameInputVali] = useState("");
    const [hideInput,setHideInput] = useState(false);
        const h1Style = {
            visibility:"visible",     
        }
       const hideEl = { visibility:"hidden"}

       const inputStyle = { paddingTop: "10px", position:"absolute",top:"0px",left:"0"}
       const onInputChange = (e) => { setNameInputVali(e.target.value)}
        const onSubmit = (e)=>{
            if (e.keyCode === 13 && nameInputVal !== ""){
            setName(nameInputVal);
            setNameInputVali("");
            setHideInput(!hideInput); 
            
        }
    }
        const onBlur = () =>{setHideInput(!hideInput);}
        const onhideInput = () => {setHideInput(!hideInput);}

        return (
            <div style={{position:"relative"}} >
<label htmlFor="H1"><h1 style={hideInput? hideEl : h1Style} onClick={onhideInput}>{nameH1}</h1></label>
               {hideInput && <input
                    type="text"
                    id="H1"
                    autoComplete="off"
                    placeholder = {props.placeholder}
                    name="nameInputVal"
                    value={nameInputVal}
                    onChange={onInputChange}
                    onKeyUp={onSubmit}
                    style= {inputStyle}
                    onBlur ={onBlur}
                />}
           
           </div>

        );
    }


export default H1;