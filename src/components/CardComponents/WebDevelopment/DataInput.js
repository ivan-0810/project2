import React, { useState}  from 'react';

const [span1,setSpan1] = useState("06/2002-present");
const [span1InputVal,setspan1InputVal] = useState("");
const [isChecked, setIsChecked] = useState(false);
const [onFormHideInput,setonFormHideInput] = useState(false);

const DataInput = props => {
return (
<div className='DataInput'>
<span style={!onFormHideInput? hideEl : h2Style} id="span1" className="span-left" onClick={onFormInput}>{span1}</span>
                        {onFormHideInput && <input                      
                            type="text"
                            id="span1"
                            placeholder="mm/yy"
                            name="span1InputVal"
                            value={span1InputVal}
                            onChange={(e) => setspan1InputVal(e.target.value)}
                            onKeyUp={onSubmitForm}
                        />}
                     
                        {onFormHideInput && <input
                            type="checkbox"
                            id="checkbox"
                            name="isChecked"
                            value={span2InputVal}
                            onChange={(e) => setIsChecked(!isChecked)}
                            onKeyUp={onSubmitForm}
                        />}  
                        <span id="span2" className="span-right" onClick={onFormInput}>{present}</span>
</div>
);
}
export default DataInput;