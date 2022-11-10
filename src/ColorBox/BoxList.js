import React, {useState} from 'react';
import Box from './Box';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    return (
        <div>
            <h1>BoxList</h1>
            <Box />
        </div>
    )
}

export default BoxList;