// * dependencies:
import React, { Component } from "react";
import { connect } from 'react-redux'


// * components: 
import SmurfForm from '../components/SmurfForm';
import SmurfDisplay from '../components/SmurfDisplay'
import SmurfButton from '../components/SmurfButton'


import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfDisplay />
        <SmurfForm />
        <SmurfButton />
      </div>
    );
  }
}

export default connect(null, {})(App);
