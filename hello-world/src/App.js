import React, { Component } from 'react';
import './App.css';
import RefsDemo from './components/RefsDemo';
// import ParentComp from './components/ParentComp';
// import PureComp from './components/PureComp';
// import Table from './components/Table';
// import LifeCycleA from './components/LifeCycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Form from './components/Form';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css';
// import styles from  './appStyles.module.css'
// import NameList from './components/NameList';
// import UserGreeting from './components/UserGreeting';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
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
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting/> */}
        {/* <NameList /> */}
        {/* <StyleSheet primary={true} />
        <Inline />
        <h2 className='error'>Error</h2>
        <h2 className={styles.success}>Success</h2> */}
        {/* <Form /> */}
        {/* <LifeCycleA /> */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* <PureComp /> */}
        {/* <ParentComp /> */}
        <RefsDemo />
      </div>
    );
  }
}

export default App;
