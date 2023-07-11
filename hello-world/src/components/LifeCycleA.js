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
     
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA