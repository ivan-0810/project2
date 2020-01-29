import React from 'react';
import Img from '../WebDevelopment/HeaderComponents/Img';
import H1 from '../WebDevelopment/HeaderComponents/H1';
import H4 from '../WebDevelopment/HeaderComponents/h4';
import Paragraph from '../WebDevelopment/HeaderComponents/Paragraph';
import "./DataScienceHeader.css";
import Tips from "../../Tips";



const DataScieneHeader = (props) => {
    const sendArray =(e) =>{
        let tipsTitle = Tips[e.currentTarget.attributes['tag'].value]
        props.onDescriptionList(tipsTitle);
    }
return (
<div className='DataScieneHeader'>
    <div className="data-science-image">
        <div tag="DataSciencetipsInfos" onClick={(e) => sendArray(e)}>
            <Img />
        </div>
        </div>
    <div className="dataScienceTitle">
    <H1 name="your name" placeholder="your name"/>
    <H4 />
    <Paragraph />
    </div>
   
</div>
);
}
export default DataScieneHeader;