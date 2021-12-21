import React from 'react';
import { UserForm } from './components/UserForm';
import "./App.css"
import { Stepper } from '@material-ui/core';
import {CustomizedSteppers} from './components/stepper';
const App = () => {
  return (
    
    <div className="App">
     <CustomizedSteppers/>
      <UserForm />
      <img  id="image" src="https://images.pexels.com/photos/10594490/pexels-photo-10594490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>

    </div>
  
  );
}

export default App;



