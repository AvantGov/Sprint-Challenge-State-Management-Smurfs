import React from 'react'
import { connect } from 'react-redux';



const SmurfDisplay = (props) => {

    return (
        <div className='display-container'>
            <h1 className='display-container__header'> I am the header</h1>
            <p className='display-container__info'> i am info </p>
            <p className='display-container__info'> i am info </p>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {})(SmurfDisplay);