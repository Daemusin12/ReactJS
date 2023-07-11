import React, { Component } from 'react'
import { LifeCycleB } from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Leozzio'
      }
      console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA get DerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
      console.log('LifecycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifecycleA getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate() {
      console.log('LifecyclaA componentDidUpdate ')
    }

    changeState = () => {
      this.setState({
        name: 'George Leozzio'
      })
    }
     
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA