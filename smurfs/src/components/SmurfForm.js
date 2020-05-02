import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addData } from '../actions/actionIndex'

const SmurfForm = (props) => {

    const [ localState, setLocalState ] = useState({
        name: '',
        age: '',
        height: '',
    })

    const handleChange = (event) => {
        event.preventDefault();
        console.log("input state:", localState)
        setLocalState({...localState, [event.target.name]: event.target.value})
    }

    const addDataHandler = () => {
        props.addData(localState);
        setLocalState({
            name: '',
            age: '',
            height: '',
        })
    }

    // * need to set up a change handler in here 

    return (
        <div className='form-container'>
            
            <label htmlFor='Name'>Name:</label>
            <input 
                className="form-container__input"
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={localState.name}
            />
           
            <label htmlFor='Age'>Age:</label>
            <input 
                className="form-container__input"
                type="text"
                placeholder="Age"
                name="age"
                onChange={handleChange}
                value={localState.age}
            />
            
            <label htmlFor='Height'>Height:</label>
            <input 
                className="form-container__input"
                type="text"
                placeholder="Height"
                name="height"
                onChange={handleChange}
                value={localState.height}
            />
            
            
            <button 
                className='form-container__button'
                onClick={addDataHandler}
            >Create Smurf</button>

        </div>
    )
};


export default connect(null, { addData })(SmurfForm);
