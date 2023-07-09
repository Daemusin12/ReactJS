import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

  render() {
    //   if (this.state.isLoggedIn) {
    //       return (<div>Welcome Lezzio</div>)
    //   } else {
    //       return (<div>Welcome Guest</div>)
    //   }

    // let message 
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Leozzio</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
 
    // return <div>{message}</div>

    // return this.state.isLoggedIn ? (<div>Welcome Leozzio</div>) : (<div>Welcome Guest</div>)

    return this.state.isLoggedIn && <div>Welcome Leozzio</div>
  }
}

export default UserGreeting