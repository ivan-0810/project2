import React, { useState, Fragment } from 'react';
import "./Languages.css";
import uuid from 'uuid';
import Popup from '../../WebDevelopment/Popup';


const Languages = (props) => {
    const [niza, setNiza] = useState([])

    const [nameInputVal, setNameInputVal] = useState("");
    const [hideInput, setHideInput] = useState(false);
    const [settingsActive, setSettingsActive] = useState(false);
    const [levelOfLanguage, setLevelOfLanguage] = useState(false);
    const [finalLevelOfLanguage, setFinalLevelOfLanguage] = useState(["Full Professional Proficiency"]);

    const onSubmit = (e) => {
        if (e.keyCode === 13) {
            setNiza([...niza, {
                id: uuid(),
                title: nameInputVal,
                levelOfLanguage: finalLevelOfLanguage[0]
            }
            ])
            setNameInputVal("");
            setHideInput(!hideInput);
        }
    }
    const onhideInput = () => {
        setHideInput(!hideInput);
    }
    const removeObj = (e, el) => {
        let filteredNiza = niza.filter(filter => filter.id !== el.id);
        setNiza([...filteredNiza]);
        setHideInput(false);
    }
    const showSettings = () => {
        setSettingsActive(!settingsActive);
    }
    const showLevelOfLanguage = () => {
        setLevelOfLanguage(!levelOfLanguage);
        setSettingsActive(false);

    }

    const levelofLanguage = ["Elementary Proficiency", "Limited Working Proficiency", "Professional Working Proficiency", "Full Professional Proficiency", "Native or Bilingual Proficiency"];
    const findLevelOflanguage = (e) => {
        const filterName = levelofLanguage.filter((el, inx) => (e.target.id == inx));
        setFinalLevelOfLanguage(filterName)
        setLevelOfLanguage(false);
        setSettingsActive(false);
    }

    return (

        <div className="languages languages-dm wd-skils">
            <div className="add-DataScience-workExpirience">
                <h2 >languages</h2>
                <button className="btnAdd" onClick={onhideInput}>add</button>
            </div>
            
        
            {niza.map((el, key) => (
                <div className="final-lang-div" key={key}>
                    <span onClick={(e) => removeObj(e, el)} className="korpa-languages"><i className="far fa-trash-alt trash-languages"></i></span>
                    <p className="languages-main-title">{el.title}</p>
                    <p className="languages-title" style={props.color}>{el.levelOfLanguage}</p>
                </div>
            ))}

            {hideInput &&
            
                <Fragment>
                    <div className="languages-input">
                        <input
                            type="text"
                            id="H2"
                            name="nameInputVal"
                            placeholder="Language"
                            value={nameInputVal}
                            onChange={(e) => setNameInputVal(e.target.value)}
                            onKeyUp={onSubmit}
                        />
                        {finalLevelOfLanguage.map((el, key) => (
                            <p key={key} className="languages-title dm-languages-title" onClick={showLevelOfLanguage} style={props.color}>{el}</p>
                        ))}
                        {levelOfLanguage &&
                            <div className="levelofLanguage">
                                <span onClick={findLevelOflanguage} id="0">1/5</span>
                                <span onClick={findLevelOflanguage} id="1">2/5</span>
                                <span onClick={findLevelOflanguage} id="2">3/5</span>
                                <span onClick={findLevelOflanguage} id="3">4/5</span>
                                <span onClick={findLevelOflanguage} id="4">5/5</span>
                                <span onClick={showSettings}><i className="fas fa-cog"></i></span>

                            </div>

                        }

                    </div>
                    {settingsActive &&
                        <div className="settings-proficiency">
                            <span className="settings">Settings</span>
                            <p className="text-profiency">Proficiency Ratting:</p>
                            <div><span>5/5</span> <p className="text-profiency">Native or Bilingual Proficiency</p></div>
                            <div><span>4/5</span> <p className="text-profiency">Full Professional Proficiency</p></div>
                            <div><span>3/5</span> <p className="text-profiency">Professional Working Proficiency</p></div>
                            <div><span>2/5</span> <p className="text-profiency">Limited Working Proficiency</p></div>
                            <div><span>1/5</span> <p className="text-profiency">Elementary Proficiency</p></div>
                        </div>
                    }
                </Fragment>
            }

        </div>
    );
}

export default Languages;