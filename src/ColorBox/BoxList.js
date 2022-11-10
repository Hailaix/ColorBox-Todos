import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    //an array of objects containing bcolor, width and height
    const [boxes, setBoxes] = useState([]);

    //remove a box from boxes based on its id
    const removeBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id));
    }

    //add a box to boxes
    const addBox = (bColor, width, height) => {
        setBoxes([...boxes, { bColor, width, height, id: uuid() }]);
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
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