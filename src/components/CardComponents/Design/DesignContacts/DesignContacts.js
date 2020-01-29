import React, { useState } from 'react';
import "./DesignContacts.css";

const DesignContacts = props => {
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState("your email");
    const [emailInput, setEmailInput] = useState("");
    const [phone, setPhone] = useState("your phone number");
    const [phoneInput, setPhoneInput] = useState("");
    const [linkedIn, setLinkedIn] = useState ("your linkedin");
    const [linkedInInput,setLinkedInInput] = useState("");
    const [place, setPlace] = useState("your place")
    const [placeInput, setPlaceInput] = useState ("");

    const onSubmit = (e) => {
        if(e.keyCode===13 && 
            emailInput != "" && 
            phoneInput != "" && 
            linkedInInput != "" &&
            placeInput != ""

         ) {
        setEmail(emailInput);  
        setPhone(phoneInput);       
        setLinkedIn(linkedInInput);
        setPlace(placeInput);
        setEmailInput(""); 
        setPhoneInput("");
        setLinkedInInput("");
        setPlaceInput("");
        setIsActive(false);
        }
    }

    return (
        <div className='design-contacts'>
    
                <h2>contacts</h2>
            
               <div >
            <label onClick={(e) => setIsActive(!isActive)} htmlFor="phone"><p>{phone}</p></label>
            {isActive && <input
                type="number"
                id="phone"
                placeholder="Your Phone Number"
                name="phoneInputVal"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                onKeyUp={onSubmit}
    
            />}
            </div>
            <div >
            <label onClick={(e) => setIsActive(!isActive)} htmlFor="email"><p>{email}</p></label>
            {isActive && <input
                type="email"
                id="email"
                placeholder="Your Email"
                name="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyUp={onSubmit}
              
            />}
        </div>
      
            <div>
            <label onClick={(e) => setIsActive(!isActive)} htmlFor="linkedIn"><p>{linkedIn}</p></label>
            {isActive && <input
                id="linkedIn"
                type="text"
                name ="linkedInInput"
                placeholder="Your LinkedIn"
                value={linkedInInput}
                onChange={(e) => setLinkedInInput(e.target.value)}
                onKeyUp={onSubmit}
             
            />}
            </div>
            <div >
            <label onClick={(e) => setIsActive(!isActive)} htmlFor="place"><p>{place}</p></label>
            {isActive && <input
                id="place"
                type="text"
                name="placeInput"
                placeholder="Your Place"
                value={placeInput}
                onChange={(e) => setPlaceInput(e.target.value)}
                onKeyUp={onSubmit}
      
            />}
            </div>
     
        </div>
);
}
export default DesignContacts;