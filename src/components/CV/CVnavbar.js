import React from 'react';
import { NavLink } from "react-router-dom";
import "./CVnavbar.css";



const CVnavbar = (props) => {
  let { name,hideButtons,showButtons} = props;
  
  
  let style = {
    backgroundColor: "#6530d8",
    color: "#f3f3f3"
  }

  return (
    <ul className="CVnavbar">
      <li><NavLink exact activeStyle={style} to={`/cv/${name}`}onClick= {showButtons}>CV</NavLink></li>
      <li><NavLink exact activeStyle={style} to={`/cv/linkedin`} onClick= {hideButtons}>linkedin</NavLink></li>
      <li><NavLink exact activeStyle={style} to={`/cv/wearelaika`} onClick= {hideButtons}>wearelaika.com</NavLink></li>
    </ul>
      

  );
}
export default CVnavbar;