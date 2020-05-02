import React from 'react';
import { connect } from 'react-redux';

const SmurfForm = (props) => {


    // * need to set up a change handler in here 

    return (
        <div className='form-container'>
            
            <label htmlFor='Name'>Name:</label>
            <input 
                className="form-container__input"
                type="text"
                placeholder="Name"
                name="Name"
                // onChange={handleChange}
                // value={newItem}
            />
           
            <label htmlFor='Age'>Age:</label>
            <input 
                className="form-container__input"
                type="text"
                placeholder="Age"
                name="Age"
                // onChange={handleChange}
                // value={newItem}
            />
            
            <label htmlFor='Height'>Height:</label>
            <input 
                className="form-container__input"
                type="text"
                placeholder="Height"
                name="Height"
                // onChange={handleChange}
                // value={newItem}
            />
            
            
            <button 
                className='form-container__button'
                // onClick={}
            >Create Smurf</button>

        </div>
    )
};


export default connect(null, {})(SmurfForm);
