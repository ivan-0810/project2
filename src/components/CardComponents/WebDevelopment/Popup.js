import React from "react";

  const Popup = (props) => {
      const style ={
        backgroundColor: "#374455",
        color: "white",
        borderRadius: "16px",
        textAlign: "left",
        padding: "10px",
        position: "absolute",
        top: "-64px",   
        right: "-92px",
        fontSize: "10px"
      }
    return( 
        <div style={style}className="popup">{props.text}</div>
    )
  }
export default Popup ;