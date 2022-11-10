import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
    const INIT_STATE = {
        bColor: '#000000',
        width: '',
        height: ''
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
        addBox( formData.bColor, formData.width, formData.height);
        setFormData(INIT_STATE);
    }

    return (
        <form className='boxForm' onSubmit={handleSubmit}>
            <label htmlFor='bColor'>Color:</label>
            <input
                id='bColor'
                name='bColor'
                type='color'
                value={formData.bColor}
                onChange={handleChange}
            />
            <label htmlFor='width'>Width:</label>
            <input
                id='width'
                name='width'
                type='number'
                min={1}
                max={1000}
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor='height'>Height:</label>
            <input
                id='height'
                name='height'
                type='number'
                min={1}
                max={1000}
                value={formData.height}
                onChange={handleChange}
            />
            <button>Create</button>
        </form>
    )
};

export default NewBoxForm;