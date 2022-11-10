import React from 'react';

const Todo = ({ task, remove }) => {
    return (
        <li className='Todo'>
            {task}
            <button onClick={remove}>X</button>
        </li>
    )
}

export default Todo;