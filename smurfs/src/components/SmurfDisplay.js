import React from 'react'
import { connect } from 'react-redux';



const SmurfDisplay = (props) => {

    console.log('display props:', props)
    const hasData = props.hasData

    return (
        <div className='display-container'>
            { hasData ? props.data.map((item) => {
                return (
                    <div className='smurf' key={item.id}>
                        <h1 className='display-container__header'>{item.name}</h1>
                        <p className='display-container__info'> {item.age} </p>
                        <p className='display-container__info'> {item.height} </p>
                    </div>
                )
            }) : <div> click 'get smurf' below </div>}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        data: state.data,
        hasData: state.hasData
    }
}

export default connect(mapStateToProps, {})(SmurfDisplay);