import React, { useState } from 'react';
import './NewTodoForm.css'

const NewTodoForm = ({ addTodo }) => {
    const INIT_STATE = {
        task: ''
    }
    const [formData, setFormData] = useState(INIT_STATE);

    //handles form changes for all inputs
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(formData.task);
        setFormData(INIT_STATE);
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <label htmlFor='task'>Task:</label>
            <input
                id='task'
                name='task'
                type='text'
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodoForm;