import React from 'react';
import { UserForm } from './components/UserForm';
import "./App.css"

const App = () => {
  return (
    
    <div className="App">
        <div className='spanner'></div>
      <UserForm />
      <img  id="image" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="hi"></img>
       
    </div>
  
  );
}

export default App;



