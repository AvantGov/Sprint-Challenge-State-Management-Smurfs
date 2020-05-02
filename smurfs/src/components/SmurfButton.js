import React from 'react'
import { connect } from 'react-redux';
import { getData } from '../actions/actionIndex'


const SmurfButton = ({ getData}) => {

   
    return (
        <div className='button-container'>
            <button 
                className='button-container__button'
                onClick={ getData }
            >Get Smurfs</button>    
        </div>
    )
}

export default connect(null,{ getData })(SmurfButton);