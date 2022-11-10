import React from 'react';
import './Box.css'
const Box = ({ bColor, width, height, remove }) => {
    return (
        <>
        <div className="Box" style={{
            "backgroundColor": bColor,
            "width": `${width}px`,
            "height": `${height}px`
        }}
        >
        </div>
        <button onClick={remove}>X</button>
        </>
    )
};

export default Box;