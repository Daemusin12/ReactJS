import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Leozzio'
      }
      console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB get DerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
      console.log('LifecycleB shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifecycleB getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate() {
      console.log('LifecycleB componentDidUpdate ')
    }
     
  render() {
    console.log('LifeCycleB render')
    return (
        <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB