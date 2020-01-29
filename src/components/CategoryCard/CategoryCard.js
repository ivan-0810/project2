import React from 'react';
import { Link } from "react-router-dom";
import "./CategoryCard.css" ;
const CategoryCard = props => {
    const { name, id } = props;
   
   
    return (
     
        <div className='CategoryCard' id={id}>
            <h3>{name}</h3>
            <Link to={`cv/${name.replace(/\s/g, "")}`}
         
            >Choose</Link>
        </div>
    );
}
export default CategoryCard;