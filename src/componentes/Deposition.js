import React from "react";
import "../styles-sheets/Deposition.css";

function Deposition (props){
    return (
    <div className="deposition-container">
        <img className="image-deposition"
        src={require (`../images/images/foto.${props.image}.png`)} 
        alt="Foto del Vaguito"/>
        <div className="deposition-text-container">
            <p className="deposition-name"> <strong>{props.name}</strong> vive en <strong>{props.country}</strong></p>
            <p className="deposition-load">{props.load} en {props.company} </p>
            <p className="deposition-text">"{props.deposition}"</p>
            </div>
        
        
    </div>
    )
}

export default Deposition;