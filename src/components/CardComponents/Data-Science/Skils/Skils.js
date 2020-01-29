import React, { useState, Fragment } from 'react';
import "./skils.css";
import uuid from "uuid";
import Popup from '../../WebDevelopment/Popup';

const Skils = props => {
  const [isChecked, setIschecked] = useState(false)
  const [niza, setNiza] = useState([]);
  const [onFormHideInput, setonFormHideInput] = useState(false);
  const [programingLang, setProgramingLang] = useState("");
  const onFormInput = () => {
    setonFormHideInput(!onFormHideInput)
  }
  const radioClick = (e) => {
    if (e.target.style.backgroundColor === "") {
      e.target.style.backgroundColor = "#374455"
  } else {
      e.target.style.backgroundColor = ""
  }
}
  const removeObj = (e, el) => {
    let filteredNiza = niza.filter(filter => filter.id !== el.id);
    setNiza([...filteredNiza]);
  }
  const onSubmitForm = (e) => {
    if (e.keyCode === 13 && programingLang !== '') {
      //nizata se polni so vrednostite od inputite
      setNiza([...niza, {
        id: uuid(),
        title: programingLang,

      }]);
      setonFormHideInput(!onFormHideInput);
      // site inputi se brishat
      setProgramingLang("");
    }
  }

  const nizaTopki = [1, 2, 3, 4, 5]
  return (
    <div className='ds-skils'>

      <div className="add-DataScience-workExpirience wd-skils">
        <Popup text="Press enter to fill and fill the input. To have more skils, click again on the title." />
        <h2>skils</h2>
        <button className="btnAdd" onClick={onFormInput}>add</button>
      </div>

      {onFormHideInput &&
        <Fragment>
      
          <input
            placeholder="enter programing language"
            type="text"
            value={programingLang}
            onChange={(e) => setProgramingLang(e.target.value)}
            onKeyUp={onSubmitForm} />
        </Fragment>
      }
      {niza.map((el, key) => (
        <div key={key} id={el.id} className="skils-programingLanguages">
          <span onClick={(e) => removeObj(e, el)} className="trash-skils"><i className="far fa-trash-alt korpa-skils"></i></span>
          <p>{el.title}</p>
          <div className="topki">
            {nizaTopki.map((el, key) => (
              <div key={key} id={key} className="dataScienceCheckbox" onClick={(e) => radioClick(e)}></div>

            ))}
          </div>
        </div>
      ))}

    </div>
  );
}
export default Skils;