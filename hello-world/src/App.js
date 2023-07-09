import React, { Component } from 'react';
import './App.css';
import EventBind from './components/EventBind';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';



class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Greet name='hotdog' heroName="itlog">
          <p>This is children props</p>
          <button>Action</button>
        </Greet>
        <Welcome name='hotdog' heroName="itlog"></Welcome> */}
        {/* <Hello></Hello>
        <Message/>
        <Counter /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        <EventBind />
      </div>
    );
  }
}

export default App;
