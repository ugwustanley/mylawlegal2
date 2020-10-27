import React from 'react';
import './Load.css'

//loading animation component
const Loading = () =>{
    return(
    <div className="animations">
        <div style={{'--i':1}}></div>
        <div style={{'--i':2}}></div>
        <div style={{'--i':3}}></div>
        <div style={{'--i':4}}></div>
    </div>
    )
}

export default Loading;