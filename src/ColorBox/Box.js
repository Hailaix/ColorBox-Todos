import React from 'react';

const Box = ({ bColor, width, height, remove }) => {
    return (
        <div className="Box" style={{
            "backgroundColor": bColor,
            "width": `${width}px`,
            "height": `${height}px`
        }}
        >
            <button onClick={remove}>X</button>
        </div>
    )
};

export default Box;