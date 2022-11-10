import React, {useState} from 'react';
import { v4 as uuid} from 'uuid';

import Box from './Box';

const BoxList = () => {
    //an array of objects containing bcolor, width and height
    const [boxes, setBoxes] = useState([{
        id : uuid(),
        bColor : "lavender",
        width : 100,
        height : 100
    }]);

    //remove a box from boxes based on its id
    const removeBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id));
    }

    return (
        <div>
            {boxes.map(box => (
                <Box 
                    key={box.id} 
                    bColor={box.bColor} 
                    width={box.width} 
                    height={box.height}
                    remove={() => removeBox(box.id)}
                />
            ))}
        </div>
    )
}

export default BoxList;