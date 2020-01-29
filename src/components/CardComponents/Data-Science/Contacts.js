import React, { useState } from 'react';
import "../Data-Science/DataScienceHeader.css"
import Popup from '../WebDevelopment/Popup';

const Contacts = props => {
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState("Your Email");
    const [emailInput, setEmailInput] = useState("");
    const [phone, setPhone] = useState("Phone Number");
    const [phoneInput, setPhoneInput] = useState("");

    const onSubmit = (e) => {
        if(e.keyCode===13 && emailInput != "" && emailInput.includes("@")) {
        setEmail(emailInput);
        setEmailInput(""); 
        setPhone(phoneInput); 
        setPhoneInput("");
        setIsActive(false);
        }
    }
   
    return (
        <div className='Contacts contacts-dm'>
            <Popup text="Clicking on the Contacts will open a form to fill in. 
                   All the fields must be filled in. The number filed must be filled only with number, and the email field must be have @."/>
            <div className="email email-dm">
            <label onClick={(e) => setIsActive(!isActive)} htmlFor="email"><i className="fa fa-envelope"></i><p>{email}</p></label>
            {isActive && <input
                type="text"
                id="email"
                placeholder="Your Email"
                name="emailInputVal"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyUp={onSubmit}
            />}
        </div>
        <div className="phone phone-dm">
            <label onClick={(e) => setIsActive(!isActive)} htmlFor="phone"><i className="fa fa-mobile"></i><p>{phone}</p></label>
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
        </div>
);
}
export default Contacts;