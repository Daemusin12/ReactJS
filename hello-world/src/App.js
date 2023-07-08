import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';



class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet name='hotdog' heroName="itlog">
          <p>This is children props</p>
          <button>Action</button>
        </Greet>
        <Welcome name='hotdog' heroName="itlog"></Welcome>
        <Hello></Hello>
      </div>
    );
  }
}

export default App;
